import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
}

const members = [
  { initials: 'A', role: '实验原理', color: 'bg-accent-cyan/20 text-accent-cyan' },
  { initials: 'B', role: '硬件工程', color: 'bg-accent-cyan/20 text-accent-cyan' },
  { initials: 'C', role: '数据科学', color: 'bg-accent-red/20 text-accent-red' },
  { initials: 'D', role: '产品运营', color: 'bg-accent-red/20 text-accent-red' },
  { initials: 'E', role: '实验媒体', color: 'bg-accent-cyan/20 text-accent-cyan' },
]

export default function Team() {
  return (
    <section id="team" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-4"
        >
          五人团队，一年磨一剑
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-text-secondary text-sm mb-14"
        >
          从原理验证到工程落地
        </motion.p>

        {/* Member cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mb-12">
          {members.map((m, i) => (
            <motion.div
              key={m.initials}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="card p-5 text-center"
            >
              {/* Avatar placeholder */}
              <div
                className={`w-20 h-20 rounded-full ${m.color} flex items-center justify-center mx-auto mb-3 font-heading font-bold text-2xl`}
              >
                {m.initials}
              </div>
              <div className="text-xs text-text-secondary">成员 {i + 1}</div>
              <div className="mt-1 text-sm font-medium text-text-primary">
                {m.role}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisor + Competition */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-6 text-center"
        >
          <p className="text-text-secondary text-sm mb-3">
            指导老师：<span className="text-text-primary">尹跃</span>
          </p>
          <div className="inline-block border border-accent-cyan/30 rounded-card px-4 py-2">
            <span className="text-xs text-accent-cyan font-mono">
              第十五届「挑战杯」中国全国大学生创业计划竞赛
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
