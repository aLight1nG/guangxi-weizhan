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

const advantages = [
  {
    title: '高精度',
    desc: '光学衍射放大 + 亚像素算法，相对误差 < 0.4%，精度提升最高 8.6 倍',
  },
  {
    title: '低成本',
    desc: '整机 BOM 成本约 ¥4,450，仅为进口设备的 5%',
  },
  {
    title: '全自动',
    desc: 'AI 自动识别衍射条纹并解算 CTE，无需人工读数，单次测量 < 10 分钟',
  },
  {
    title: '易部署',
    desc: '模块化设计，即插即用，适配现有高校物理实验室环境',
  },
  {
    title: '可溯源',
    desc: '全流程数据自动记录，实验结果可追溯、可复现',
  },
]

export default function Product() {
  return (
    <section id="product" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-16"
        >
          产品介绍
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-14 items-stretch">
          {/* Left: hardware modules — 2×2 grid, stretch to match right column */}
          <div className="flex flex-col">
            <h3 className="font-heading font-semibold text-text-secondary text-[15px] uppercase tracking-wider mb-6">
              硬件模块
            </h3>
            <div className="grid grid-cols-2 gap-5 flex-1">
              {modules.map((m, i) => (
                <motion.div
                  key={m.name}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="card p-6 flex flex-col justify-center"
                >
                  <div className="mb-3">{m.icon}</div>
                  <h4 className="font-heading font-semibold text-text-primary text-[17px]">
                    {m.name}
                  </h4>
                  <p className="mt-2 font-mono text-[15px] text-accent-cyan leading-relaxed">{m.param}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: product advantages — flex column to fill height */}
          <div className="flex flex-col">
            <h3 className="font-heading font-semibold text-text-secondary text-[15px] uppercase tracking-wider mb-6">
              核心优势
            </h3>
            <div className="flex flex-col gap-4 flex-1">
              {advantages.map((a, i) => (
                <motion.div
                  key={a.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="card p-6 border-accent-cyan/20 hover:border-accent-cyan/50 flex-1 flex flex-col justify-center"
                >
                  <h4 className="font-heading font-semibold text-accent-cyan text-[17px]">
                    {a.title}
                  </h4>
                  <p className="mt-2 text-[15px] text-text-secondary leading-relaxed">
                    {a.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
