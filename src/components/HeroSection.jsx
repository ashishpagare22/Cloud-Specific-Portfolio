import { motion as Motion } from 'framer-motion'
import AnimatedBackdrop from './AnimatedBackdrop'
import Container from './Container'
import { iconMap } from './iconMap'
import useTypewriter from '../hooks/useTypewriter'
import { heroStats, typingWords } from '../data/portfolioData'

const ArrowRightIcon = iconMap.ArrowRight
const CheckIcon = iconMap.CheckCircle2
const SparklesIcon = iconMap.Sparkles

const pipelineStages = ['Commit', 'Build', 'Scan', 'Deploy', 'Observe']
const statusCards = [
  {
    title: 'Pipeline heartbeat',
    value: 'Stable',
    helper: 'Quality gates active',
    className: 'left-0 top-10',
  },
  {
    title: 'Runtime fabric',
    value: 'Docker + K8s',
    helper: 'Container-first delivery',
    className: 'right-0 top-24',
  },
  {
    title: 'Ops signal',
    value: 'Observability on',
    helper: 'Logs, metrics, alerts',
    className: 'bottom-8 left-10',
  },
]

function HeroSection() {
  const typedWord = useTypewriter(typingWords)

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-14"
    >
      <AnimatedBackdrop />

      <Container className="relative z-10 grid items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-sky-100">
            <SparklesIcon className="h-4 w-4" />
            Premium cloud portfolio
          </span>

          <div className="mt-8 space-y-6">
            <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Ashish Pagare
            </h1>
            <p className="text-xl font-semibold text-sky-200 sm:text-2xl">
              Cloud &amp; DevOps Engineer
            </p>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              I build cloud-native systems, automate delivery pipelines, and
              shape infrastructure that feels resilient, observable, and ready
              for scale from day one.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-300 sm:text-base">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-400">
              Typing focus
            </span>
            <span className="font-display text-xl font-medium tracking-wide text-sky-200 sm:text-2xl">
              {typedWord}
              <span className="ml-1 animate-pulse text-white">|</span>
            </span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_45px_rgba(37,99,235,0.35)] transition hover:translate-y-[-2px]"
            >
              View Projects
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-400/30 hover:bg-sky-400/10"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="glass-panel p-5">
                <p className="font-display text-lg font-semibold text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto h-[460px] w-full max-w-[560px]"
        >
          <div className="glass-panel absolute inset-0 overflow-hidden p-6 sm:p-7">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-400/10 to-transparent" />

            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
                  Production Flight Deck
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-white">
                  Cloud-first delivery surface
                </h2>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.8)]" />
                Online
              </span>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  Release path
                </p>
                <div className="mt-5 flex items-center justify-between gap-2">
                  {pipelineStages.map((stage, index) => (
                    <div key={stage} className="flex flex-1 items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-xs font-semibold text-sky-100">
                        {index + 1}
                      </div>
                      {index < pipelineStages.length - 1 && (
                        <div className="h-px flex-1 bg-gradient-to-r from-sky-400/60 to-transparent" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
                  {pipelineStages.map((stage) => (
                    <span
                      key={stage}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5"
                    >
                      {stage}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  Service health
                </p>
                <div className="mt-5 space-y-4">
                  {[
                    ['Containers', 'Healthy'],
                    ['Ingress', 'Secured'],
                    ['Metrics', 'Streaming'],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3"
                    >
                      <span className="text-sm text-slate-300">{label}</span>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-200">
                        <CheckIcon className="h-4 w-4" />
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  Delivery cadence
                </p>
                <div className="mt-5 flex h-28 items-end gap-3">
                  {[34, 58, 42, 76, 63, 88, 71].map((height, index) => (
                    <Motion.div
                      key={height}
                      className="flex-1 rounded-t-2xl bg-gradient-to-t from-blue-600 to-sky-300"
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.75, delay: 0.18 + index * 0.08 }}
                    />
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  Cloud zones
                </p>
                <div className="mt-5 space-y-3">
                  {['Ingress layer', 'Compute tier', 'Telemetry mesh'].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {statusCards.map((card, index) => (
            <Motion.div
              key={card.title}
              className={`glass-panel absolute w-52 p-4 ${card.className}`}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.45,
              }}
            >
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                {card.title}
              </p>
              <p className="mt-2 font-display text-lg font-semibold text-white">
                {card.value}
              </p>
              <p className="mt-1 text-sm text-slate-400">{card.helper}</p>
            </Motion.div>
          ))}
        </Motion.div>
      </Container>
    </section>
  )
}

export default HeroSection
