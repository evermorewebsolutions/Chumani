import { Leaf } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0f0d] text-white pt-24 pb-8 relative overflow-hidden">
      {/* Decorative Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[250px] md:text-[350px] font-display font-bold text-white/[0.02] pointer-events-none select-none whitespace-nowrap z-0">
        © {currentYear}
      </div>

      {/* Top Gradient Divider */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-8 group cursor-pointer w-fit">
              <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-10 h-10" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-3xl leading-none tracking-wide text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:text-white/90 transition-colors">
                  Chumani's
                </span>
                <span className="text-xs uppercase tracking-[0.3em] text-white/50 font-semibold mt-1">
                  Landscapes
                </span>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed text-lg font-light max-w-md">
              Transforming outdoor spaces into living art. Premium landscape design, installation, and maintenance services based in Cape Town.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-xl mb-8 text-white">Our Services</h4>
            <ul className="space-y-4">
              {[
                "Garden Design", 
                "Soft & Hard Landscaping", 
                "Irrigation Systems", 
                "Garden Maintenance",
                "Professional Consultation"
              ].map((item, i) => (
                <li key={i}>
                  <a href="#services" className="text-white/50 hover:text-white transition-colors flex items-center relative group py-1">
                    <span className="absolute left-0 w-0.5 h-0 bg-accent group-hover:h-full transition-all duration-300"></span>
                    <span className="pl-4 group-hover:pl-5 transition-all duration-300 text-sm tracking-wide">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h4 className="font-display font-bold text-xl mb-8 text-white">Contact</h4>
            <ul className="space-y-6 text-white/60">
              <li>
                <span className="block text-accent text-xs uppercase tracking-widest mb-1 font-bold">Owner</span>
                <span className="text-white/90">Chumani Sayo, <span className="text-sm font-light">NDip Landscape Technology</span></span>
              </li>
              <li>
                <span className="block text-accent text-xs uppercase tracking-widest mb-1 font-bold">Phone / WhatsApp</span>
                <a href="tel:0736275220" className="hover:text-white transition-colors text-white/90 text-lg">073 627 5220</a>
              </li>
              <li>
                <span className="block text-accent text-xs uppercase tracking-widest mb-1 font-bold">Email</span>
                <a href="mailto:sayochumani@gmail.com" className="hover:text-white transition-colors text-white/90">sayochumani@gmail.com</a>
              </li>
              <li>
                <span className="block text-accent text-xs uppercase tracking-widest mb-1 font-bold">Location</span>
                <span className="text-white/90">Cape Town, South Africa</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Decorative SVG Line */}
        <div className="flex justify-center mb-8">
          <svg width="200" height="24" viewBox="0 0 200 24" fill="none" className="opacity-10" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12C50 12 50 2 100 2C150 2 150 22 200 22" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="100" cy="2" r="2" fill="white"/>
            <circle cx="200" cy="22" r="2" fill="white"/>
          </svg>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-sm tracking-wide">
            &copy; {currentYear} Chumani's Landscapes and Irrigation (Pty) Ltd. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-white/40 font-medium tracking-wide">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
        <div className="mt-4 text-center text-white/25 text-xs tracking-wide">
          Made with ❤️ in South Africa by Evermore Digital Solutions
        </div>
      </div>
    </footer>
  );
}