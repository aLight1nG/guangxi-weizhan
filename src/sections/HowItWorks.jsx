import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
}

const steps = [
  {
    num: '①',
    title: '位移转换',
    desc: '金属棒膨胀 ΔL → 单缝缝宽缩小 Δa',
  },
  {
    num: '②',
    title: '光学放大',
    desc: '衍射效应将 Δa 放大为条纹位移 Δxₖ（放大倍数 M ≈ 25 倍）',
  },
  {
    num: '③',
    title: 'AI 反演',
    desc: 'a = kλd/xₖ → α = Δa/(L·Δt)',
  },
]

const formulas = [
  'a = kλd / xₖ',
  'M = xₖ / a',
  'α = Δa / (L·Δt)',
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="pt-24 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-4"
        >
          三步转换，光学放大的奥秘
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-text-secondary text-sm mb-14"
        >
          从微米级热膨胀到毫米级条纹位移
        </motion.p>

        {/* Three step cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="card p-6 flex flex-col"
            >
              <div className="text-3xl text-accent-cyan mb-3">{s.num}</div>
              <h3 className="font-heading font-semibold text-text-primary mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed flex-1">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Formula display */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-8 border-t-2 border-t-accent-cyan/30"
        >
          <h3 className="text-xs text-text-secondary uppercase tracking-wider mb-6 font-heading">
            核心公式
          </h3>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-lg md:text-xl">
            {formulas.map((f) => (
              <span key={f} className="font-mono text-accent-cyan">{f}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
