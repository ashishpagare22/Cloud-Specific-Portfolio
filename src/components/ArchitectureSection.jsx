import { motion as Motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import { iconMap } from './iconMap'
import { architectureComponents } from '../data/portfolioData'

const CloudIcon = iconMap.Cloud

function ArchitectureSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.35 })
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!isInView) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % architectureComponents.length)
    }, 1600)

    return () => window.clearInterval(intervalId)
  }, [isInView])

  const activeComponent = architectureComponents[activeIndex]
  const ActiveIcon = iconMap[activeComponent.icon]

  return (
    <section id="architecture" className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="Cloud Architecture"
          title="An interactive view of the platform layers behind the delivery story."
          description="This section is arranged like a lightweight architecture board, with each cloud service layer illuminating as you scroll through the system."
        />

        <div className="mt-14 grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <div ref={sectionRef} className="relative">
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              <div className="absolute left-[20%] top-[17%] h-px w-[23%] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
              <div className="absolute left-[39%] top-[17%] h-px w-[23%] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
              <div className="absolute left-[33%] top-[50%] h-[20%] w-px bg-gradient-to-b from-transparent via-sky-400/60 to-transparent" />
              <div className="absolute right-[33%] top-[50%] h-[20%] w-px bg-gradient-to-b from-transparent via-sky-400/60 to-transparent" />
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[auto_auto_auto]">
              {architectureComponents.map((component, index) => {
                const Icon = iconMap[component.icon]
                const isActive = activeIndex === index

                return (
                  <Motion.article
                    key={component.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className={`group relative min-h-[220px] overflow-hidden rounded-[28px] border p-6 transition duration-300 ${
                      isActive
                        ? 'border-sky-400/40 bg-slate-900/90 shadow-neon'
                        : 'border-white/10 bg-slate-950/70 hover:border-sky-400/20 hover:bg-slate-900/80'
                    } ${component.layoutClass}`}
                  >
                    <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                      Layer {index + 1}
                    </div>

                    <div className="flex h-full flex-col justify-between gap-6">
                      <div>
                        <div
                          className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl border ${
                            isActive
                              ? 'border-sky-400/30 bg-sky-400/15 text-sky-100'
                              : 'border-white/10 bg-white/5 text-sky-200'
                          }`}
                        >
                          <Icon className="h-7 w-7" />
                        </div>
                        <h3 className="mt-5 font-display text-xl font-semibold text-white">
                          {component.title}
                        </h3>
                        <p className="mt-3 max-w-sm text-sm leading-7 text-slate-400">
                          {component.summary}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                        Hover to inspect service role
                      </div>
                    </div>

                    <div className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-6 rounded-2xl border border-sky-400/25 bg-slate-950/95 p-4 text-sm leading-6 text-slate-300 opacity-0 shadow-neon transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      {component.detail}
                    </div>
                  </Motion.article>
                )
              })}

              <Motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: 0.25 }}
                className="glass-panel relative flex min-h-[260px] flex-col justify-between overflow-hidden p-6 lg:col-span-4 lg:col-start-5 lg:row-start-2"
              >
                <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
                    Core Runtime
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-white">
                    Cloud-ready production fabric
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Infrastructure, containers, orchestration, and feedback loops
                    connect here to keep releases resilient.
                  </p>
                </div>

                <div className="relative flex items-center justify-between rounded-3xl border border-white/10 bg-slate-950/75 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-sky-400/25 bg-sky-400/10 text-sky-100">
                      <CloudIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Delivery mesh</p>
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                        Compute + storage + automation
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((item) => (
                      <span
                        key={item}
                        className="h-3 w-3 rounded-full bg-sky-300/70 shadow-[0_0_14px_rgba(125,211,252,0.6)]"
                      />
                    ))}
                  </div>
                </div>
              </Motion.div>
            </div>
          </div>

          <Motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="glass-panel self-start p-6 sm:p-7"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-100">
              <ActiveIcon className="h-4 w-4" />
              Active layer spotlight
            </div>

            <h3 className="mt-6 font-display text-3xl font-semibold text-white">
              {activeComponent.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-slate-300">
              {activeComponent.detail}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {architectureComponents.map((component, index) => {
                const isActive = index === activeIndex

                return (
                  <div
                    key={component.id}
                    className={`rounded-2xl border px-4 py-4 transition ${
                      isActive
                        ? 'border-sky-400/30 bg-sky-400/10 text-sky-100'
                        : 'border-white/10 bg-white/5 text-slate-300'
                    }`}
                  >
                    <p className="font-display text-lg font-semibold">
                      {component.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {component.summary}
                    </p>
                  </div>
                )
              })}
            </div>
          </Motion.aside>
        </div>
      </Container>
    </section>
  )
}

export default ArchitectureSection
