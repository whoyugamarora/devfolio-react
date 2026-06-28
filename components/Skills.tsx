'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '@/lib/data'

const catStyle: Record<string, { color: string; glow: string; bg: string }> = {
  indigo:  { color: '#818cf8', glow: 'rgba(129,140,248,0.12)', bg: 'rgba(129,140,248,0.04)' },
  cyan:    { color: '#67e8f9', glow: 'rgba(103,232,249,0.10)', bg: 'rgba(103,232,249,0.04)' },
  violet:  { color: '#c084fc', glow: 'rgba(192,132,252,0.10)', bg: 'rgba(192,132,252,0.04)' },
  emerald: { color: '#6ee7b7', glow: 'rgba(110,231,183,0.10)', bg: 'rgba(110,231,183,0.04)' },
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const show = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="skills" ref={ref} className="py-28 px-6 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-end justify-between mb-16">
          <motion.p initial={{ opacity: 0, x: -16 }} animate={show ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }} className="section-num">02 — Skills</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display font-black tracking-[-0.04em] text-[var(--text)]"
            style={{ fontSize: 'clamp(28px,4.5vw,56px)' }}
          >
            What I work with
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {skills.map((cat, ci) => {
            const cs = catStyle[cat.color]
            const isActive = active === cat.category
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                animate={show ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: ci * 0.1 }}
                onMouseEnter={() => setActive(cat.category)}
                onMouseLeave={() => setActive(null)}
                className="relative rounded-2xl border overflow-hidden p-6 cursor-default transition-all duration-300"
                style={{
                  borderColor: isActive ? cs.color + '44' : 'var(--border)',
                  background: isActive ? cs.bg : 'var(--surface)',
                  boxShadow: isActive ? `0 0 40px ${cs.glow}` : 'none',
                }}
              >
                <div
                  aria-hidden="true"
                  className="absolute top-0 inset-x-0 h-[2px] transition-opacity duration-300"
                  style={{ background: cs.color, opacity: isActive ? 1 : 0.22 }}
                />

                <div
                  aria-hidden="true"
                  className="absolute bottom-3 right-4 font-display font-black leading-none pointer-events-none select-none transition-opacity duration-300"
                  style={{ fontSize: 'clamp(56px, 8vw, 88px)', color: cs.color, opacity: isActive ? 0.07 : 0.03 }}
                >
                  {String(ci + 1).padStart(2, '0')}
                </div>

                <div className="flex items-center justify-between mb-5">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-200"
                    style={{ color: cs.color }}>
                    {cat.category}
                  </p>
                  <span className="text-[10px] font-bold tracking-widest text-[var(--text-4)] tabular-nums">
                    {String(cat.items.length).padStart(2, '0')} skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill, si) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.88 }}
                      animate={show ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.25, delay: ci * 0.1 + si * 0.05 }}
                      className="pill text-[12px] transition-all duration-200"
                      style={isActive ? {
                        borderColor: cs.color + '55',
                        color: 'var(--text)',
                        boxShadow: `0 0 10px ${cs.glow}`,
                      } : {}}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
