import { useEffect, useState } from 'react'

const sections = [
  { id: 'hero', label: '00' },
  { id: 'pain-points', label: '01' },
  { id: 'core-data', label: '02' },
  { id: 'product', label: '03' },
  { id: 'how-it-works', label: '04' },
  { id: 'comparison', label: '05' },
  { id: 'team', label: '06' },
  { id: 'contact', label: '07' },
]

export default function ScrollIndicator() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? scrollY / docHeight : 0)

      // Find active section
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
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-1">
      {/* Track */}
      <div className="relative w-px h-48 bg-border-cyan">
        {/* Progress fill */}
        <div
          className="absolute top-0 left-0 w-full bg-accent-cyan transition-all duration-200"
          style={{ height: `${progress * 100}%` }}
        />
      </div>

      {/* Tick marks */}
      <div className="mt-3 flex flex-col gap-3">
        {sections.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`font-mono text-[10px] leading-none transition-colors duration-200 ${
              i === active ? 'text-accent-cyan' : 'text-gray-700'
            }`}
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  )
}
