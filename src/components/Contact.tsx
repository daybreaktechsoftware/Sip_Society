import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useRef, useState } from "react";
import { useInView } from "../hooks/useScrollAnimation";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, 0.2);

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+27 79 702 6206",
      link: "tel:+27797026206",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "aybcreations@outlook.com",
      link: "mailto:aybcreations@outlook.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Cape Town, South Africa",
      link: null,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Days",
      value: "Monday - Sunday",
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-rose-50 via-rose-100/30 to-rose-50 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl font-bold text-rose-900 mb-4 animate-text-shimmer bg-gradient-to-r from-rose-900 via-pink-700 to-rose-900 bg-clip-text text-transparent bg-[length:200%_auto]">
            Get In Touch
          </h2>
          <p className="text-xl text-rose-700 max-w-2xl mx-auto">
            Have questions or want to join our giveaway? We'd love to hear from
            you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 transform"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="p-3 bg-gradient-to-br from-rose-100 to-pink-200 text-rose-900 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-rose-600 mb-1">
                      {info.label}
                    </div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-lg font-semibold text-rose-900 hover:text-rose-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-lg font-semibold text-rose-900">
                        {info.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-gradient-to-br from-rose-600 to-pink-700 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Join Our Community!</h3>
              <p className="text-rose-100 leading-relaxed mb-4">
                Follow{" "}
                <a
                  href="https://instagram.com/sipsociety_cpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline hover:opacity-80"
                >
                  @sipsociety_cpt
                </a>{" "}
                on Instagram and tag us—we run occasional giveaways and
                promotions. Keep an eye on our feed for chances to win.
              </p>
              <p className="text-rose-100 leading-relaxed">
                Whether you're planning an event, have a special request, or
                just want to say hello, we're here to make every sip special!
              </p>
            </div>
          </div>

          {/* Contact Form (replaces Airtable embed) */}
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    // Optional reCAPTCHA token - site key should be loaded by page if configured
    let token = "";
    try {
      // @ts-ignore
      if (window.grecaptcha && process.env.VITE_RECAPTCHA_SITE_KEY) {
        // @ts-ignore
        token = await window.grecaptcha.execute(process.env.VITE_RECAPTCHA_SITE_KEY, { action: "submit" });
      }
    } catch (err) {
      // ignore
    }

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, recaptchaToken: token }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");

      // disable for 10s to avoid rapid resubmits (client-side cooldown)
      setTimeout(() => setSent(false), 10000);
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-2xl shadow">
      <div>
        <label className="text-sm font-medium text-rose-700">Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" required />
      </div>
      <div>
        <label className="text-sm font-medium text-rose-700">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" required />
      </div>
      <div>
        <label className="text-sm font-medium text-rose-700">Message</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2 h-32" required />
      </div>
      <div>
        <button disabled={loading || sent} className="w-full py-3 bg-rose-600 text-white rounded-full font-bold hover:opacity-90 disabled:opacity-50">
          {loading ? "Sending..." : sent ? "Sent" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
