import { useEffect, useState } from 'react'

const sections = [
  { id: 'hero', num: '01', name: '概览' },
  { id: 'pain-points', num: '02', name: '痛点' },
  { id: 'core-data', num: '03', name: '数据' },
  { id: 'product', num: '04', name: '产品' },
  { id: 'how-it-works', num: '05', name: '原理' },
  { id: 'comparison', num: '06', name: '对比' },
  { id: 'team', num: '07', name: '团队' },
  { id: 'contact', num: '08', name: '联系' },
]

export default function ScrollIndicator() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id)
        if (el && el.offsetTop - 200 <= scrollY) {
          setActive(i)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed left-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-start gap-4">
      {sections.map((s, i) => {
        const isActive = i === active
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`font-mono leading-none transition-all duration-300 ${
              isActive
                ? 'text-accent-cyan text-[13px] font-normal'
                : 'text-white/15 text-[11px] font-light'
            }`}
            style={{ fontWeight: isActive ? 400 : 300 }}
          >
            <span className="mr-1.5">{s.num}</span>
            <span>{s.name}</span>
          </a>
        )
      })}
    </div>
  )
}
