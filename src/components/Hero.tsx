import DrinkGlassAnimation from "./DrinkGlassAnimation";

export default function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col lg:flex-row lg:items-start items-center justify-center lg:justify-start pt-20 sm:pt-32 md:pt-40 lg:pt-48 bg-gradient-to-br from-[#FFE4DC] via-[#FFD4C8] to-[#FFC4B4] overflow-hidden"
    >
      {/* Drink Glass Animation */}
      <DrinkGlassAnimation />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 w-full -mt-60 lg:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:items-start">
          {/* Left side - Text content */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 md:mb-10 leading-[0.95] animate-fade-in">
              <span className="text-rose-900">Sip Pure</span>
              <span className="block text-rose-800 mt-0 sm:mt-1">
                Refreshment
              </span>
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 leading-relaxed animate-fade-in-delay font-semibold text-rose-950"
              style={{
                textShadow:
                  "0 2px 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)",
              }}
            >
              Premium mocktails crafted for flavor lovers. Follow us for
              occasional giveaways and updates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in-delay justify-center lg:justify-start">
              <button
                onClick={scrollToProducts}
                className="group px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-4 bg-gradient-to-r from-rose-600 to-pink-700 text-white rounded-full font-bold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:shadow-rose-600/50 transition-all duration-300 transform hover:scale-105"
              >
                <span className="inline-block group-hover:scale-110 transition-transform">
                  View Mocktails
                </span>
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-4 bg-white text-rose-900 rounded-full font-bold text-sm sm:text-base md:text-lg border-2 border-rose-200 hover:bg-rose-100 transition-all duration-300 hover:scale-105"
              >
                Join Occasional Giveaways
              </button>
            </div>
          </div>

          {/* Right side - Image (visible on lg screens) */}
          <div className="hidden lg:block lg:h-full"></div>
        </div>
      </div>

      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-rose-600 animate-bounce cursor-pointer hover:text-rose-700 transition-colors"
      ></button>
    </section>
  );
}
