
export const ENTER_DURATION=.5
export const EXIT_DURATION=.2

export const DEFAULT_VARIANTS = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: ENTER_DURATION } },
    exit: { opacity: 0, transition: { duration: EXIT_DURATION } }
  }