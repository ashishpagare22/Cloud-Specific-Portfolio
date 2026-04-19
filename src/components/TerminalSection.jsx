import { motion as Motion } from 'framer-motion'
import Container from './Container'
import SectionHeading from './SectionHeading'
import useTerminalTyping from '../hooks/useTerminalTyping'
import { terminalLines } from '../data/portfolioData'

function TerminalSection() {
  const { activeLineIndex, typedLines } = useTerminalTyping(terminalLines)

  return (
    <section id="terminal" className="section-shell">
      <Container className="grid items-center gap-10 xl:grid-cols-[0.88fr_1.12fr]">
        <div>
          <SectionHeading
            eyebrow="Live Terminal"
            title="A terminal-inspired section that makes the deployment story feel hands-on."
            description="The console loops through a build, run, and rollout flow to reinforce the Linux-first, command-line-driven side of the portfolio."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ['Build', 'Image packaging'],
              ['Run', 'Container startup'],
              ['Ship', 'Deployment success'],
            ].map(([title, label]) => (
              <div key={title} className="glass-panel p-5">
                <p className="font-display text-lg font-semibold text-white">{title}</p>
                <p className="mt-2 text-sm text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="glass-panel overflow-hidden p-0"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-300/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            </div>
            <span className="text-xs uppercase tracking-[0.28em] text-slate-500">
              ashish@cloud-shell
            </span>
          </div>

          <div className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(2,6,23,0.96),rgba(2,6,23,0.82))] px-5 py-6 font-mono text-sm leading-7 text-slate-200">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.12)_1px,transparent_1px)] bg-[size:100%_1.9rem]" />
            </div>

            <div className="relative min-h-[23rem] space-y-2">
              {typedLines.map((line, index) => {
                const isActive = index === activeLineIndex

                return (
                  <div
                    key={`${index}-${line.type}`}
                    className={
                      line.type === 'command'
                        ? 'text-sky-200'
                        : line.type === 'success'
                          ? 'text-emerald-200'
                          : 'text-slate-300'
                    }
                  >
                    {line.text}
                    {isActive ? (
                      <span className="ml-1 inline-block h-5 w-2 translate-y-1 animate-pulse bg-sky-300 align-middle" />
                    ) : null}
                  </div>
                )
              })}
            </div>
          </div>
        </Motion.div>
      </Container>
    </section>
  )
}

export default TerminalSection
