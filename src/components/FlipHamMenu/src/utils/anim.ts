export const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 10,
    translateX: 50,
  },
  enter: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + (i * 0.1),
      ease: [.215, .61, .355, 1] as const,
      opacity: { duration: 0.35 }
    }
  }),
  exit: {
    opacity: 0,
    rotateX: 90,
    translateY: 10,
    translateX: 30,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as const }
  }
}

