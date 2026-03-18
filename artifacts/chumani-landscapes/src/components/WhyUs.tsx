import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import { Award, LeafyGreen, ShieldCheck, Sprout } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Qualified Landscape Technologist",
    description: "Led by a National Diploma holder, bringing academic knowledge and practical expertise to every project."
  },
  {
    icon: <LeafyGreen className="w-6 h-6" />,
    title: "Quality Driven Work",
    description: "We never compromise on materials or execution, ensuring long-lasting, beautiful results."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Ethical Management",
    description: "Transparent pricing, reliable timelines, and honest communication from start to finish."
  },
  {
    icon: <Sprout className="w-6 h-6" />,
    title: "Professional Solutions",
    description: "Tailored approaches that solve complex landscaping challenges effectively and sustainably."
  }
];

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

export function WhyUs() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const { count, nodeRef } = useCountUp(200, 2500);

  return (
    <section id="why-us" className="bg-background flex flex-col lg:flex-row min-h-screen">
      
      {/* Left Content (60%) */}
      <div className="w-full lg:w-[60%] bg-primary text-primary-foreground py-24 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-24 relative overflow-hidden flex items-center">
        
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 2px, #fff 2px, #fff 4px)", backgroundSize: "16px 16px" }}></div>

        <motion.div 
          className="relative z-10 w-full max-w-2xl mx-auto lg:mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInLeft}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px bg-accent w-8" />
            <h2 className="text-xs font-bold tracking-widest uppercase text-accent">Why Choose Us</h2>
          </div>
          
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-12 leading-[1.1] text-balance">
            Expertise You Can Trust. <br/><span className="text-white/60 italic font-normal">Results You Will Love.</span>
          </h3>
          
          {/* Animated Stat Pull-quote */}
          <div className="mb-16 border-l-2 border-accent pl-6 py-2" ref={nodeRef}>
            <p className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
              <span className="stat-value">{count}</span>+ Projects
            </p>
            <p className="text-sm uppercase tracking-widest text-white/60 font-semibold">Across Cape Town & Surrounds</p>
          </div>

          <motion.div className="flex flex-col" variants={staggerContainer}>
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp} 
                className="relative py-8 border-b border-white/10 last:border-0 group"
              >
                {/* Large Background Number */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 text-7xl font-display font-bold text-white/5 pointer-events-none transition-all duration-500 group-hover:text-accent/10 group-hover:scale-110 group-hover:translate-x-4">
                  0{index + 1}
                </div>
                
                <div className="relative z-10 flex gap-6 items-start">
                  <div className="mt-1 text-accent">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white font-display mb-2">{feature.title}</h4>
                    <p className="text-primary-foreground/70 leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Right Image (40%) */}
      <div className="w-full lg:w-[40%] h-[50vh] lg:h-auto relative overflow-hidden hidden lg:block">
        <motion.div style={{ y, height: "120%" }} className="absolute -top-[10%] inset-x-0">
          <img 
            src="https://images.unsplash.com/photo-1416879598555-337ccf54714f?q=75&w=900&auto=format&fit=crop" 
            alt="Detail of lush plant leaves"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
        </motion.div>
      </div>

    </section>
  );
}