import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { ArrowRight, Play } from "lucide-react";

const categories = ["All", "Garden Design", "Irrigation", "Maintenance", "Hard Landscaping"];

const allProjects = [
  {
    src: "/images/project4.jpg",
    type: "image",
    title: "Completed Garden Pathway",
    category: "Hard Landscaping"
  },
  {
    src: "/images/project6.jpg",
    type: "image",
    title: "Espalier Wall Planting",
    category: "Garden Design"
  },
  {
    src: "/images/project8.jpg",
    type: "image",
    title: "Lawn Fertilization",
    category: "Maintenance"
  },
  {
    src: "/images/project5.jpg",
    type: "image",
    title: "Garden Walkway Finished",
    category: "Hard Landscaping"
  },
  {
    src: "/images/project7.jpg",
    type: "image",
    title: "Lawn Treatment & Care",
    category: "Maintenance"
  },
  {
    src: "/videos/video1.mp4",
    type: "video",
    title: "Garden Transformation",
    category: "Garden Design"
  },
  {
    src: "/images/project2.jpg",
    type: "image",
    title: "Pathway Slab Installation",
    category: "Hard Landscaping"
  },
  {
    src: "/images/project3.jpg",
    type: "image",
    title: "Pathway Progress",
    category: "Hard Landscaping"
  },
  {
    src: "/videos/video2.mp4",
    type: "video",
    title: "Irrigation System Install",
    category: "Irrigation"
  },
  {
    src: "/images/project1.jpg",
    type: "image",
    title: "Irrigation Trench Preparation",
    category: "Irrigation"
  },
  {
    src: "/images/project9.jpg",
    type: "image",
    title: "Chumani's Team",
    category: "Garden Design"
  },
  {
    src: "/images/project10.jpg",
    type: "image",
    title: "Hedge Maintenance",
    category: "Maintenance"
  },
  {
    src: "/videos/video3.mp4",
    type: "video",
    title: "Landscaping in Action",
    category: "Maintenance"
  }
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = allProjects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  const marqueeText = "13 Featured Projects · Cape Town · Est. 2014 · ";

  return (
    <section id="portfolio" className="py-32 bg-white relative section-clip-diagonal -mt-10 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-accent mb-3">Our Work</h2>
            <h3 className="text-5xl md:text-6xl font-display font-bold text-foreground">Featured Projects</h3>
          </motion.div>
          
          <motion.button 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors group tracking-wide uppercase text-sm"
          >
            View Full Gallery
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Filters */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Marquee stats */}
        <div className="w-full overflow-hidden mb-12 border-y border-border py-3">
          <motion.div 
            className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground flex-shrink-0"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {marqueeText.repeat(10)}
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              let layoutClass = "";
              let heightClass = "h-[400px]";
              
              if (activeCategory === "All") {
                if (index === 0) {
                  layoutClass = "md:col-span-2";
                  heightClass = "h-[500px]";
                } else if (index === 3) {
                  layoutClass = "md:col-span-2";
                  heightClass = "h-[500px]";
                } else if (index === 6) {
                  layoutClass = "md:col-span-2";
                  heightClass = "h-[500px]";
                } else if (index === 9) {
                  layoutClass = "md:col-span-2";
                  heightClass = "h-[500px]";
                }
              }

              return (
                <motion.div 
                  key={project.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-nature ${layoutClass} ${heightClass}`}
                >
                  {project.type === "video" ? (
                    <>
                      <video
                        src={project.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white">
                        <Play className="w-4 h-4 fill-white" />
                      </div>
                    </>
                  ) : (
                    <img 
                      src={project.src} 
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    />
                  )}

                  {/* Full Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    
                    <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider bg-accent/90 text-white rounded-full">
                        {project.category}
                      </span>
                      
                      <h4 className="text-white text-3xl font-display font-bold mb-4 drop-shadow-md">
                        {project.title}
                      </h4>
                      
                      <div className="flex items-center gap-4">
                        <div className="h-px bg-white/50 w-0 group-hover:w-16 transition-all duration-700 delay-200"></div>
                        <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm hover:bg-white hover:text-black transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-16 text-center md:hidden">
          <button className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors tracking-wide uppercase text-sm">
            View Full Gallery
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
