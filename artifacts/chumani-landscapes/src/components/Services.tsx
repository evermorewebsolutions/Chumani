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
  ClipboardList 
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
  return (
    <section id="services" className="py-24 bg-card relative">
      {/* Subtle background texture/pattern could go here */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-accent mb-3">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Our Services</h3>
            <p className="text-lg text-muted-foreground">
              Comprehensive landscaping solutions designed to elevate your outdoor living experience from concept to completion.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-nature hover:border-accent/30 transition-all duration-300 group cursor-default relative overflow-hidden"
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3 font-display">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
