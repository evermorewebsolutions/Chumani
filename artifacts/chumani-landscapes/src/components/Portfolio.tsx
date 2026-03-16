import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    // modern landscape garden paving and plants
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop",
    title: "Modern Minimalist Courtyard",
    category: "Hard & Soft Landscaping"
  },
  {
    // lush green garden with irrigation
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f0f?q=80&w=800&auto=format&fit=crop",
    title: "Coastal Estate Gardens",
    category: "Full Installation"
  },
  {
    // elegant pathway garden
    image: "https://images.unsplash.com/photo-1584622781867-1c3905cd19a6?q=80&w=800&auto=format&fit=crop",
    title: "Stepped Garden Pathway",
    category: "Garden Design"
  },
  {
    // lush residential garden
    image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=800&auto=format&fit=crop",
    title: "Suburban Oasis Retreat",
    category: "Maintenance & Upgrade"
  },
  {
    // water feature or irrigation garden
    image: "https://images.unsplash.com/photo-1550136513-548af4445338?q=80&w=800&auto=format&fit=crop",
    title: "Drought-Resistant Native Garden",
    category: "Consultation & Planting"
  },
  {
    // beautiful manicured lawn
    image: "https://images.unsplash.com/photo-1592424001831-7b70bc10f09a?q=80&w=800&auto=format&fit=crop",
    title: "Pristine Estate Lawns",
    category: "Irrigation & Maintenance"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-accent mb-3">Our Work</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground">Featured Projects</h3>
          </motion.div>
          
          <motion.button 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors group"
          >
            View Full Gallery
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-500"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-accent text-sm font-medium mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.category}
                </p>
                <h4 className="text-white text-xl font-display font-bold">
                  {project.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-10 text-center md:hidden">
          <button className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
            View Full Gallery
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
