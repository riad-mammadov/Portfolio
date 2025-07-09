export function slideInFromLeft(delay) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.8,
        type: "tween",
      },
    },
  };
}

export function slideInFromRight(delay) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.8,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromTop(delay) {
  return {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
}

export function appear(delay) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
}
