import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
}

const columns = [
  {
    name: '传统千分表',
    highlight: false,
    rows: {
      method: '机械接触式',
      error: '1.30%～3.98%',
      price: '¥3,000',
      priceSize: 'text-lg',
      data: '人工读数记录',
      auto: '完全人工',
    },
  },
  {
    name: '光析微胀',
    highlight: true,
    rows: {
      method: '光学衍射 + AI',
      error: '< 0.4%',
      price: '¥30,000',
      priceSize: 'text-2xl',
      data: 'AI 自动解算',
      auto: '全自动',
    },
  },
  {
    name: '进口高端膨胀仪',
    highlight: false,
    rows: {
      method: '激光干涉 / 推杆式',
      error: '< 0.1%',
      price: '¥750,000',
      priceSize: 'text-3xl',
      data: '专用软件',
      auto: '半自动',
    },
  },
]

const rowLabels = [
  { key: 'method', label: '测量方式' },
  { key: 'error', label: '相对误差' },
  { key: 'price', label: '整机价格' },
  { key: 'data', label: '数据处理' },
  { key: 'auto', label: '自动化' },
]

export default function Comparison() {
  return (
    <section id="comparison" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-4"
        >
          高精度，不再是富人的专利
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-text-secondary text-sm mb-14"
        >
          三种方案全面对比
        </motion.p>

        {/* Comparison cards - desktop */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {columns.map((col, ci) => (
            <motion.div
              key={col.name}
              custom={ci}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`card p-6 ${
                col.highlight
                  ? 'border-accent-cyan/50 ring-1 ring-accent-cyan/20 relative'
                  : ''
              }`}
            >
              {col.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-cyan text-bg-primary text-xs font-bold px-3 py-1 rounded-card">
                  推荐
                </div>
              )}
              <h3
                className={`font-heading font-bold text-lg mb-6 text-center ${
                  col.highlight ? 'text-accent-cyan' : 'text-text-primary'
                }`}
              >
                {col.name}
              </h3>

              {rowLabels.map((row) => (
                <div key={row.key} className="mb-4">
                  <div className="text-xs text-text-secondary mb-1">
                    {row.label}
                  </div>
                  {row.key === 'price' ? (
                    <div
                      className={`font-mono font-bold ${col.rows.priceSize} ${
                        col.highlight ? 'text-accent-cyan' : 'text-text-primary'
                      }`}
                    >
                      {col.rows[row.key]}
                    </div>
                  ) : (
                    <div
                      className={`text-sm font-medium ${
                        col.highlight && row.key === 'error'
                          ? 'text-accent-cyan'
                          : 'text-text-primary'
                      }`}
                    >
                      {col.rows[row.key]}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Mobile: scrollable */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x">
          {columns.map((col, ci) => (
            <motion.div
              key={col.name}
              custom={ci}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`card p-5 min-w-[260px] snap-center flex-shrink-0 ${
                col.highlight
                  ? 'border-accent-cyan/50 ring-1 ring-accent-cyan/20 relative'
                  : ''
              }`}
            >
              {col.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-cyan text-bg-primary text-xs font-bold px-3 py-1 rounded-card">
                  推荐
                </div>
              )}
              <h3
                className={`font-heading font-bold text-base mb-5 text-center ${
                  col.highlight ? 'text-accent-cyan' : 'text-text-primary'
                }`}
              >
                {col.name}
              </h3>
              {rowLabels.map((row) => (
                <div key={row.key} className="mb-3">
                  <div className="text-xs text-text-secondary mb-1">{row.label}</div>
                  {row.key === 'price' ? (
                    <div
                      className={`font-mono font-bold ${col.rows.priceSize} ${
                        col.highlight ? 'text-accent-cyan' : 'text-text-primary'
                      }`}
                    >
                      {col.rows[row.key]}
                    </div>
                  ) : (
                    <div className="text-sm text-text-primary">{col.rows[row.key]}</div>
                  )}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
