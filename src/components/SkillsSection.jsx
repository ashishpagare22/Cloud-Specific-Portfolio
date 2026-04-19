import { motion as Motion } from 'framer-motion'
import Container from './Container'
import SectionHeading from './SectionHeading'
import { iconMap } from './iconMap'
import { skillGroups } from '../data/portfolioData'

function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Core cloud, DevOps, and tooling strengths grouped in a way recruiters can scan quickly."
          description="The skill cards use icon-led glow states and concise labels so the section reads cleanly on mobile without losing the premium feel on desktop."
        />

        <div className="mt-14 grid gap-6 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const GroupIcon = iconMap[group.icon]

            return (
              <Motion.article
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-panel p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-100">
                    <GroupIcon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-3">
                  {group.items.map((item) => {
                    const ItemIcon = iconMap[item.icon]

                    return (
                      <Motion.div
                        key={item.name}
                        whileHover={{ y: -2, scale: 1.01 }}
                        className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-4 py-4 transition hover:border-sky-400/30 hover:bg-sky-400/10"
                      >
                        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-slate-950/80 text-sky-200 transition group-hover:border-sky-400/30 group-hover:text-sky-100">
                          <ItemIcon className="h-5 w-5" />
                        </div>
                        <span className="text-sm font-medium text-slate-200">
                          {item.name}
                        </span>
                      </Motion.div>
                    )
                  })}
                </div>
              </Motion.article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default SkillsSection
