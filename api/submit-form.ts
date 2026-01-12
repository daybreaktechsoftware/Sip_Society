import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { fetch } from "undici";

// Upstash Redis (provide UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN in env)
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL as string,
  token: process.env.UPSTASH_REDIS_REST_TOKEN as string,
});

// 5 requests per minute per IP
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "60 s"),
});

// Helper to verify reCAPTCHA v3 token
async function verifyRecaptcha(token: string) {
  const secret = process.env.RECAPTCHA_SECRET;
  if (!secret) return false;
  const res = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
  });
  const data = await res.json();
  return data.success && data.score && data.score >= 0.4;
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") return res.status(405).send({ error: "Method not allowed" });

  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown";

  // Rate limit by IP
  const { success: rlSuccess } = await ratelimit.limit(ip as string);
  if (!rlSuccess) {
    return res.status(429).json({ error: "Too many requests" });
  }

  const { name, email, message, recaptchaToken } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const recaptchaOk = await verifyRecaptcha(recaptchaToken);
  if (!recaptchaOk) {
    return res.status(400).json({ error: "reCAPTCHA verification failed" });
  }

  try {
    const payload = { name, email, message, created_at: new Date().toISOString() };
    // Push to an upstash list for later processing
    const key = `contact_messages`;
    await redis.lpush(key, JSON.stringify(payload));

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || String(err) });
  }
}
