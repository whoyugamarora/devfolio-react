'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'
import { education, deansList } from '@/lib/data'

export default function Education() {
  const ref = useRef<HTMLDivElement>(null)
  const show = useInView(ref, { once: true, margin: '-80px' })
  const v = (delay = 0) => ({
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay } },
  })

  return (
    <section id="education" ref={ref} className="py-28 px-6 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-end justify-between mb-16">
          <motion.p
            initial={{ opacity: 0, x: -16 }} animate={show ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-num"
          >
            05 — Education
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display font-black tracking-[-0.04em] text-[var(--text)]"
            style={{ fontSize: 'clamp(28px,4.5vw,56px)' }}
          >
            Where I studied
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-14 xl:gap-20 items-start">

          <div>
            <motion.div variants={v(0.05)} initial="hidden" animate={show ? 'visible' : 'hidden'} className="mb-10">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-[var(--accent-text)]" />
                </div>
                <div>
                  <h3 className="font-display font-black text-[22px] text-[var(--text)] leading-tight mb-1">
                    {education.degree}
                  </h3>
                  <p className="text-[var(--text-2)] text-sm mb-2">{education.institution}</p>
                  <div className="flex flex-wrap items-center gap-3 text-[var(--text-3)] text-xs">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />{education.duration}
                    </span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" />{education.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={v(0.12)} initial="hidden" animate={show ? 'visible' : 'hidden'}>
              <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[var(--text-3)] mb-4">
                Relevant Coursework
              </p>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {education.courses.map((course, i) => (
                  <motion.div
                    key={course}
                    initial={{ opacity: 0, x: -8 }}
                    animate={show ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.18 + i * 0.05 }}
                    className="flex items-center gap-2.5 text-sm text-[var(--text-2)]"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50 shrink-0" />
                    {course}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={v(0.15)} initial="hidden" animate={show ? 'visible' : 'hidden'}
            className="flex flex-col gap-4"
          >
            <div className="card p-5" style={{ borderLeftWidth: 2, borderLeftColor: 'var(--accent)' }}>
              <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[var(--accent-text)] mb-2">
                Academic Excellence
              </p>
              <p className="font-display font-bold text-lg text-[var(--text)] mb-3">
                Dean&apos;s List — 6 Semesters
              </p>
              <div className="flex flex-wrap gap-1.5">
                {deansList.map(e => e.semesters.map(s => (
                  <span key={`${e.year}-${s}`} className="pill text-[10px]">{s} {e.year}</span>
                )))}
              </div>
            </div>

            <div className="card p-5">
              <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[var(--text-3)] mb-4">
                Skills Gained
              </p>
              <div className="flex flex-col gap-2.5">
                {education.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: 8 }}
                    animate={show ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.25 + i * 0.05 }}
                    className="flex items-center gap-2.5 text-sm text-[var(--text-2)]"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/30 shrink-0" />
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
