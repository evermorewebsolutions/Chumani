import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

type Project = {
  src: string;
  type: "image" | "video";
  title: string;
  category: string;
  poster?: string;
};

const categories = ["All Work", "Garden Design", "Irrigation", "Maintenance", "Hard Landscaping"];

const recentProjects: Project[] = [
  { src: "/media/images/work/finished-entrance.webp", type: "image", title: "A Welcoming Garden Entrance", category: "Hard Landscaping" },
  { src: "/media/images/work/entrance-side-view.webp", type: "image", title: "Gravel Garden & Feature Planting", category: "Garden Design" },
  { src: "/media/images/work/finished-lawn.webp", type: "image", title: "Freshly Defined Lawn & Hedges", category: "Garden Design" },
  { src: "/media/images/work/gravel-garden.webp", type: "image", title: "A Garden Path Taking Shape", category: "Hard Landscaping" },
  { src: "/media/images/work/entrance-progress.webp", type: "image", title: "Building a Paved Entrance", category: "Hard Landscaping" },
  { src: "/media/images/work/garden-path-progress.webp", type: "image", title: "Pathway & Garden Installation", category: "Hard Landscaping" },
  { src: "/media/images/work/roadside-prep.webp", type: "image", title: "Street-Side Garden Preparation", category: "Garden Design" },
  { src: "/media/images/work/garden-steps-progress.webp", type: "image", title: "Brick Steps & Patio in Progress", category: "Hard Landscaping" },
  { src: "/media/images/work/brick-steps.webp", type: "image", title: "Creating a Practical Garden Stairway", category: "Hard Landscaping" },
  { src: "/media/images/work/lawn-bed-prep.webp", type: "image", title: "Preparing a Garden Bed", category: "Maintenance" },
  { src: "/media/images/work/hedge-work.webp", type: "image", title: "Careful Hedge & Lawn Maintenance", category: "Maintenance" },
  { src: "/media/images/work/garden-maintenance.webp", type: "image", title: "Shaping a Fresh Lawn", category: "Maintenance" },
  { src: "/media/images/work/irrigation-valves.webp", type: "image", title: "Irrigation Valve Installation", category: "Irrigation" },
  { src: "/media/images/work/irrigation-controller.webp", type: "image", title: "Smart Irrigation Controls", category: "Irrigation" },
  { src: "/media/images/work/paving-team.webp", type: "image", title: "Craftsmanship on Site", category: "Hard Landscaping" },
  {
    src: "/media/videos/entrance.mp4",
    type: "video",
    title: "Garden Entrance — Project Video",
    category: "Hard Landscaping",
    poster: "/media/images/work/finished-entrance.webp",
  },
  {
    src: "/media/videos/landscaping.mp4",
    type: "video",
    title: "Landscape Installation — Project Video",
    category: "Garden Design",
    poster: "/media/images/work/gravel-garden.webp",
  },
  {
    src: "/media/videos/team.mp4",
    type: "video",
    title: "Our Team at Work",
    category: "Maintenance",
    poster: "/media/images/work/hedge-work.webp",
  },
  {
    src: "/media/videos/irrigation.mp4",
    type: "video",
    title: "Irrigation — Project Video",
    category: "Irrigation",
    poster: "/media/images/work/irrigation-valves.webp",
  },
];

const existingProjects: Project[] = [
  { src: "/media/images/legacy/project4.webp", type: "image", title: "Completed Garden Pathway", category: "Hard Landscaping" },
  { src: "/media/images/legacy/project6.webp", type: "image", title: "Espalier Wall Planting", category: "Garden Design" },
  { src: "/media/images/legacy/project8.webp", type: "image", title: "Lawn Fertilization", category: "Maintenance" },
  { src: "/media/images/legacy/project5.webp", type: "image", title: "Garden Walkway Finished", category: "Hard Landscaping" },
  { src: "/media/images/legacy/project7.webp", type: "image", title: "Lawn Treatment & Care", category: "Maintenance" },
  {
    src: "/media/videos/project1.mp4",
    type: "video",
    title: "Garden Transformation",
    category: "Garden Design",
    poster: "/media/images/legacy/project4.webp",
  },
  { src: "/media/images/legacy/project2.webp", type: "image", title: "Pathway Slab Installation", category: "Hard Landscaping" },
  { src: "/media/images/legacy/project3.webp", type: "image", title: "Pathway Progress", category: "Hard Landscaping" },
  {
    src: "/media/videos/project2.mp4",
    type: "video",
    title: "Irrigation System Install",
    category: "Irrigation",
    poster: "/media/images/legacy/project1.webp",
  },
  { src: "/media/images/legacy/project1.webp", type: "image", title: "Irrigation Trench Preparation", category: "Irrigation" },
  { src: "/media/images/legacy/project9.webp", type: "image", title: "Chumani's Team", category: "Garden Design" },
  { src: "/media/images/legacy/project10.webp", type: "image", title: "Hedge Maintenance", category: "Maintenance" },
  {
    src: "/media/videos/project3.mp4",
    type: "video",
    title: "Landscaping in Action",
    category: "Maintenance",
    poster: "/media/images/legacy/project10.webp",
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
                      loading="lazy"
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
