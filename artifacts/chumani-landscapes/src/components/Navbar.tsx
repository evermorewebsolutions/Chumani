import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Our Work", href: "#portfolio" },
  { name: "Why Us", href: "#why-us" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <header
        className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "py-3 glass border-b border-accent/20" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <motion.img
                src="/logo.png"
                alt="Chumani's Landscapes and Irrigation"
                className="h-24 w-auto object-contain drop-shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:text-accent relative group py-2 ${
                    isScrolled ? "text-foreground/80" : "text-white/90"
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></span>
                </button>
              ))}
              <button
                onClick={() => scrollToSection("#contact")}
                className="px-8 py-3 rounded-full font-bold bg-primary text-primary-foreground shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group border border-primary/50"
              >
                <span className="relative z-10">Get a Quote</span>
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0 pointer-events-none"></div>
              </button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className={`md:hidden p-2 rounded-md ${isScrolled ? "text-foreground" : "text-white"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-t border-border overflow-hidden absolute top-full left-0 right-0 shadow-2xl"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-2xl font-display font-bold text-foreground py-2 border-b border-border/50 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="mt-6 w-full px-6 py-4 rounded-xl font-bold bg-primary text-primary-foreground shadow-xl text-lg uppercase tracking-wide"
                >
                  Get a Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(200%); }
        }
      `}</style>
    </>
  );
}