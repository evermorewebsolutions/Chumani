import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  message: z.string().min(10, "Please provide more details"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      console.log("Form data:", data);
      setIsSubmitting(false);
      reset();
      toast({
        title: "Message sent successfully!",
        description: "We will get back to you as soon as possible.",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-[hsl(150,25%,10%)] to-[hsl(153,35%,6%)] relative">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-accent mb-3">Get In Touch</h2>
            <h3 className="text-5xl md:text-6xl font-display font-bold text-white">Contact Us</h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="lg:col-span-7 bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-white/10 relative overflow-hidden"
          >
            {/* Form Glow */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-[80px]"></div>

            <h4 className="text-3xl font-display font-bold text-white mb-8 relative z-10">Send a Message</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2 uppercase tracking-wide">Full Name</label>
                <input 
                  id="name"
                  {...register("name")}
                  className={`w-full px-5 py-4 rounded-xl bg-black/20 border transition-all duration-300 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-black/40 ${
                    errors.name ? "border-destructive focus:border-destructive" : "border-white/10 focus:border-primary"
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-2 text-sm text-destructive">{errors.name.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2 uppercase tracking-wide">Email Address</label>
                  <input 
                    id="email"
                    type="email"
                    {...register("email")}
                    className={`w-full px-5 py-4 rounded-xl bg-black/20 border transition-all duration-300 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-black/40 ${
                      errors.email ? "border-destructive focus:border-destructive" : "border-white/10 focus:border-primary"
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-2 text-sm text-destructive">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-2 uppercase tracking-wide">Phone Number</label>
                  <input 
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className={`w-full px-5 py-4 rounded-xl bg-black/20 border transition-all duration-300 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-black/40 ${
                      errors.phone ? "border-destructive focus:border-destructive" : "border-white/10 focus:border-primary"
                    }`}
                    placeholder="073 627 5220"
                  />
                  {errors.phone && <p className="mt-2 text-sm text-destructive">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2 uppercase tracking-wide">Your Message</label>
                <textarea 
                  id="message"
                  rows={5}
                  {...register("message")}
                  className={`w-full px-5 py-4 rounded-xl bg-black/20 border transition-all duration-300 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-black/40 resize-none ${
                    errors.message ? "border-destructive focus:border-destructive" : "border-white/10 focus:border-primary"
                  }`}
                  placeholder="Tell us about your landscaping needs..."
                ></textarea>
                {errors.message && <p className="mt-2 text-sm text-destructive">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-xl font-bold text-primary-foreground bg-primary shadow-lg shadow-primary/20 hover:shadow-xl hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none text-lg mt-4"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div className="glass-dark rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[40px]"></div>
              
              <h4 className="text-2xl font-display font-bold mb-8 text-white">Contact Details</h4>
              
              <div className="space-y-8">
                <a href="mailto:sayochumani@gmail.com" className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-accent group-hover:border-accent group-hover:text-white text-accent transition-all duration-300 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Email Us</p>
                    <p className="font-medium text-lg text-white group-hover:text-accent transition-colors break-all">sayochumani@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:0736275220" className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-accent group-hover:border-accent group-hover:text-white text-accent transition-all duration-300 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Call Us</p>
                    <p className="font-medium text-lg text-white group-hover:text-accent transition-colors">073 627 5220</p>
                  </div>
                </a>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-accent shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Location</p>
                    <p className="font-medium text-lg text-white">Cape Town, South Africa</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <a 
                  href="https://wa.me/27736275220" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <MessageCircle className="w-6 h-6 group-hover:animate-pulse" /> 
                  <span className="tracking-wide">Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-3xl overflow-hidden h-[300px] shadow-2xl border border-white/10 relative bg-black flex items-center justify-center group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=70&w=700&auto=format&fit=crop" 
                alt="Map of Cape Town"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
              <div className="absolute flex flex-col items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-2xl shadow-xl">
                <MapPin className="w-8 h-8 text-accent" />
                <span className="font-bold text-white tracking-wide">Cape Town Area</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}