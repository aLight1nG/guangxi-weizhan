import { motion } from 'framer-motion'
import CountUp from '../components/CountUp'

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
}

const kpis = [
  { value: 0.4, decimals: 1, prefix: '< ', suffix: '%', label: '测量相对误差' },
  { value: 8.6, decimals: 1, suffix: '×', label: '最高精度提升' },
  { value: 4450, decimals: 0, prefix: '¥', label: '整机BOM成本' },
  { value: 95, decimals: 0, suffix: '% ↓', label: '对比进口设备成本' },
]

/* Animated SVG diffraction pattern background */
function DiffractionBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[60%] opacity-20"
        viewBox="0 0 1400 400"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="heroGrad" x1="0" y1="0.5" x2="1" y2="0.5">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#00E5FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Central bright fringe */}
        <motion.rect
          x="0" y="190" width="1400" height="20" rx="10"
          fill="url(#heroGrad)"
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Side fringes with decreasing width */}
        {[1, 2, 3, 4, 5, 6].map((n) => {
          const thickness = Math.max(1, 12 - n * 2)
          const gap = 28 + n * 6
          return (
            <g key={n}>
              <motion.rect
                x="0" y={200 - gap * n} width="1400" height={thickness} rx={thickness / 2}
                fill="url(#heroGrad)" opacity={0.5 / n}
                animate={{ x: [0, 20 + n * 5, 0] }}
                transition={{ duration: 8 + n, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.rect
                x="0" y={200 + gap * n} width="1400" height={thickness} rx={thickness / 2}
                fill="url(#heroGrad)" opacity={0.5 / n}
                animate={{ x: [0, 20 + n * 5, 0] }}
                transition={{ duration: 8 + n, repeat: Infinity, ease: 'easeInOut' }}
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-8 overflow-hidden"
    >
      <DiffractionBg />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main title */}
        <motion.h1
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-heading font-bold text-5xl md:text-7xl tracking-tight"
        >
          <span className="text-accent-cyan">光析</span>
          <span className="text-text-primary">微胀</span>
        </motion.h1>

        {/* English subtitle */}
        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-4 font-heading text-lg md:text-xl text-text-secondary tracking-wide"
        >
          LightDiff · CTE&nbsp;&nbsp;Precision Beyond Limits
        </motion.p>

        {/* Tagline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 text-xl md:text-2xl text-text-primary/90"
        >
          让光替你测量，让 AI 替你计算
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a href="#how-it-works" className="btn-ghost">
            查看技术演示
          </a>
          <a href="#product" className="btn-fill">
            了解产品
          </a>
        </motion.div>

        {/* KPI cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              custom={4 + i}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="card p-5 text-center"
            >
              <div className="font-mono text-2xl md:text-3xl font-bold text-accent-red">
                <CountUp
                  end={kpi.value}
                  decimals={kpi.decimals}
                  prefix={kpi.prefix || ''}
                  suffix={kpi.suffix || ''}
                />
              </div>
              <div className="mt-2 text-sm text-text-secondary">{kpi.label}</div>
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-gray-500 text-center mt-4">
          数据来源：第十一届全国大学生物理实验竞赛（创新类）实验报告
        </p>
      </div>
    </section>
  )
}
