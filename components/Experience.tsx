'use client'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { experience, type ExperienceEntry } from '@/lib/data'

const dotCol: Record<string, string> = { indigo:'#818cf8', cyan:'#67e8f9', violet:'#c084fc' }

function Entry({ e, i, show }: { e: ExperienceEntry; i: number; show: boolean }) {
  const [open, setOpen] = useState(i === 0)
  const c = dotCol[e.color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }} animate={show ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.12 }}
      className="border-b border-[var(--border)] last:border-0"
    >
      <button onClick={() => setOpen(!open)}
        className="w-full py-7 flex items-center justify-between gap-4 group text-left">
        <div className="flex items-center gap-6">
          <span className="font-display font-black text-[40px] leading-none shrink-0 transition-colors duration-300"
            style={{ color: open ? c : 'var(--text-5)' }}>
            0{i + 1}
          </span>
          <div>
            <p className="font-display font-bold text-xl text-[var(--text-3)] group-hover:text-[var(--text)] transition-colors duration-200 mb-0.5">
              {e.role}
            </p>
            <div className="flex items-center gap-2 text-[var(--text-3)] text-xs">
              <span>{e.company}</span>
              <span>·</span>
              <span>{e.duration}</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1"><MapPin className="w-2.5 h-2.5" />{e.location}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="hidden sm:inline pill text-[10px]">{e.type}</span>
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.22 }}
            className="w-7 h-7 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-3)] group-hover:text-[var(--text)] group-hover:border-accent/50 transition-all"
          >
            <span className="text-base leading-none">+</span>
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-[72px] pr-4">
              <div className="relative pl-4 border-l-2" style={{ borderColor: c + '40' }}>
                <ul className="space-y-3">
                  {e.bullets.map((b, bi) => (
                    <motion.li
                      key={bi}
                      initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: bi * 0.06 }}
                      className="flex gap-3 text-[var(--text-2)] text-sm leading-relaxed"
                    >
                      <span className="mt-[8px] w-1.5 h-1.5 rounded-full shrink-0" style={{ background: c + '80' }} />
                      {b}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const show = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} className="py-28 px-6 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-end justify-between mb-16">
          <motion.p initial={{ opacity: 0, x: -16 }} animate={show ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }} className="section-num">04 — Work</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display font-black tracking-[-0.04em] text-[var(--text)]"
            style={{ fontSize: 'clamp(28px,4.5vw,56px)' }}
          >
            Where I&apos;ve worked
          </motion.h2>
        </div>

        <div className="max-w-4xl">
          {experience.map((e, i) => <Entry key={e.company} e={e} i={i} show={show} />)}
        </div>
      </div>
    </section>
  )
}
