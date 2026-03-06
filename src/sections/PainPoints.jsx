import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
  }),
}

const pains = [
  {
    icon: '⊘',
    title: '精度不足',
    desc: '传统千分表法相对误差 1.30%～3.98%，远不能满足精密材料研究需求',
  },
  {
    icon: '¥',
    title: '价格高昂',
    desc: '进口高端膨胀仪 50万～100万元/台，中小实验室难以承受',
  },
  {
    icon: '⏱',
    title: '全人工操作',
    desc: '从装样到读数全程人工，每次耗时 2～3 小时，效率极低',
  },
]

const steps = [
  { title: '热膨胀 ΔL', desc: '金属棒受热，自由端产生微米级伸长位移' },
  { title: '单缝宽度 Δa', desc: '位移直接推动刀片，转换为单缝缝宽的等量变化' },
  { title: '衍射放大 Δx', desc: '激光衍射将缝宽变化光学放大约25倍为条纹位移' },
  { title: 'CMOS 成像', desc: '高分辨率相机捕获衍射图像，像元精度 2.2μm' },
  { title: 'AI 解算 CTE', desc: '算法亚像素定位条纹中心，自动反演线膨胀系数α' },
]

export default function PainPoints() {
  return (
    <section id="pain-points" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-16"
        >
          痛点<span className="text-accent-red">与</span>破局
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left: pain points (red) */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent-red font-heading font-semibold text-lg mb-6"
            >
              传统三大痛点
            </motion.h3>
            <div className="space-y-5">
              {pains.map((p, i) => (
                <motion.div
                  key={p.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="card p-5 border-accent-red/20 hover:border-accent-red/50"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl text-accent-red flex-shrink-0">{p.icon}</span>
                    <div>
                      <h4 className="font-heading font-semibold text-text-primary">
                        {p.title}
                      </h4>
                      <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: solution (cyan) */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent-cyan font-heading font-semibold text-lg mb-6"
            >
              我们的解决方案
            </motion.h3>
            <div className="space-y-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  {/* Step node */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-10 h-10 rounded-card border border-accent-cyan/50 bg-bg-card flex items-center justify-center text-accent-cyan font-mono text-sm font-bold">
                      {i + 1}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px h-8 bg-accent-cyan/30" />
                    )}
                  </div>
                  {/* Step label + description */}
                  <div className="py-2">
                    <span className="font-mono text-accent-cyan text-sm">{step.title}</span>
                    <span className="text-gray-400 text-sm ml-2">→ {step.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 card p-5 border-l-2 border-accent-cyan bg-bg-card"
            >
              <p className="text-sm text-text-secondary leading-relaxed">
                通过光学放大与AI识别，将测量误差从主观人为因素转变为可控客观物理因素
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
