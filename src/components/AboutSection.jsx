import { motion as Motion } from 'framer-motion'
import Container from './Container'
import SectionHeading from './SectionHeading'
import { iconMap } from './iconMap'
import { aboutHighlights } from '../data/portfolioData'

function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <Container className="grid gap-10 xl:grid-cols-[1.08fr_0.92fr]">
        <div>
          <SectionHeading
            eyebrow="About"
            title="A cloud and DevOps journey shaped by practical systems thinking and release discipline."
            description="I enjoy turning raw infrastructure concepts into delivery experiences that feel organized, dependable, and easy for teams to trust."
          />

          <div className="mt-10 space-y-6 text-base leading-8 text-slate-300">
            <p>
              I am a Computer Engineering student from Pune, India, focused on
              cloud platforms, DevOps workflows, and the systems work that helps
              products ship with less friction.
            </p>
            <p>
              My interest sits at the intersection of infrastructure, developer
              experience, and release confidence. That means I care about AWS
              foundations, containerized runtime design, continuous delivery,
              and the observability needed after deployment.
            </p>
            <p>
              Whether I am defining a deployment path, structuring a Docker
              stack, or thinking through monitoring coverage, I aim for systems
              that are clean, automated, and understandable under pressure.
            </p>
          </div>
        </div>

        <div className="grid gap-5">
          {aboutHighlights.map((item, index) => {
            const Icon = iconMap[item.icon]

            return (
              <Motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-panel p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-100">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Motion.article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default AboutSection
