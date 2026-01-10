import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useRef } from "react";
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
      value: "Aashiqaisaacs@gmail.com",
      link: "mailto:Aashiqaisaacs@gmail.com",
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
                Follow <a href="https://instagram.com/sipsociety_cpt" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:opacity-80">@sipsociety_cpt</a> on Instagram and tag us—we run occasional
                giveaways and promotions. Keep an eye on our feed for chances to
                win.
              </p>
              <p className="text-rose-100 leading-relaxed">
                Whether you're planning an event, have a special request, or
                just want to say hello, we're here to make every sip special!
              </p>
            </div>
          </div>

          {/* Airtable Form */}
          <div className="w-full">
            <iframe
              src="https://airtable.com/embed/appTALumHRx1ngJMr/pagdmGT394jOqNQ0K/form"
              frameBorder="0"
              width="100%"
              height="733"
              className="rounded-3xl"
              style={{
                background: "transparent",
                border: "none",
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
