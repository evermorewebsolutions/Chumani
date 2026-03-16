import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );
    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [inView, end, duration]);

  return { count, nodeRef };
}

export function About() {
  const stats = [
    { label: "YEARS EXPERIENCE", value: 10, suffix: "+" },
    { label: "PROJECTS COMPLETED", value: 200, suffix: "+" },
    { label: "CLIENT SATISFACTION", value: 100, suffix: "%" },
  ];

  return (
    <section id="about" className="py-32 bg-background overflow-hidden relative">
      {/* Subtle diagonal stripe pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 1px, #000 1px, #000 2px)", backgroundSize: "10px 10px" }}></div>
      
      {/* Subtle leaf rotation in background */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none"
      >
        <svg width="600" height="600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
          >
            <div className="flex items-center gap-4 mb-3">
              <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="h-px bg-accent w-12 origin-left" />
              <h2 className="text-sm font-bold tracking-widest uppercase text-accent">About Us</h2>
            </div>
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-8 leading-[1.1] text-balance">
              Cultivating Beauty,<br/> Rooted in <span className="italic font-normal text-accent">Quality</span>.
            </h3>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light relative z-10">
              <p>
                <strong className="text-foreground font-semibold">Chumani's Landscapes and Irrigation</strong> is an operating business owned by Chumani Sayo, holding a National Diploma in Landscape Technology.
              </p>
              <p>
                We are based in Cape Town and specialise in garden design, consultation, landscape installation, irrigation installation, and comprehensive maintenance. 
              </p>
              <p>
                We are a quality-driven company with a strong belief in ethical management and operations, ensuring every project we touch thrives for years to come.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 pt-10 grid grid-cols-3 gap-8 relative before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-border before:to-transparent">
              {stats.map((stat, index) => {
                const { count, nodeRef } = useCountUp(stat.value, 2000);
                return (
                  <div key={index} className="flex flex-col relative" ref={nodeRef}>
                    {index > 0 && <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-px h-12 bg-primary/20" />}
                    <span className="text-4xl md:text-5xl font-display font-bold text-gradient-green mb-2 stat-value">
                      {count}{stat.suffix}
                    </span>
                    <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div 
            className="relative mt-12 lg:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
          >
            <div className="relative rounded-t-full rounded-b-3xl overflow-hidden shadow-nature-xl aspect-[3/4] w-[85%] mx-auto lg:mr-auto lg:ml-0 border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop" 
                alt="Beautiful landscaped garden" 
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-110"
              />
            </div>
            
            {/* Floating Second Image */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 right-0 w-[55%] aspect-[4/3] rounded-2xl overflow-hidden shadow-nature-lg border-4 border-white z-20"
            >
               <img 
                src="https://images.unsplash.com/photo-1558904541-efa843a96f0f?q=80&w=800&auto=format&fit=crop" 
                alt="Garden detail" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute top-1/4 -right-4 lg:-right-8 glass rounded-2xl p-5 border-white/40 shadow-xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className="bg-accent/10 p-3 rounded-full text-accent shadow-inner">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm uppercase tracking-wide">Certified Expert</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Landscape Technology</p>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -top-8 -left-8 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}