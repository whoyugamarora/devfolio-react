'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { certifications, deansList } from '@/lib/data'

const colorMap: Record<string, { color: string; glow: string }> = {
  indigo:  { color: '#818cf8', glow: 'rgba(129,140,248,0.08)' },
  cyan:    { color: '#67e8f9', glow: 'rgba(103,232,249,0.08)' },
  violet:  { color: '#c084fc', glow: 'rgba(192,132,252,0.08)' },
  emerald: { color: '#6ee7b7', glow: 'rgba(110,231,183,0.08)' },
  amber:   { color: '#fbbf24', glow: 'rgba(251,191,36,0.08)'  },
}

export default function CertificationsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const show = useInView(ref, { once: true, margin: '-80px' })
  const preview = certifications.slice(0, 8)

  return (
    <section id="certifications" ref={ref} className="py-28 px-6 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-end justify-between mb-16">
          <motion.p initial={{ opacity: 0, x: -16 }} animate={show ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }} className="section-num">06 — Credentials</motion.p>
          <div className="flex items-end gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 16 }} animate={show ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display font-black tracking-[-0.04em] text-[var(--text)]"
              style={{ fontSize: 'clamp(28px,4.5vw,56px)' }}
            >
              Certifications
            </motion.h2>
            <motion.div initial={{ opacity: 0 }} animate={show ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
              <Link href="/certifications" className="text-sm text-[var(--text-3)] hover:text-accent transition-colors pb-2">
                View all →
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
          {preview.map((cert, i) => {
            const cs = colorMap[cert.color]
            return (
              <motion.a
                key={cert.badgeId}
                href={`https://www.credly.com/badges/${cert.badgeId}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 14 }}
                animate={show ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.38, delay: 0.1 + i * 0.05 }}
                className="group relative rounded-xl border border-[var(--border)] p-4 overflow-hidden transition-all duration-300 hover:border-[var(--border-2)] cursor-pointer"
                style={{ background: 'var(--surface)' }}
              >
                <div className="absolute top-0 inset-x-0 h-[2px] transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: cs.color, opacity: 0.3 }} />

                <p className="text-[var(--text)] font-semibold text-[13px] leading-snug mb-3 pr-2">
                  {cert.name}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-medium" style={{ color: cs.color }}>{cert.issuer}</p>
                  <p className="text-[10px] text-[var(--text-4)]">{cert.date}</p>
                </div>
              </motion.a>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.48 }}
          className="card p-6" style={{ borderLeftWidth: 2, borderLeftColor: '#c8ff3b' }}
        >
          <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-accent mb-2">Academic Excellence</p>
          <p className="font-display font-bold text-lg text-[var(--text)] mb-1">
            Dean&apos;s List — University of the Fraser Valley
          </p>
          <p className="text-[var(--text-3)] text-sm mb-4">Six consecutive recognitions for academic excellence</p>
          <div className="flex flex-wrap gap-2">
            {deansList.map(e => e.semesters.map(s => (
              <span key={`${e.year}-${s}`} className="pill">{s} {e.year}</span>
            )))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
