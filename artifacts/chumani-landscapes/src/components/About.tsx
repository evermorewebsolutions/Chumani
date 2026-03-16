import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { CheckCircle } from "lucide-react";

export function About() {
  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Projects Completed", value: "200+" },
    { label: "Client Satisfaction", value: "100%" },
  ];

  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-accent mb-3">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Cultivating Beauty,<br/> Rooted in Quality.
            </h3>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
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
            <div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-border/60">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-nature-lg aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              {/* about us beautiful landscaped garden */}
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop" 
                alt="Beautiful landscaped garden" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 glass rounded-2xl p-6 border-white/20">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-2 rounded-full text-accent">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">Certified Expert</h4>
                    <p className="text-sm text-muted-foreground mt-1">National Diploma in Landscape Technology</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -top-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
