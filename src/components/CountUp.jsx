import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function CountUp({
  end,
  duration = 2,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const startTime = performance.now()
    const endVal = parseFloat(end)

    function tick(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(eased * endVal)
      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        setValue(endVal)
      }
    }

    requestAnimationFrame(tick)
  }, [isInView, end, duration])

  const display = value.toFixed(decimals)

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
