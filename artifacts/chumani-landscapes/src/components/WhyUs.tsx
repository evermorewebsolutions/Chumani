import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import { Award, LeafyGreen, ShieldCheck, Sprout } from "lucide-react";

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

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaf-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 25 C60 10 80 10 85 25 C90 40 70 60 50 75 C30 60 10 40 15 25 C20 10 40 10 50 25 Z" fill="currentColor" opacity="0.5"/>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#leaf-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-accent mb-3">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Expertise You Can Trust. Results You Will Love.
            </h3>
            <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
              We don't just build gardens; we cultivate living ecosystems. Our academic background combined with years of hands-on experience guarantees a landscape that thrives.
            </p>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
              variants={staggerContainer}
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={fadeInUp} className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent border border-white/20">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white font-display">{feature.title}</h4>
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
          >
            {/* beautiful detail shot of a plant/landscape */}
            <img 
              src="https://images.unsplash.com/photo-1416879598555-337ccf54714f?q=80&w=1000&auto=format&fit=crop" 
              alt="Detail of lush plant leaves" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
