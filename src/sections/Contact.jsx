import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
}

const directions = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4v20M4 14h20" stroke="#00E5FF" strokeWidth="1.5" />
        <rect x="8" y="8" width="12" height="12" rx="1" stroke="#00E5FF" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
    title: '高校试用',
    desc: '为高校物理实验室提供设备试用，推动教学创新',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="8" width="20" height="12" rx="2" stroke="#00E5FF" strokeWidth="1.5" />
        <path d="M10 14h8M14 11v6" stroke="#00E5FF" strokeWidth="1" opacity="0.6" />
      </svg>
    ),
    title: '技术授权',
    desc: '光学衍射测量技术与AI算法的授权许可合作',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 22l8-16 8 16" stroke="#00E5FF" strokeWidth="1.5" fill="none" />
        <line x1="9" y1="18" x2="19" y2="18" stroke="#00E5FF" strokeWidth="1" />
      </svg>
    ),
    title: '投资合作',
    desc: '欢迎关注精密测量赛道的投资机构洽谈合作',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="9" stroke="#00E5FF" strokeWidth="1.5" />
        <path d="M14 9v5l3 3" stroke="#00E5FF" strokeWidth="1.5" />
      </svg>
    ),
    title: '学术交流',
    desc: '期待与光学测量、材料科学领域的研究者交流探讨',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-4"
        >
          期待与您共创精密测量的未来
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-text-secondary text-sm mb-14"
        >
          多种合作方式，期待您的联系
        </motion.p>

        {/* Collaboration direction cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mb-12">
          {directions.map((d, i) => (
            <motion.div
              key={d.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="card p-4 sm:p-5 text-center group"
            >
              <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform">
                {d.icon}
              </div>
              <h3 className="font-heading font-semibold text-text-primary text-sm mb-2">
                {d.title}
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                {d.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact info placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-8 text-center"
        >
          <p className="text-text-secondary text-sm">
            联系邮箱：<span className="text-accent-cyan font-mono">2678733087@qq.com</span>
          </p>
          <p className="text-text-secondary text-sm mt-2">
            联系电话：<span className="text-accent-cyan font-mono">18185515702</span>
          </p>
        </motion.div>

        {/* Footer */}
        <div className="mt-20 text-center text-xs text-text-secondary/50">
          <p>光析微胀 · LightDiff CTE &copy; 2025</p>
          <p className="mt-1">第十五届「挑战杯」中国全国大学生创业计划竞赛参赛作品</p>
        </div>
      </div>
    </section>
  )
}
