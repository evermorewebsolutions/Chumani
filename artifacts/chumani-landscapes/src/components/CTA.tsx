import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp, clipReveal } from "@/lib/animations";
import { Leaf } from "lucide-react";

export function CTA() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-40 flex items-center justify-center overflow-hidden section-clip-diagonal section-clip-diagonal-reverse grain bg-primary z-30">
      
      {/* Parallax Background */}
      <motion.div style={{ y, height: "140%" }} className="absolute -top-[20%] inset-x-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=2000&auto=format&fit=crop"
          alt="Lush landscape"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </motion.div>

      {/* Floating Leaves */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-accent/30"
            initial={{ y: "110vh", x: `${Math.random() * 100}vw`, rotate: 0 }}
            animate={{ 
              y: "-10vh", 
              x: `${Math.random() * 100}vw`,
              rotate: 360 
            }}
            transition={{ 
              duration: 15 + Math.random() * 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10
            }}
          >
            <Leaf className="w-8 h-8 md:w-12 md:h-12" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col items-center"
        >
          <div className="mb-6 flex justify-center">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/80">
              <Leaf className="w-5 h-5" />
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-2 drop-shadow-md flex flex-col gap-2">
            <span className="tracking-tight">Ready to Transform</span>
            <span className="italic font-normal text-accent tracking-normal">Your Outdoor Space?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 mt-8 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Let's create an environment that reflects your lifestyle and embraces the natural beauty of Cape Town.
          </p>
          
          <button 
            onClick={scrollToContact}
            className="px-10 py-5 rounded-full font-bold text-lg bg-white text-primary shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:-translate-y-1 transition-all duration-400 group overflow-hidden relative"
          >
            <span className="relative z-10">Get Your Free Quote</span>
            <div className="absolute inset-0 bg-accent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-400 ease-out z-0"></div>
            <span className="relative z-10 group-hover:text-white transition-colors duration-400">Get Your Free Quote</span>
          </button>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {["Free Consultation", "No Obligation", "Expert Advice"].map((badge, i) => (
              <div key={i} className="glass-dark px-4 py-2 rounded-full flex items-center gap-2 text-white/90 text-sm">
                <span className="text-accent">✓</span> {badge}
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}