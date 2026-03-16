import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
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

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* landing page hero scenic luxury garden cape town landscape */}
        <img
          src="https://pixabay.com/get/g6a796d76140397cd11584143af952f68157340e184994c87e10a47680b82c8e5fdad3cf92b1a5aee22330cc4c9a0f6d66fdab73282aefbbe097e998447c03c93_1280.jpg"
          alt="Luxury landscaped garden"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <motion.div 
          className="max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp} className="mb-6 inline-block">
            <span className="glass-dark px-4 py-1.5 rounded-full text-sm font-medium text-white/90 tracking-wide border-white/20">
              Cape Town's Premium Landscaping
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6 text-balance drop-shadow-lg"
          >
            Transforming Outdoor Spaces Into <span className="text-accent italic font-normal">Living Art</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed text-balance"
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-12 h-12 rounded-full glass flex items-center justify-center text-white border-white/20 hover:bg-white/20 transition-colors"
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
