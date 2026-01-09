import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Products from "./components/Products";

function App() {
  useEffect(() => {
    // Smooth scroll behavior for the entire app
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FFE4DC] overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
