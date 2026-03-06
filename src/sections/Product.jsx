import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
}

const modules = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="6" stroke="#00E5FF" strokeWidth="1.5" />
        <line x1="16" y1="4" x2="16" y2="10" stroke="#00E5FF" strokeWidth="1.5" />
        <line x1="16" y1="22" x2="16" y2="28" stroke="#00E5FF" strokeWidth="1.5" />
        <line x1="4" y1="16" x2="10" y2="16" stroke="#00E5FF" strokeWidth="1.5" />
        <line x1="22" y1="16" x2="28" y2="16" stroke="#00E5FF" strokeWidth="1.5" />
      </svg>
    ),
    name: '激光光源',
    param: 'He-Ne 632.8 nm',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="6" width="20" height="20" rx="2" stroke="#00E5FF" strokeWidth="1.5" />
        <rect x="10" y="10" width="12" height="12" rx="1" stroke="#00E5FF" strokeWidth="1" opacity="0.5" />
        <circle cx="16" cy="16" r="3" fill="#00E5FF" opacity="0.3" />
      </svg>
    ),
    name: 'CMOS 相机',
    param: '2492×1944 px，像元 2.2μm',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 24V12a8 8 0 0116 0v12" stroke="#00E5FF" strokeWidth="1.5" fill="none" />
        <line x1="6" y1="24" x2="26" y2="24" stroke="#00E5FF" strokeWidth="1.5" />
        <line x1="16" y1="12" x2="16" y2="20" stroke="#FF2A55" strokeWidth="1.5" />
        <circle cx="16" cy="10" r="2" fill="#FF2A55" opacity="0.6" />
      </svg>
    ),
    name: '温控模块',
    param: '室温～100°C，精度 ±0.1°C',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <line x1="14" y1="4" x2="14" y2="28" stroke="#00E5FF" strokeWidth="1.5" />
        <line x1="18" y1="4" x2="18" y2="28" stroke="#00E5FF" strokeWidth="1.5" />
        <path d="M10 16h12" stroke="#00E5FF" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
      </svg>
    ),
    name: '精密单缝',
    param: '双刀片可调，与金属棒直接耦合',
  },
]

const aiSteps = [
  '上传图像',
  '灰度增强',
  '梯度方差选行',
  '高斯亚像素拟合',
  '输出 CTE + 不确定度',
]

export default function Product() {
  return (
    <section id="product" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-16"
        >
          产品介绍
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: hardware modules */}
          <div>
            <h3 className="font-heading font-semibold text-text-secondary text-sm uppercase tracking-wider mb-6">
              硬件模块
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {modules.map((m, i) => (
                <motion.div
                  key={m.name}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="card p-5"
                >
                  <div className="mb-3">{m.icon}</div>
                  <h4 className="font-heading font-semibold text-text-primary text-base">
                    {m.name}
                  </h4>
                  <p className="mt-1 font-mono text-sm text-accent-cyan">{m.param}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: AI pipeline timeline */}
          <div>
            <h3 className="font-heading font-semibold text-text-secondary text-sm uppercase tracking-wider mb-6">
              AI 算法流程
            </h3>
            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-3 top-2 bottom-2 w-px bg-accent-cyan/30" />
              {aiSteps.map((step, i) => (
                <motion.div
                  key={step}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative mb-8 last:mb-0"
                >
                  {/* Dot */}
                  <div className="absolute -left-5 top-1 w-3 h-3 rounded-full border-2 border-accent-cyan bg-bg-primary" />
                  {/* Step content */}
                  <div className="card p-4">
                    <span className="font-mono text-accent-cyan text-sm mr-2">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base text-text-primary">{step}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
