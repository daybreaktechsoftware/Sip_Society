import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com/sipsociety_cpt",
      label: "Instagram",
    },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
  ];

  const footerLinks = {
    shop: [
      { label: "All Mocktails", href: "#products" },
      { label: "Tropical Collection", href: "#products" },
      { label: "Berry Collection", href: "#products" },
      { label: "Party Packages", href: "#products" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Process", href: "#about" },
      { label: "Join Giveaway", href: "#contact" },
      { label: "Blog", href: "#" },
    ],
    support: [
      { label: "Contact Us", href: "#contact" },
      { label: "Delivery Info", href: "#" },
      { label: "Returns", href: "#" },
      { label: "FAQs", href: "#" },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-rose-950 via-rose-900 to-rose-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-4xl">�</span>
              <span
                className="text-3xl font-bold uppercase"
                style={{ fontFamily: "'Bungee', sans-serif" }}
              >
                Sip Society
              </span>
            </div>
            <p className="text-rose-200 mb-6 leading-relaxed max-w-md">
              Handcrafted non-alcoholic mocktails made with premium ingredients
              and fresh fruits. Pure refreshment in every sip.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-rose-200">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span>Cape Town, South Africa</span>
              </div>
              <div className="flex items-center gap-3 text-rose-200">
                <Phone className="w-5 h-5 text-pink-400" />
                <span>+27 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-rose-200">
                <Mail className="w-5 h-5 text-pink-400" />
                <span>hello@sipsociety.co.za</span>
              </div>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 bg-rose-800 rounded-full hover:bg-pink-400 hover:text-rose-900 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-pink-400">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-rose-200 hover:text-pink-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-pink-400">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-rose-200 hover:text-pink-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-pink-400">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-rose-200 hover:text-pink-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-rose-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-rose-300 text-sm">
              © {currentYear} Sip Society. All rights reserved. Made with love
              and fresh flavors. 🍹
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-rose-300 hover:text-pink-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-rose-300 hover:text-pink-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-rose-300 hover:text-pink-400 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
