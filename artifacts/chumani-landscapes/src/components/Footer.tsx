import { Leaf } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t-[8px] border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="text-accent">
                <Leaf className="w-8 h-8" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl leading-none tracking-wide text-white">
                  Chumani's
                </span>
                <span className="text-xs uppercase tracking-widest text-white/60 font-semibold">
                  Landscapes
                </span>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed max-w-sm">
              Transforming outdoor spaces into living art. Premium landscape design, installation, and maintenance services based in Cape Town.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Garden Design", 
                "Soft & Hard Landscaping", 
                "Irrigation Systems", 
                "Garden Maintenance",
                "Professional Consultation"
              ].map((item, i) => (
                <li key={i}>
                  <a href="#services" className="text-white/60 hover:text-accent transition-colors flex items-center gap-2 before:content-[''] before:w-1 before:h-1 before:bg-accent before:rounded-full">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">Contact</h4>
            <ul className="space-y-4 text-white/60">
              <li>
                <span className="block text-white/40 text-sm mb-1">Owner</span>
                Chumani Sayo, NDip Landscape Technology
              </li>
              <li>
                <span className="block text-white/40 text-sm mb-1">Phone / WhatsApp</span>
                <a href="tel:0736275220" className="hover:text-accent transition-colors">073 627 5220</a>
              </li>
              <li>
                <span className="block text-white/40 text-sm mb-1">Email</span>
                <a href="mailto:sayochumani@gmail.com" className="hover:text-accent transition-colors">sayochumani@gmail.com</a>
              </li>
              <li>
                <span className="block text-white/40 text-sm mb-1">Location</span>
                Cape Town, South Africa
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} Chumani's Landscapes and Irrigation (Pty) Ltd. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
