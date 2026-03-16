import { Variants } from "framer-motion";

const premiumEasing = [0.22, 1, 0.36, 1];
const slowEasing = [0.16, 1, 0.3, 1];

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: premiumEasing }
  }
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: premiumEasing }
  }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: premiumEasing }
  }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: premiumEasing }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.7, ease: premiumEasing }
  }
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: premiumEasing }
  }
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: premiumEasing }
  }
};

export const clipReveal: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)", opacity: 0 },
  visible: { 
    clipPath: "inset(0% 0 0 0)", 
    opacity: 1,
    transition: { duration: 1, ease: slowEasing }
  }
};

export const textReveal: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: premiumEasing }
  }
};

export const counterVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: premiumEasing }
  }
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 1.2, ease: slowEasing }
  }
};

export const hoverLift = {
  whileHover: { y: -6, transition: { duration: 0.3, ease: "easeOut" } }
};

export const marqueeVariant: Variants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};
