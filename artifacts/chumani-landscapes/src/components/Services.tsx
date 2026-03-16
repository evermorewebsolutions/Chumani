import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { 
  PenTool, 
  Shovel, 
  Flower2, 
  SquareAsterisk, 
  Droplets, 
  Wrench, 
  Scissors, 
  ClipboardList,
  Leaf
} from "lucide-react";

const services = [
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Garden Design",
    description: "Custom landscape architecture tailored to your space, aesthetic, and local climate."
  },
  {
    icon: <Shovel className="w-8 h-8" />,
    title: "Garden Installations",
    description: "Professional execution of landscape plans, turning beautiful designs into reality."
  },
  {
    icon: <Flower2 className="w-8 h-8" />,
    title: "Soft Landscaping",
    description: "Expert selection and planting of trees, shrubs, flowers, and lawns."
  },
  {
    icon: <SquareAsterisk className="w-8 h-8" />,
    title: "Hard Landscaping",
    description: "Construction of paving, pathways, retaining walls, and outdoor structures."
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Irrigation Installation",
    description: "Efficient, water-wise automated watering systems for sustainable growth."
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Irrigation Maintenance",
    description: "Regular check-ups and repairs to ensure your systems perform optimally."
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    title: "Garden Maintenance",
    description: "Ongoing care, pruning, and nourishment to keep your landscape pristine."
  },
  {
    icon: <ClipboardList className="w-8 h-8" />,
    title: "Consultation",
    description: "Expert advice on plant health, soil conditions, and landscape improvements."
  }
];

export function Services() {
  const marqueeText = "Garden Design · Irrigation · Hard Landscaping · Soft Landscaping · Maintenance · Consultation · ";
  
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-[hsl(40,20%,97%)] to-[hsl(150,10%,95%)] relative overflow-hidden">
      {/* Marquee Strip */}
      <div className="w-full overflow-hidden mb-20 opacity-20 pointer-events-none flex">
        <motion.div 
          className="whitespace-nowrap text-2xl sm:text-3xl font-display uppercase tracking-widest text-primary flex-shrink-0"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {marqueeText.repeat(5)}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-accent mb-3">What We Do</h2>
            <h3 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">Our Services</h3>
            <p className="text-lg text-muted-foreground font-light text-balance">
              Comprehensive landscaping solutions designed to elevate your outdoor living experience from concept to completion.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-8 shadow-sm border border-border/40 card-premium group cursor-default relative overflow-hidden z-10"
            >
              {/* Number watermark */}
              <div className="absolute top-4 right-4 text-7xl font-display font-bold text-foreground/5 pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:text-primary/5">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary flex items-center justify-center mb-8 group-hover:shadow-[0_0_20px_rgba(20,163,81,0.3)] group-hover:scale-105 transition-all duration-500">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3 font-display">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Elegant Divider */}
        <div className="mt-24 flex items-center justify-center max-w-2xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <Leaf className="w-5 h-5 mx-4 text-accent/50" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>
      </div>
    </section>
  );
}