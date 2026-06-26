'use client'
import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { credlyBadges, deansList } from '@/lib/data'

export default function CertificationsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const show = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (document.getElementById('credly-script')) return
    const s = document.createElement('script')
    s.id = 'credly-script'; s.src = 'https://cdn.credly.com/assets/utilities/embed.js'; s.async = true
    document.body.appendChild(s)
  }, [])

  return (
    <section id="certifications" ref={ref} className="py-28 px-6 border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-end justify-between mb-16">
          <motion.p initial={{ opacity: 0, x: -16 }} animate={show ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }} className="section-num">05 — Credentials</motion.p>
          <div className="flex items-end gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 16 }} animate={show ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display font-black tracking-[-0.04em] text-[#efefef]"
              style={{ fontSize: 'clamp(28px,4.5vw,56px)' }}
            >
              Certifications
            </motion.h2>
            <motion.div initial={{ opacity: 0 }} animate={show ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
              <Link href="/certifications" className="text-sm text-[#2a2a2a] hover:text-accent transition-colors pb-2">
                View all →
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 mb-8"
        >
          {credlyBadges.slice(0, 8).map((id, i) => (
            <motion.div key={id}
              initial={{ opacity: 0, scale: 0.88 }} animate={show ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
              className="card aspect-square flex items-center justify-center p-2 hover:border-accent/30 transition-all">
              <div data-iframe-width="120" data-iframe-height="270"
                data-share-badge-id={id} data-share-badge-host="https://www.credly.com" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="card p-6" style={{ borderLeftWidth: 2, borderLeftColor: '#c8ff3b' }}
        >
          <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-accent mb-2">Academic Excellence</p>
          <p className="font-display font-bold text-lg text-[#efefef] mb-1">
            Dean&apos;s List — University of the Fraser Valley
          </p>
          <p className="text-[#2a2a2a] text-sm mb-4">Six consecutive recognitions for academic excellence</p>
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
