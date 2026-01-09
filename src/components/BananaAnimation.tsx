import { useEffect, useState } from "react";

function BananaAnimation() {
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
      {/* HD Banana Image - flipped horizontally with mouse parallax */}
      <div
        className="absolute top-1/2 left-1/2"
        style={{
          transform: `
            translate(-50%, -50%) 
            translateX(${mousePosition.x}px) 
            translateY(${mousePosition.y}px)
            scaleX(-1)
          `,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="banana-animated relative">
          {/* Your HD Banana Image - Mobile-optimized responsive sizing */}
          <img
            src="/banana.png"
            alt="Banana"
            className="w-[200px] sm:w-[320px] md:w-[450px] lg:w-[550px] xl:w-[650px] h-auto select-none relative z-10"
            style={{
              filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.25))",
            }}
            onLoad={() => console.log("✅ Banana image loaded successfully!")}
            onError={(e) => {
              console.error("❌ Failed to load banana image");
              console.log("Trying alternate source...");
              e.currentTarget.src = "/banana-hd.png";
            }}
          />
          {/* Shadow at the bottom */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150px] sm:w-[240px] md:w-[340px] lg:w-[420px] xl:w-[500px] h-[20px] sm:h-[30px] md:h-[40px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.15) 50%, transparent 70%)",
              filter: "blur(8px)",
              transform: "translateX(-50%) translateY(10px)",
            }}
          />
        </div>
      </div>

      {/* Floating sparkle elements - fixed positions, no mouse interaction */}
      <div className="floating-elements absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute banana-particle"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.5}s`,
              fontSize: `${25 + Math.random() * 20}px`,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Additional decorative stars - fixed positions, no mouse interaction */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute banana-star"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.6}s`,
              fontSize: `${20 + Math.random() * 15}px`,
            }}
          >
            ⭐
          </div>
        ))}
      </div>
    </div>
  );
}

export default BananaAnimation;
