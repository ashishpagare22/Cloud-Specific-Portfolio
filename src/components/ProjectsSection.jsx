import { AnimatePresence, motion as Motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import { iconMap } from './iconMap'
import { projects } from '../data/portfolioData'

const ArrowIcon = iconMap.ArrowUpRight
const CloseIcon = iconMap.X

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    if (!selectedProject) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject])

  return (
    <section id="projects" className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Hands-on DevOps projects built around release speed, resilient runtime design, and visibility."
          description="Each project card is designed like a product tile, then backed by an interactive case-study modal instead of static placeholder demos."
        />

        <div className="mt-14 grid gap-6 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="glass-panel flex h-full flex-col p-6"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-sky-100">
                  Project 0{index + 1}
                </span>
                <span className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  DevOps build
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-sky-400/30 hover:bg-sky-400/10"
                >
                  GitHub
                  <ArrowIcon className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 px-4 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_45px_rgba(37,99,235,0.35)] transition hover:translate-y-[-2px]"
                >
                  Live Demo
                  <ArrowIcon className="h-4 w-4" />
                </button>
              </div>
            </Motion.article>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {selectedProject ? (
          <Motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <Motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 20 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[32px] border border-white/10 bg-slate-950/95 shadow-[0_24px_100px_rgba(2,6,23,0.7)]"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-sky-400/30 hover:text-white"
                aria-label="Close project preview"
              >
                <CloseIcon className="h-5 w-5" />
              </button>

              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
                <div>
                  <span className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-sky-100">
                    {selectedProject.demoTitle}
                  </span>
                  <h3 className="mt-6 font-display text-3xl font-semibold text-white sm:text-4xl">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                    {selectedProject.demoDescription}
                  </p>

                  <div className="mt-8 space-y-4">
                    {selectedProject.demoSteps.map((step, index) => (
                      <div
                        key={step}
                        className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-4"
                      >
                        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sm font-semibold text-sky-100">
                          {index + 1}
                        </span>
                        <p className="text-sm leading-7 text-slate-300">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="glass-panel p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200">
                      Demo signal
                    </p>
                    <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                      {selectedProject.demoMetrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-3xl border border-white/10 bg-slate-950/80 p-4"
                        >
                          <p className="text-xs uppercase tracking-[0.26em] text-slate-500">
                            {metric.label}
                          </p>
                          <p className="mt-3 font-display text-xl font-semibold text-white">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass-panel overflow-hidden p-0">
                    <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                      <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                      <span className="h-3 w-3 rounded-full bg-amber-300/80" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                      <span className="ml-3 text-xs uppercase tracking-[0.28em] text-slate-500">
                        Preview console
                      </span>
                    </div>
                    <div className="space-y-3 px-5 py-5 font-mono text-xs text-slate-300">
                      {selectedProject.demoSnippet.map((line) => (
                        <div
                          key={line}
                          className="rounded-2xl border border-white/5 bg-slate-950/80 px-4 py-3"
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Motion.div>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}

export default ProjectsSection
