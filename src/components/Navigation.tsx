import { useEffect, useState } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "products", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItemLabel = (section: string) => {
    if (section === "about") return "About Us";
    if (section === "products") return "Mocktails";
    return "Contact";
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo + Brand */}
        <button
          onClick={() => {
            scrollToSection("hero");
            setIsMenuOpen(false);
          }}
          className="flex items-center gap-3 group"
        >
          {/* Circular Logo */}
          <div
            className={`rounded-full overflow-hidden transition-all duration-300 ${
              isScrolled ? "w-9 h-9" : "w-11 h-11"
            }`}
          >
            <img
              src="public/IMG_8811.jpg" // 👈 replace with your JPG path
              alt="Sip Society Logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Brand Text */}
          <span
            className="text-lg sm:text-xl font-bold tracking-wide text-red-600 group-hover:text-red-700 transition-colors uppercase"
            style={{ fontFamily: "'Bungee', sans-serif" }}
          >
            Sip Society
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["about", "products", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-sm font-semibold relative transition-colors ${
                activeSection === section
                  ? "text-red-600"
                  : "text-red-700 hover:text-red-600"
              }`}
            >
              {navItemLabel(section)}
              {activeSection === section && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600 animate-fade-in"></span>
              )}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Toggle Menu"
        >
          <span
            className={`h-0.5 w-6 bg-red-600 transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-red-600 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-red-600 transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6 bg-white/95 backdrop-blur-md shadow-lg">
          {["about", "products", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => {
                scrollToSection(section);
                setIsMenuOpen(false);
              }}
              className={`text-lg font-semibold transition-colors ${
                activeSection === section
                  ? "text-red-600"
                  : "text-red-700 hover:text-red-600"
              }`}
            >
              {navItemLabel(section)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
