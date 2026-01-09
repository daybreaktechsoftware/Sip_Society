import { useEffect, useState } from "react";

function BananaAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Large animated banana - flipped horizontally */}
      <div
        className="absolute top-1/2 left-1/2"
        style={{
          transform: `
            translate(-50%, -50%) 
            translateX(${mousePosition.x}px) 
            translateY(${mousePosition.y}px)
            scaleX(-1.5)
            scaleY(1.5)
          `,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="banana-animated">
          {/* Large banana emoji - will look realistic and animated */}
          <div
            className="text-[600px] leading-none select-none"
            style={{
              filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.3))",
            }}
          >
            🍌
          </div>
        </div>
      </div>

      {/* Floating sparkle elements */}
      <div className="floating-elements">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute banana-particle"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              animationDelay: `${i * 0.4}s`,
              fontSize: `${30 + Math.random() * 30}px`,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Additional decorative stars */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute banana-star"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            animationDelay: `${i * 0.5}s`,
            fontSize: `${25 + Math.random() * 25}px`,
          }}
        >
          ⭐
        </div>
      ))}
    </div>
  );
}

export default BananaAnimation;
