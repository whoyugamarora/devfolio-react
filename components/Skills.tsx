'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '@/lib/data'

const catStyle: Record<string, { color: string; glow: string }> = {
  indigo:  { color: '#818cf8', glow: 'rgba(129,140,248,0.15)' },
  cyan:    { color: '#67e8f9', glow: 'rgba(103,232,249,0.12)' },
  violet:  { color: '#c084fc', glow: 'rgba(192,132,252,0.12)' },
  emerald: { color: '#6ee7b7', glow: 'rgba(110,231,183,0.12)' },
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const show = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="skills" ref={ref} className="py-28 px-6 border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-end justify-between mb-16">
          <motion.p initial={{ opacity: 0, x: -16 }} animate={show ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }} className="section-num">02 — Skills</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display font-black tracking-[-0.04em] text-[#efefef]"
            style={{ fontSize: 'clamp(28px,4.5vw,56px)' }}
          >
            What I work with
          </motion.h2>
        </div>

        {/* Decorative large BG text */}
        <div className="relative">
          <div className="absolute -top-8 -left-4 select-none pointer-events-none"
            style={{ fontSize: 'clamp(80px,12vw,140px)', fontFamily: 'Syne, sans-serif', fontWeight: 900, color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.03)' }}>
            STACK
          </div>

          <div className="relative space-y-0">
            {skills.map((cat, ci) => {
              const cs = catStyle[cat.color]
              const isActive = active === cat.category
              return (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={show ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: ci * 0.1 }}
                  onMouseEnter={() => setActive(cat.category)}
                  onMouseLeave={() => setActive(null)}
                  className="group border-b border-[rgba(255,255,255,0.06)] py-6 grid sm:grid-cols-[180px_1fr] gap-6 items-center cursor-default transition-all duration-300 rounded-sm px-3"
                  style={{ background: isActive ? `rgba(255,255,255,0.018)` : 'transparent' }}
                >
                  <p className="text-xs font-bold tracking-widest uppercase transition-colors duration-200"
                    style={{ color: isActive ? cs.color : '#2a2a2a' }}>
                    {cat.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map(skill => (
                      <span
                        key={skill.name}
                        className="pill transition-all duration-200"
                        style={isActive ? { borderColor: cs.color + '44', color: '#efefef', boxShadow: `0 0 10px ${cs.glow}` } : {}}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
