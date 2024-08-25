//Navbar Animation
export const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

export const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

//sidbar animation
export const charVariant = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 }
}
//fade in,fade out animation.
export const fadeInOut = (direction, delay = 0.2, distance = 40, type = "spring", duration = 1) => {
  const yValue = direction === 'up' ? distance : direction === 'down' ? -distance : 0;
  const xValue = direction === 'left' ? distance : direction === 'right' ? -distance : 0;

  return {
    hidden: {
      y: yValue,
      x: xValue,
      opacity: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        delay,
        type,
        stiffness: direction === 'left' || direction === 'right' ? 100 : 60,
        opacity: { duration: 1 },
        ease: "easeIn",
        duration,
      },
    },
  };
};
export const zoomIn = (delay = 0.2, stiffness = 120, damping = 20) => {
  return {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay,
        type: "spring",
        stiffness,
        damping,
      },
    },
  };
};

export const rotateIn = {
  hidden: {
    rotate: -180,  // Start rotated 90 degrees along the Y-axis
    opacity: 0,    // Start with zero opacity
  },
  visible: {
    rotate: 0,    // End at 0 degrees (no rotation)
    opacity: 1,    // End with full opacity
    transition: {
      duration: 0.5,  // Animation duration
      ease: "easeOut", // Ease out timing function
    },
  },
};
export const rotateY = {
  hidden: {
    rotateY: -180,  // Start rotated 90 degrees along the Y-axis
    opacity: 0,    // Start with zero opacity
  },
  visible: {
    rotateY: 0,    // End at 0 degrees (no rotation)
    opacity: 1,    // End with full opacity
    transition: {
      duration: 0.5,  // Animation duration
      ease: "easeOut", // Ease out timing function
    },
  },
};




