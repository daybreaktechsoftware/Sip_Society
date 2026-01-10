import { useEffect, useState } from "react";

function DrinkGlassAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Two cocktail glasses positioned on the right side */}
  <div className="absolute bottom-0 right-0 flex items-end justify-end -space-x-6 md:-space-x-12 pb-20 md:pb-16 lg:pb-24 pr-8 md:pr-16 lg:pr-24">
        {/* Pink Martini Glass with Cherry */}
        <div
          className="relative"
          style={{
            transform: `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <div className="martini-glass-animated relative">
            <img
              src="/vecteezy_a-sleek-martini-glass-holds-a-pink-cocktail-garnished-with_55937898.png"
              alt="Pink Martini Cocktail"
              className="w-[220px] sm:w-[260px] md:w-[320px] lg:w-[480px] h-auto select-none relative z-10"
              style={{
                filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.3))",
              }}
            />
            {/* Shadow at the bottom */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100px] sm:w-[130px] md:w-[160px] lg:w-[180px] h-[15px] sm:h-[20px] rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.15) 50%, transparent 70%)",
                filter: "blur(8px)",
              }}
            ></div>
          </div>
        </div>

        {/* Orange Whiskey Glass */}
        <div
          className="relative"
          style={{
            transform: `translateX(${-mousePosition.x * 0.8}px) translateY(${
              -mousePosition.y * 0.8
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <div className="whiskey-glass-animated relative">
            <img
              src="/vecteezy_cocktail-with_25063610.png"
              alt="Whiskey Cocktail"
              className="w-[120px] sm:w-[180px] md:w-[240px] lg:w-[280px] h-auto select-none relative z-10"
              style={{
                filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.3))",
              }}
            />
            {/* Shadow at the bottom */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90px] sm:w-[110px] md:w-[140px] lg:w-[160px] h-[12px] sm:h-[18px] rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.15) 50%, transparent 70%)",
                filter: "blur(8px)",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Floating sparkle elements */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute drink-particle"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: "2s",
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Floating stars */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute drink-star"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: "3s",
            }}
          >
            ⭐
          </div>
        ))}
      </div>
    </div>
  );
}

export default DrinkGlassAnimation;
