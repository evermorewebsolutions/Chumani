import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

import entranceProgress from "@assets/WhatsApp_Image_2026-10-19_at_20.06.38_(1)_1793269884259.jpeg";
import roadsidePrep from "@assets/WhatsApp_Image_2026-10-19_at_20.06.38_1793269884261.jpeg";
import pavingTeam from "@assets/WhatsApp_Image_2026-10-19_at_20.06.39_1793269884265.jpeg";
import gravelGarden from "@assets/WhatsApp_Image_2026-10-19_at_20.06.40_(1)_1793269884267.jpeg";
import gardenPathProgress from "@assets/WhatsApp_Image_2026-10-19_at_20.06.40_1793269884269.jpeg";
import finishedEntrance from "@assets/WhatsApp_Image_2026-10-19_at_20.06.41_(1)_1793269884271.jpeg";
import entranceSideView from "@assets/WhatsApp_Image_2026-10-19_at_20.06.41_1793269884273.jpeg";
import lawnBedPrep from "@assets/WhatsApp_Image_2026-10-19_at_20.11.21_1793269884275.jpeg";
import hedgeWork from "@assets/WhatsApp_Image_2026-10-19_at_20.11.22_(1)_1793269884278.jpeg";
import gardenStepsProgress from "@assets/WhatsApp_Image_2026-10-19_at_20.11.22_(2)_1793269884281.jpeg";
import finishedLawn from "@assets/WhatsApp_Image_2026-10-19_at_20.11.22_(3)_1793269884283.jpeg";
import irrigationValves from "@assets/WhatsApp_Image_2026-10-19_at_20.11.22_(4)_1793269884285.jpeg";
import irrigationController from "@assets/WhatsApp_Image_2026-10-19_at_20.11.22_(5)_1793269884287.jpeg";
import brickSteps from "@assets/WhatsApp_Image_2026-10-19_at_20.11.22_(6)_1793269884289.jpeg";
import gardenMaintenance from "@assets/WhatsApp_Image_2026-10-19_at_20.11.22_1793269884290.jpeg";

import entranceVideo from "@assets/WhatsApp_Video_2026-10-19_at_20.06.42_1793269884292.mp4";
import landscapingVideo from "@assets/WhatsApp_Video_2026-10-19_at_20.06.48_1793269884294.mp4";
import teamVideo from "@assets/WhatsApp_Video_2026-10-19_at_20.06.54_1793269884296.mp4";
import irrigationVideo from "@assets/WhatsApp_Video_2026-10-19_at_20.11.29_1793269884298.mp4";

type Project = {
  src: string;
  type: "image" | "video";
  title: string;
  category: string;
  poster?: string;
};

const categories = ["All Work", "Garden Design", "Irrigation", "Maintenance", "Hard Landscaping"];

const recentProjects: Project[] = [
  { src: finishedEntrance, type: "image", title: "A Welcoming Garden Entrance", category: "Hard Landscaping" },
  { src: entranceSideView, type: "image", title: "Gravel Garden & Feature Planting", category: "Garden Design" },
  { src: finishedLawn, type: "image", title: "Freshly Defined Lawn & Hedges", category: "Garden Design" },
  { src: gravelGarden, type: "image", title: "A Garden Path Taking Shape", category: "Hard Landscaping" },
  { src: entranceProgress, type: "image", title: "Building a Paved Entrance", category: "Hard Landscaping" },
  { src: gardenPathProgress, type: "image", title: "Pathway & Garden Installation", category: "Hard Landscaping" },
  { src: roadsidePrep, type: "image", title: "Street-Side Garden Preparation", category: "Garden Design" },
  { src: gardenStepsProgress, type: "image", title: "Brick Steps & Patio in Progress", category: "Hard Landscaping" },
  { src: brickSteps, type: "image", title: "Creating a Practical Garden Stairway", category: "Hard Landscaping" },
  { src: lawnBedPrep, type: "image", title: "Preparing a Garden Bed", category: "Maintenance" },
  { src: hedgeWork, type: "image", title: "Careful Hedge & Lawn Maintenance", category: "Maintenance" },
  { src: gardenMaintenance, type: "image", title: "Shaping a Fresh Lawn", category: "Maintenance" },
  { src: irrigationValves, type: "image", title: "Irrigation Valve Installation", category: "Irrigation" },
  { src: irrigationController, type: "image", title: "Smart Irrigation Controls", category: "Irrigation" },
  { src: pavingTeam, type: "image", title: "Craftsmanship on Site", category: "Hard Landscaping" },
  {
    src: entranceVideo,
    type: "video",
    title: "Garden Entrance — Project Video",
    category: "Hard Landscaping",
    poster: finishedEntrance,
  },
  {
    src: landscapingVideo,
    type: "video",
    title: "Landscape Installation — Project Video",
    category: "Garden Design",
    poster: gravelGarden,
  },
  {
    src: teamVideo,
    type: "video",
    title: "Our Team at Work",
    category: "Maintenance",
    poster: hedgeWork,
  },
  {
    src: irrigationVideo,
    type: "video",
    title: "Irrigation — Project Video",
    category: "Irrigation",
    poster: irrigationValves,
  },
];

const existingProjects: Project[] = [
  { src: "/images/project4.jpg", type: "image", title: "Completed Garden Pathway", category: "Hard Landscaping" },
  { src: "/images/project6.jpg", type: "image", title: "Espalier Wall Planting", category: "Garden Design" },
  { src: "/images/project8.jpg", type: "image", title: "Lawn Fertilization", category: "Maintenance" },
  { src: "/images/project5.jpg", type: "image", title: "Garden Walkway Finished", category: "Hard Landscaping" },
  { src: "/images/project7.jpg", type: "image", title: "Lawn Treatment & Care", category: "Maintenance" },
  {
    src: "/videos/video1.mp4",
    type: "video",
    title: "Garden Transformation",
    category: "Garden Design",
    poster: "/images/project4.jpg",
  },
  { src: "/images/project2.jpg", type: "image", title: "Pathway Slab Installation", category: "Hard Landscaping" },
  { src: "/images/project3.jpg", type: "image", title: "Pathway Progress", category: "Hard Landscaping" },
  {
    src: "/videos/video2.mp4",
    type: "video",
    title: "Irrigation System Install",
    category: "Irrigation",
    poster: "/images/project1.jpg",
  },
  { src: "/images/project1.jpg", type: "image", title: "Irrigation Trench Preparation", category: "Irrigation" },
  { src: "/images/project9.jpg", type: "image", title: "Chumani's Team", category: "Garden Design" },
  { src: "/images/project10.jpg", type: "image", title: "Hedge Maintenance", category: "Maintenance" },
  {
    src: "/videos/video3.mp4",
    type: "video",
    title: "Landscaping in Action",
    category: "Maintenance",
    poster: "/images/project10.jpg",
  },
];

const allProjects = [...recentProjects, ...existingProjects];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All Work");
  const filteredProjects = allProjects.filter(
    (project) => activeCategory === "All Work" || project.category === activeCategory,
  );

  return (
    <section id="portfolio" className="relative z-20 -mt-10 overflow-hidden bg-[#f5f5ef] py-20 md:py-28">
      <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#dce8dc]/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#e7e3d4]/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-8 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-accent">Our Work</h2>
            </div>
            <h3 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl">
              Outdoor spaces, <span className="font-normal italic text-primary/70">made with care.</span>
            </h3>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Explore garden transformations, thoughtful landscaping and irrigation work by our team across Cape Town.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex shrink-0 items-center gap-5 self-start rounded-2xl border border-primary/10 bg-white/80 px-5 py-4 shadow-nature lg:self-auto"
          >
            <div>
              <p className="font-display text-3xl font-bold text-primary">{allProjects.length}</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Project moments
              </p>
            </div>
            <span className="h-10 w-px bg-border" />
            <div>
              <p className="font-display text-3xl font-bold text-primary">Cape Town</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                & surrounds
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects by service"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              data-testid={`filter-projects-${category.toLowerCase().replace(/\s+/g, "-")}`}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-200 sm:px-5 ${
                activeCategory === category
                  ? "border-primary bg-primary text-white shadow-md shadow-primary/15"
                  : "border-primary/10 bg-white/80 text-muted-foreground hover:border-primary/30 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="mb-5 flex items-center justify-between border-b border-primary/10 pb-3 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          <span data-testid="text-project-count">
            {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
          </span>
          <span className="hidden sm:inline">Design · Build · Maintain</span>
        </div>

        <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.src}
                data-testid={`portfolio-card-${index}`}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.28, delay: Math.min(index * 0.025, 0.2) }}
                className="group overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-nature transition-shadow duration-300 hover:shadow-nature-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  {project.type === "video" ? (
                    <video
                      src={project.src}
                      poster={project.poster}
                      controls
                      playsInline
                      preload="none"
                      aria-label={`${project.title} video`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <img
                      src={project.src}
                      alt={project.title}
                      loading={index < 4 ? "eager" : "lazy"}
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  )}
                  <span className="absolute left-3 top-3 rounded-full border border-white/30 bg-black/40 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-sm backdrop-blur-md">
                    {project.category}
                  </span>
                  {project.type === "video" && (
                    <span className="pointer-events-none absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm">
                      <Play className="h-3 w-3 fill-current" />
                      Video
                    </span>
                  )}
                </div>
                <div className="flex min-h-[76px] items-center justify-between gap-3 px-4 py-3.5">
                  <h4 className="font-display text-base font-semibold leading-snug text-foreground">{project.title}</h4>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
