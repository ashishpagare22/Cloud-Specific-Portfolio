import { motion as Motion } from 'framer-motion'

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignClass =
    align === 'center'
      ? 'mx-auto items-center text-center'
      : 'items-start text-left'

  return (
    <Motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`flex max-w-3xl flex-col gap-4 ${alignClass}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.32em] text-sky-200">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
        {description}
      </p>
    </Motion.div>
  )
}

export default SectionHeading
