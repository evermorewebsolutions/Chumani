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
    <section id="contact" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-accent mb-3">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground">Contact Us</h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="bg-background rounded-3xl p-8 shadow-nature border border-border/50"
          >
            <h4 className="text-2xl font-bold text-foreground mb-6 font-display">Send a Message</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input 
                  id="name"
                  {...register("name")}
                  className={`w-full px-4 py-3 rounded-xl bg-card border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary/10 ${
                    errors.name ? "border-destructive focus:border-destructive" : "border-border focus:border-primary"
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <input 
                    id="email"
                    type="email"
                    {...register("email")}
                    className={`w-full px-4 py-3 rounded-xl bg-card border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary/10 ${
                      errors.email ? "border-destructive focus:border-destructive" : "border-border focus:border-primary"
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <input 
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className={`w-full px-4 py-3 rounded-xl bg-card border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary/10 ${
                      errors.phone ? "border-destructive focus:border-destructive" : "border-border focus:border-primary"
                    }`}
                    placeholder="073 627 5220"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Your Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  {...register("message")}
                  className={`w-full px-4 py-3 rounded-xl bg-card border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary/10 resize-none ${
                    errors.message ? "border-destructive focus:border-destructive" : "border-border focus:border-primary"
                  }`}
                  placeholder="Tell us about your landscaping needs..."
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-white bg-primary shadow-lg shadow-primary/25 hover:shadow-xl hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
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
            className="flex flex-col gap-8"
          >
            <div className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold mb-8 font-display">Contact Information</h4>
              
              <div className="space-y-6">
                <a href="mailto:sayochumani@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70 mb-1">Email Us</p>
                    <p className="font-semibold text-lg group-hover:text-accent transition-colors">sayochumani@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:0736275220" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70 mb-1">Call Us</p>
                    <p className="font-semibold text-lg group-hover:text-accent transition-colors">073 627 5220</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70 mb-1">Location</p>
                    <p className="font-semibold text-lg">Cape Town, South Africa</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/20">
                <a 
                  href="https://wa.me/27736275220" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <MessageCircle className="w-6 h-6" /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-3xl overflow-hidden h-[250px] shadow-md border border-border relative bg-muted flex items-center justify-center group cursor-pointer">
               {/* beautiful map aerial view placeholder */}
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" 
                alt="Map of Cape Town" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
              <div className="absolute flex flex-col items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="font-semibold text-foreground">Cape Town Area</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
