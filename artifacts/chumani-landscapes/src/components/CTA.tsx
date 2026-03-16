import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function CTA() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-32 bg-secondary flex items-center justify-center overflow-hidden">
      {/* Background Image with heavy overlay */}
      <div className="absolute inset-0 z-0">
        {/* scenic wide landscape garden shot */}
        <img
          src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=2000&auto=format&fit=crop"
          alt="Lush landscape"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 drop-shadow-md">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
            Contact us today for a free consultation and let's discuss how we can bring your vision to life.
          </p>
          <button 
            onClick={scrollToContact}
            className="px-10 py-4 rounded-xl font-bold text-lg bg-accent text-white shadow-xl shadow-black/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-accent-foreground/20"
          >
            Get Your Free Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}
