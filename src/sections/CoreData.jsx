import { motion } from 'framer-motion'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import CountUp from '../components/CountUp'

const errorData = [
  { metal: '铁', traditional: 3.05, ai: 0.37 },
  { metal: '铜', traditional: 3.98, ai: 0.29 },
  { metal: '铝', traditional: 1.30, ai: 0.35 },
]

const boosts = [
  { metal: '铁', factor: 8.2 },
  { metal: '铜', factor: 8.6 },
  { metal: '铝', factor: 3.6 },
]

const uncertainties = [
  { metal: '铁', value: '±0.03' },
  { metal: '铜', value: '±0.04' },
  { metal: '铝', value: '±0.05' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
}

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload) return null
  return (
    <div className="card p-3 text-xs">
      <p className="font-semibold text-text-primary mb-1">{label}</p>
      {payload.map((p) => (
        <p key={p.dataKey} style={{ color: p.color }}>
          {p.name}: {p.value}%
        </p>
      ))}
    </div>
  )
}

export default function CoreData() {
  return (
    <section id="core-data" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-4"
        >
          用数据说话
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-text-secondary mb-14 text-[15px]"
        >
          相对误差对比（%）· 传统千分表法 vs AI衍射法
        </motion.p>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-6 mb-6"
        >
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={errorData} barGap={8}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(0,229,255,0.08)"
                vertical={false}
              />
              <XAxis
                dataKey="metal"
                tick={{ fill: '#94A3B8', fontSize: 13 }}
                axisLine={{ stroke: 'rgba(0,229,255,0.15)' }}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: '#94A3B8', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                unit="%"
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,229,255,0.05)' }} />
              <Legend
                wrapperStyle={{ fontSize: 13, paddingTop: 12 }}
                iconType="square"
              />
              <Bar
                dataKey="traditional"
                name="传统千分表法"
                fill="rgba(255,42,85,0.45)"
                stroke="#FF2A55"
                strokeWidth={1}
                radius={[2, 2, 0, 0]}
              />
              <Bar
                dataKey="ai"
                name="AI衍射法"
                fill="rgba(0,229,255,0.6)"
                stroke="#00E5FF"
                strokeWidth={1}
                radius={[2, 2, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Boost cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {boosts.map((b, i) => (
            <motion.div
              key={b.metal}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="text-text-secondary text-[15px] mb-2">
                {b.metal} · 精度提升
              </div>
              <div className="font-mono text-4xl font-bold text-accent-cyan">
                <CountUp end={b.factor} decimals={1} suffix="×" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Uncertainty cards */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-6"
        >
          <h3 className="font-heading font-semibold text-[15px] text-text-secondary mb-4">
            不确定度结果&nbsp;
            <span className="font-mono text-accent-cyan">
              (10⁻⁶/°C)
            </span>
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {uncertainties.map((u) => (
              <div key={u.metal} className="text-center">
                <div className="text-text-secondary text-[13px] mb-1">{u.metal}</div>
                <div className="font-mono text-xl text-accent-cyan font-bold">
                  {u.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
