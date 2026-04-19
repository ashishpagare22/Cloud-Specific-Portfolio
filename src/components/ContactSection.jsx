import { motion as Motion } from 'framer-motion'
import Container from './Container'
import SectionHeading from './SectionHeading'
import { iconMap } from './iconMap'
import { contactLinks } from '../data/portfolioData'

const ArrowIcon = iconMap.ArrowUpRight

function ContactSection() {
  return (
    <section id="contact" className="section-shell pb-28">
      <Container className="grid gap-10 xl:grid-cols-[1.02fr_0.98fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let&apos;s connect for cloud, platform engineering, and DevOps opportunities."
            description="This closing section keeps actions simple: direct email, GitHub, LinkedIn, and a resume download button ready for recruiter handoff."
          />

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:ashishpagare2210@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_45px_rgba(37,99,235,0.35)] transition hover:translate-y-[-2px]"
            >
              Email Ashish
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href="/Ashish_Pagare_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-400/30 hover:bg-sky-400/10"
            >
              Download Resume
            </a>
          </div>

          <div className="glass-panel mt-10 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200">
              Availability
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {[
                ['Focus', 'Cloud & DevOps roles'],
                ['Location', 'Pune, India'],
                ['Style', 'Automation + observability'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4"
                >
                  <p className="text-xs uppercase tracking-[0.26em] text-slate-500">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-200">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          {contactLinks.map((item, index) => {
            const Icon = iconMap[item.icon]

            return (
              <Motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-panel group flex items-center justify-between gap-4 p-6"
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
                download={item.download}
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-100">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.26em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-100 sm:text-base">
                      {item.value}
                    </p>
                  </div>
                </div>
                <ArrowIcon className="h-5 w-5 text-slate-500 transition group-hover:text-sky-200" />
              </Motion.a>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default ContactSection
