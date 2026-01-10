import { Award, Heart, Users } from "lucide-react";
import { useRef } from "react";
import { useInView } from "../hooks/useScrollAnimation";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, 0.2);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white via-rose-50/30 to-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl font-bold text-rose-900 mb-6 animate-text-shimmer bg-gradient-to-r from-rose-900 via-pink-700 to-rose-900 bg-clip-text text-transparent bg-[length:200%_auto]">
            Our Story
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 text-lg text-rose-700 leading-relaxed">
            <p>
              Welcome to Sip Society, where sophistication meets refreshment!
              We're passionate about crafting the most delicious non-alcoholic
              mocktails that bring joy to every sip.
            </p>
            <p>
              What started as a dream to create inclusive drinking experiences
              has grown into a beloved brand known for quality, flavor, and
              innovation. Each of our mocktails is handcrafted with premium
              ingredients, fresh fruits, and artisanal syrups, creating the
              perfect balance of taste and elegance.
            </p>
            <p>
              Our unique flavors are inspired by classic cocktails reimagined
              for everyone to enjoy - whether you're driving, pregnant, simply
              choosing a healthier lifestyle, or just want amazing flavor
              without the alcohol. We believe that great drinks should bring
              people together and create memorable moments.
            </p>
            <p>
              From social gatherings to special celebrations, Sip Society has
              become a cherished part of life's most refreshing moments. We're
              proud to be a part of your story. Follow <a href="https://instagram.com/sipsociety_cpt" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-rose-600">@sipsociety_cpt</a> on
              Instagram — we share occasional giveaways and special offers
              there.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div
            className={`relative p-8 bg-white border-4 border-black rounded-xl transform transition-all duration-700 hover:scale-105 hover:shadow-2xl overflow-hidden ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Red accent bar */}
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-red-600 to-red-700"></div>

            <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-lg mb-4">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-3 uppercase tracking-tight">
              Handcrafted with Love
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Every mocktail is carefully crafted with premium ingredients,
              fresh garnishes, and attention to every delicious detail.
            </p>
          </div>

          <div
            className={`relative p-8 bg-white border-4 border-black rounded-xl transform transition-all duration-700 hover:scale-105 hover:shadow-2xl overflow-hidden ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            {/* Red accent bar */}
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-red-600 to-red-700"></div>

            <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-lg mb-4">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-3 uppercase tracking-tight">
              Premium Quality
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We use only the finest fresh fruits, artisanal syrups, and premium
              ingredients for exceptional taste in every glass.
            </p>
          </div>

          <div
            className={`relative p-8 bg-white border-4 border-black rounded-xl transform transition-all duration-700 hover:scale-105 hover:shadow-2xl overflow-hidden ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            {/* Red accent bar */}
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-red-600 to-red-700"></div>

            <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-lg mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-3 uppercase tracking-tight">
              Community Focused
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We're proud to be part of your celebrations and bring people
              together through delicious, inclusive beverages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
