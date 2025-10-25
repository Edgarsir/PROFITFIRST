import { Variants } from 'framer-motion';

// Spring configuration for smooth animations
export const springConfig = {
  type: "spring" as const,
  stiffness: 120,
  damping: 20,
  mass: 1,
};

// Smoother spring for delicate animations
export const smoothSpring = {
  type: "spring" as const,
  stiffness: 80,
  damping: 25,
  mass: 1,
};

// Fade and slide up animation
export const fadeSlideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ...springConfig,
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.95,
    transition: {
      duration: 0.4,
    },
  },
};

// Slide from left
export const slideFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
    rotateY: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      ...springConfig,
      duration: 0.7,
    },
  },
};

// Slide from right
export const slideFromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
    rotateY: 15,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      ...springConfig,
      duration: 0.7,
    },
  },
};

// Scale and rotate animation
export const scaleRotate: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotate: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      ...springConfig,
      duration: 0.6,
    },
  },
};

// Pop in animation
export const popIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    rotate: -180,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      ...springConfig,
      duration: 0.8,
    },
  },
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Hover effects
export const hoverScale = {
  scale: 1.05,
  transition: {
    type: "spring" as const,
    stiffness: 400,
    damping: 10,
  },
};

export const hoverGlow = {
  scale: 1.05,
  boxShadow: "0 0 25px rgba(19, 239, 150, 0.4)",
  transition: {
    type: "spring" as const,
    stiffness: 400,
    damping: 10,
  },
};

export const hoverRotateScale = {
  scale: 1.1,
  rotate: 5,
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
  transition: {
    type: "spring" as const,
    stiffness: 400,
    damping: 10,
  },
};

// Slide with rotation for reviews
export const slideLeftRotate: Variants = {
  hidden: {
    opacity: 0,
    x: -150,
    rotate: -15,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: {
      ...smoothSpring,
      duration: 0.8,
    },
  },
};

export const slideRightRotate: Variants = {
  hidden: {
    opacity: 0,
    x: 150,
    rotate: 15,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: {
      ...smoothSpring,
      duration: 0.8,
    },
  },
};

// Enhanced stagger for reviews
export const reviewStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Review card hover effect
export const reviewHover = {
  scale: 1.03,
  y: -8,
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15), 0 0 20px rgba(19, 239, 150, 0.1)",
  transition: {
    type: "spring" as const,
    stiffness: 300,
    damping: 20,
  },
};