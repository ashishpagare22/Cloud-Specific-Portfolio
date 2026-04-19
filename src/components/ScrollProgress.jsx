import { motion as Motion, useScroll } from 'framer-motion'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <Motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-300 shadow-[0_0_24px_rgba(56,189,248,0.5)]"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

export default ScrollProgress
