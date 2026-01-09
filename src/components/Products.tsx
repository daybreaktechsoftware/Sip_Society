import { useRef, useState } from "react";
import { useInView } from "../hooks/useScrollAnimation";

interface Drink {
  id: number;
  name: string;
  category: "simple" | "power";
  description: string;
  image_placeholder: string;
}

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, 0.2);
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);

  const drinks: Drink[] = [
    // Simple Sips
    {
      id: 1,
      name: "Electric Blue Fizz",
      category: "simple",
      description:
        "A vibrant blue mocktail with a refreshing fizz, perfect for those who love a sparkling sensation. Bursting with citrus and berry notes.",
      image_placeholder:
        "/vecteezy_refreshing-blue-cocktail-with-tropical-flowers_50277585.png",
    },
    {
      id: 2,
      name: "Melon Mist",
      category: "simple",
      description:
        "Sweet and refreshing melon flavor that transports you to a tropical paradise. Light, crisp, and perfectly balanced.",
      image_placeholder:
        "/vecteezy_a-glass-of-watermelon-juice-with-a-slice-of-lime_53649755.png",
    },
    {
      id: 3,
      name: "Passion Punch",
      category: "simple",
      description:
        "Exotic passion fruit blended with tropical juices. A bold, tangy taste with a hint of sweetness that ignites your senses.",
      image_placeholder:
        "/vecteezy_refreshing-passion-fruit-mojito-cocktail-with-mint-and-ice_60579568.png",
    },
    {
      id: 4,
      name: "Minted Sunrise",
      category: "simple",
      description:
        "Fresh mint paired with crisp cucumber and lime. A refreshing, cool drink perfect for any time of day.",
      image_placeholder:
        "/vecteezy_refreshing-caipirinha-mojito-cocktail-served-in-a-glass-with_58172796.png",
    },
    {
      id: 5,
      name: "Pineapple Burst",
      category: "simple",
      description:
        "Tropical pineapple explosion with a golden glow. Sweet, tangy, and bursting with island vibes.",
      image_placeholder:
        "/vecteezy_refreshing-yellow-cocktail-in-glass-with-ice-pineapple_59465385.png",
    },
    {
      id: 6,
      name: "Lychee Breeze",
      category: "simple",
      description:
        "Delicate lychee flavor with subtle floral notes. Light, elegant, and refreshingly exotic.",
      image_placeholder:
        "/vecteezy_a-glass-of-pink-drink-with-ice-cubes-and-mint-leaves_59574910.PNG",
    },
    {
      id: 7,
      name: "Petal Potion",
      category: "simple",
      description:
        "A floral-infused blend with strawberries and rose. Romantic, elegant, and beautifully crafted.",
      image_placeholder:
        "/vecteezy_refreshing-red-fruit-cocktail-with-strawberry-garnish-in-a_54680022.png",
    },
    // Power Sips
    {
      id: 8,
      name: "Apricot Bloom",
      category: "power",
      description:
        "Rich apricot energy drink with a smooth, bold flavor. Packed with natural fruit goodness and revitalizing power.",
      image_placeholder: "/ChatGPT Image Dec 20, 2025, 09_05_29 PM.png",
    },
    {
      id: 9,
      name: "Peach Luxe",
      category: "power",
      description:
        "Premium peach energy with luxurious taste. Sweet, smooth, and energizing for when you need that extra boost.",
      image_placeholder: "/92B97F8A-8D57-425F-A151-8C9586641991.jpeg",
    },
    {
      id: 10,
      name: "Melon Splash",
      category: "power",
      description:
        "Watermelon energy drink with a refreshing splash. Hydrating, energizing, and perfectly balanced.",
      image_placeholder: "/ChatGPT Image Dec 20, 2025, 09_14_06 PM.png",
    },
    {
      id: 11,
      name: "Tropical Twist",
      category: "power",
      description:
        "A tropical energy blend with pineapple, mango, and citrus. Energizing flavor with island inspiration.",
      image_placeholder: "/ChatGPT Image Dec 20, 2025, 09_15_17 PM.png",
    },
    {
      id: 12,
      name: "Berry Rush",
      category: "power",
      description:
        "Mixed berry energy drink with a vibrant blue hue. Powerful antioxidants meet refreshing taste.",
      image_placeholder: "/ChatGPT Image Dec 20, 2025, 09_18_40 PM.png",
    },
  ];

  const simpleSips = drinks.filter((d) => d.category === "simple");
  const powerSips = drinks.filter((d) => d.category === "power");

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white via-rose-50/50 to-white relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 rounded-full border border-rose-200 mb-4 hover:scale-110 transition-transform">
            <span className="text-rose-800 text-sm font-medium">
              Sip Society Menu
            </span>
          </div>
          <h2 className="text-5xl font-bold text-rose-900 mb-4">
            Our Signature Mocktails
          </h2>
          <p className="text-xl text-rose-700 max-w-2xl mx-auto">
            Choose your flavor, choose your size
          </p>
        </div>

        {/* Simple Sips Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-rose-700 mb-4 uppercase tracking-wide border-t-4 border-b-4 border-black inline-block px-8 py-3">
              Simple Sips
            </h3>
            <div className="flex justify-center gap-6 mt-6 text-lg font-bold text-gray-800">
              <span>250ML - R30</span>
              <span>350ML - R35</span>
              <span>500ML - R40</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {simpleSips.map((drink, index) => (
              <div
                key={drink.id}
                className={`group cursor-pointer transition-all duration-500 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedDrink(drink)}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-300 border-2 border-transparent hover:border-rose-300">
                  {/* Image Placeholder */}
                  <div className="relative aspect-square mb-4 bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl overflow-hidden group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* <span className="text-4xl">🍹</span> */}
                    </div>
                    <img
                      src={drink.image_placeholder}
                      alt={drink.name}
                      className="w-full h-full object-cover transition-opacity"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  {/* Name */}
                  <h4 className="text-center font-bold text-gray-900 text-sm md:text-base group-hover:text-rose-600 transition-colors">
                    {drink.name}
                  </h4>

                  {/* Click hint */}
                  <p className="text-center text-xs text-rose-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click for details
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Power Sips Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-rose-700 mb-4 uppercase tracking-wide border-t-4 border-b-4 border-black inline-block px-8 py-3">
              Power Sips
            </h3>
            <div className="flex justify-center gap-6 mt-6 text-xl font-bold text-gray-800">
              <span>500ML - R50</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {powerSips.map((drink, index) => (
              <div
                key={drink.id}
                className={`group cursor-pointer transition-all duration-500 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{
                  transitionDelay: `${(simpleSips.length + index) * 100}ms`,
                }}
                onClick={() => setSelectedDrink(drink)}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-300 border-2 border-transparent hover:border-orange-300">
                  {/* Image Placeholder */}
                  <div className="relative aspect-square mb-4 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl overflow-hidden group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl">⚡</span>
                    </div>
                    <img
                      src={drink.image_placeholder}
                      alt={drink.name}
                      className="w-full h-full object-cover transition-opacity"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  {/* Name */}
                  <h4 className="text-center font-bold text-gray-900 text-sm md:text-base group-hover:text-orange-600 transition-colors">
                    {drink.name}
                  </h4>

                  {/* Click hint */}
                  <p className="text-center text-xs text-orange-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click for details
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-lg text-rose-700 mb-6">
            Available at select locations in Cape Town. Follow @sipsociety_cpt
            on Instagram and enter our R500 cash giveaway!
          </p>
        </div>
      </div>

      {/* Modal Popup */}
      {selectedDrink && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedDrink(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-lg w-full shadow-2xl animate-scale-in transform"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedDrink(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-rose-100 hover:bg-rose-200 rounded-full transition-colors group"
            ></button>

            {/* Content */}
            <div className="p-8">
              {/* Image */}
              <div className="relative aspect-square mb-6 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center"></div>
                <img
                  src={selectedDrink.image_placeholder}
                  alt={selectedDrink.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Category Badge */}
              <div className="inline-block px-4 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold mb-3">
                {selectedDrink.category === "simple"
                  ? "Simple Sip"
                  : "Power Sip"}
              </div>

              {/* Name */}
              <h3 className="text-3xl font-bold text-rose-900 mb-4">
                {selectedDrink.name}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {selectedDrink.description}
              </p>

              {/* Pricing */}
              <div className="bg-rose-50 rounded-xl p-4 border-2 border-rose-200">
                <p className="text-sm font-semibold text-rose-800 mb-2">
                  Available Sizes:
                </p>
                {selectedDrink.category === "simple" ? (
                  <div className="flex justify-between text-gray-800 font-bold">
                    <span>250ML - R30</span>
                    <span>350ML - R35</span>
                    <span>500ML - R40</span>
                  </div>
                ) : (
                  <div className="text-gray-800 font-bold text-lg">
                    500ML - R50
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
