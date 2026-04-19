import { motion as Motion } from 'framer-motion'

const nodes = [
  { id: 'n1', x: 12, y: 22, size: 12, delay: 0 },
  { id: 'n2', x: 28, y: 36, size: 16, delay: 0.6 },
  { id: 'n3', x: 46, y: 18, size: 10, delay: 1.2 },
  { id: 'n4', x: 62, y: 42, size: 14, delay: 0.9 },
  { id: 'n5', x: 82, y: 24, size: 16, delay: 1.6 },
  { id: 'n6', x: 74, y: 68, size: 10, delay: 0.3 },
  { id: 'n7', x: 34, y: 72, size: 14, delay: 1.1 },
]

const edges = [
  ['n1', 'n2'],
  ['n2', 'n3'],
  ['n3', 'n4'],
  ['n4', 'n5'],
  ['n2', 'n7'],
  ['n7', 'n6'],
  ['n4', 'n6'],
  ['n3', 'n5'],
]

function AnimatedBackdrop() {
  const nodeMap = Object.fromEntries(nodes.map((node) => [node.id, node]))

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/8 blur-3xl" />
      <div className="absolute left-[18%] top-[14%] h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-[12%] right-[12%] h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />

      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full opacity-70"
      >
        <defs>
          <linearGradient id="node-line" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(56,189,248,0.05)" />
            <stop offset="50%" stopColor="rgba(56,189,248,0.7)" />
            <stop offset="100%" stopColor="rgba(96,165,250,0.08)" />
          </linearGradient>
        </defs>
        {edges.map(([fromId, toId], index) => {
          const from = nodeMap[fromId]
          const to = nodeMap[toId]

          return (
            <Motion.line
              key={`${fromId}-${toId}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="url(#node-line)"
              strokeWidth="0.28"
              strokeLinecap="round"
              animate={{ opacity: [0.2, 0.85, 0.2] }}
              transition={{
                duration: 4.4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.18,
              }}
            />
          )
        })}
      </svg>

      {nodes.map((node) => (
        <Motion.div
          key={node.id}
          className="absolute rounded-full border border-sky-300/30 bg-sky-300/20 shadow-[0_0_28px_rgba(56,189,248,0.35)]"
          style={{
            height: node.size,
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: node.size,
          }}
          animate={{
            opacity: [0.45, 1, 0.55],
            scale: [1, 1.18, 1],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5.4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: node.delay,
          }}
        >
          <span className="absolute inset-[-7px] rounded-full border border-sky-200/10" />
        </Motion.div>
      ))}
    </div>
  )
}

export default AnimatedBackdrop
