'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { personalInfo, stats, deansList } from '@/lib/data'

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.ceil(to / 40)
    const id = setInterval(() => {
      start += step
      if (start >= to) { setVal(to); clearInterval(id) }
      else setVal(start)
    }, 30)
    return () => clearInterval(id)
  }, [inView, to])
  return <span ref={ref}>{val}{suffix}</span>
}

const statConfig = [
  { value: 6, suffix: '×', label: "Dean's List", sub: 'UFV Honors' },
  { value: 3, suffix: '+', label: 'Yrs Experience', sub: 'IT & Dev' },
  { value: 12, suffix: '+', label: 'Certifications', sub: 'Cloud & Security' },
  { value: 3, suffix: '+', label: 'Projects Built', sub: 'Production' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const show = useInView(ref, { once: true, margin: '-80px' })
  const v = (delay = 0) => ({ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } } })

  return (
    <section id="about" ref={ref} className="py-28 px-6 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto">

        <motion.div variants={v()} initial="hidden" animate={show ? 'visible' : 'hidden'}
          className="flex items-center justify-between mb-16">
          <p className="section-num">01 — About</p>
          <span className="text-[var(--text-4)] text-xs font-medium">{personalInfo.location}</span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-14 xl:gap-20 items-start">
          {/* Left */}
          <div>
            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: '60%', opacity: 0 }} animate={show ? { y: '0%', opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-display font-black tracking-[-0.04em] leading-[0.9] text-[var(--text)]"
                style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
              >
                Building things<br />
                <span className="text-accent">that matter</span>
              </motion.h2>
            </div>

            <motion.p variants={v(0.2)} initial="hidden" animate={show ? 'visible' : 'hidden'}
              className="text-[var(--text-2)] text-base leading-relaxed max-w-lg mb-10">
              {personalInfo.bio}
            </motion.p>

            <motion.div variants={v(0.28)} initial="hidden" animate={show ? 'visible' : 'hidden'}
              className="grid grid-cols-2 sm:grid-cols-4 border border-[var(--border)] rounded-2xl overflow-hidden mb-10">
              {statConfig.map((s, i) => (
                <div key={s.label}
                  className={`p-5 bg-[var(--surface)] ${i > 0 ? 'border-l border-[var(--border)]' : ''}`}>
                  <p className="font-display font-black text-3xl text-accent leading-none mb-1">
                    <Counter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-[var(--text-4)] text-[11px] font-medium leading-tight">{s.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={v(0.35)} initial="hidden" animate={show ? 'visible' : 'hidden'}
              className="flex flex-wrap gap-2 mb-8">
              {['Cybersecurity', 'Cloud Infrastructure', 'IT Operations', 'Full-Stack Dev'].map(t => (
                <span key={t} className="pill">{t}</span>
              ))}
            </motion.div>

            <motion.div variants={v(0.42)} initial="hidden" animate={show ? 'visible' : 'hidden'}
              className="flex items-center gap-3 text-sm text-[var(--text-3)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-emerald-400 font-medium">Available for new opportunities</span>
              <span>·</span>
              <span>Open to remote worldwide</span>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div variants={v(0.15)} initial="hidden" animate={show ? 'visible' : 'hidden'}
            className="flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] group transition-all duration-500 hover:border-[rgba(200,255,59,0.2)] hover:shadow-[0_0_60px_rgba(200,255,59,0.07)]"
              style={{ aspectRatio: '3/4' }}>
              <Image src="/images/yugam.webp" alt="Yugam Arora" fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="380px" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06060c]/85 via-[#06060c]/10 to-transparent" />
              <div aria-hidden="true"
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.18) 2px, rgba(0,0,0,0.18) 3px)' }}
              />
              <div aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(to top, rgba(200,255,59,0.06), transparent)' }}
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="backdrop-blur-md bg-[#06060c]/60 border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 flex justify-between">
                  <div>
                    <p className="text-[9px] text-[#555] uppercase tracking-widest mb-1">Position</p>
                    <p className="text-sm font-semibold text-[#efefef]">{personalInfo.title}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] text-[#555] uppercase tracking-widest mb-1">Education</p>
                    <p className="text-sm font-semibold text-[#efefef]">UFV — BCIS</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-5">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-accent mb-3">Academic Excellence</p>
              <p className="text-sm font-medium text-[var(--text)] mb-3">Dean&apos;s List — 6 Semesters at UFV</p>
              <div className="flex flex-wrap gap-1.5">
                {deansList.map(e => e.semesters.map(s => (
                  <span key={`${e.year}-${s}`} className="pill text-[10px]">{s} {e.year}</span>
                )))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
