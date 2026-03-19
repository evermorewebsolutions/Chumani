import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, clipReveal } from "@/lib/animations";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
    }
  };

  const titleWords = ["Transforming", "Outdoor", "Spaces", "Into", "Living", "Art"];

  return (
    <AnimatePresence>
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden grain">
        {/* Background Image with Parallax */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Luxury landscaped garden"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </motion.div>

        {/* Animated Gradient Orb */}
        <motion.div 
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none z-0"
          style={{ background: "radial-gradient(circle, hsla(140, 30%, 45%, 0.4) 0%, transparent 70%)" }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Vertical Decorative Text */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none z-0 hidden lg:block">
          <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }} className="origin-center rotate-90 opacity-15 text-white font-display text-2xl tracking-[0.5em] whitespace-nowrap">
            CHUMANI'S LANDSCAPES
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <motion.div 
            className="max-w-3xl"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="h-px bg-white/60"
              />
              <motion.span variants={fadeInUp} className="glass-dark px-4 py-1.5 rounded-full text-sm font-medium text-white/90 tracking-wide border-white/20 uppercase">
                Cape Town's Premium Landscaping
              </motion.span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6 text-balance drop-shadow-lg flex flex-wrap gap-x-4 gap-y-2">
              {titleWords.map((word, idx) => (
                <span key={idx} className="overflow-hidden inline-block py-1">
                  <motion.span 
                    variants={clipReveal} 
                    className={`inline-block ${word === 'Art' ? 'text-accent italic font-normal' : ''} ${word === 'Living' ? 'italic font-normal' : ''}`}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed text-balance font-light"
            >
              Professional landscape design, irrigation systems, and pristine garden maintenance tailored for the unique climate of Cape Town.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="px-8 py-4 rounded-xl font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                Get a Free Consultation
              </button>
              <button 
                onClick={scrollToPortfolio}
                className="px-8 py-4 rounded-xl font-semibold glass-dark text-white hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 text-center border border-white/30"
              >
                View Our Work
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          onClick={scrollToAbout}
        >
          <div className="w-[30px] h-[50px] rounded-full border border-white/30 flex justify-center p-2 glass">
            <motion.div
              animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1 h-2 bg-white rounded-full"
            />
          </div>
          <span className="text-[9px] text-white uppercase tracking-[0.3em] font-medium opacity-80">Scroll</span>
        </motion.div>
      </section>
    </AnimatePresence>
  );
}