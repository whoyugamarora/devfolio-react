'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { certifications, deansList } from '@/lib/data'

const colorMap: Record<string, { color: string; glow: string; bg: string }> = {
  indigo:  { color: '#818cf8', glow: 'rgba(129,140,248,0.10)', bg: 'rgba(129,140,248,0.04)' },
  cyan:    { color: '#67e8f9', glow: 'rgba(103,232,249,0.08)', bg: 'rgba(103,232,249,0.04)' },
  violet:  { color: '#c084fc', glow: 'rgba(192,132,252,0.08)', bg: 'rgba(192,132,252,0.04)' },
  emerald: { color: '#6ee7b7', glow: 'rgba(110,231,183,0.08)', bg: 'rgba(110,231,183,0.04)' },
  amber:   { color: '#fbbf24', glow: 'rgba(251,191,36,0.08)',  bg: 'rgba(251,191,36,0.04)'  },
}

export default function CertificationsPage() {
  const ref = useRef<HTMLDivElement>(null)
  const show = useInView(ref, { once: true, margin: '-40px' })

  return (
    <main className="relative min-h-screen bg-[#06060c] text-[#efefef] px-6 py-12">

      {/* Reuse aurora blobs */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div style={{ position:'absolute', borderRadius:'50%', filter:'blur(140px)', width:800, height:800, top:-250, left:-250, background:'radial-gradient(circle, rgba(120,60,220,0.1), transparent 70%)' }} />
        <div style={{ position:'absolute', borderRadius:'50%', filter:'blur(120px)', width:600, height:600, bottom:-150, right:-100, background:'radial-gradient(circle, rgba(200,255,59,0.06), transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>

        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Link href="/" className="inline-flex items-center gap-2 text-[#555] hover:text-[#efefef] transition-colors text-sm mb-14 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Header */}
        <div className="mb-16">
          <motion.p initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}
            className="section-num mb-4">Credentials</motion.p>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }} animate={{ y: '0%' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-display font-black tracking-[-0.04em] leading-none text-[#efefef]"
              style={{ fontSize: 'clamp(48px, 9vw, 110px)' }}
            >
              All credentials.
            </motion.h1>
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="text-[#555] mt-4 text-sm">
            {certifications.length} professional certifications · verified on Credly
          </motion.p>
        </div>

        {/* Cert grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {certifications.map((cert, i) => {
            const cs = colorMap[cert.color]
            return (
              <motion.a
                key={cert.badgeId}
                href={`https://www.credly.com/badges/${cert.badgeId}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 18 }}
                animate={show ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="group relative rounded-2xl border border-[rgba(255,255,255,0.07)] p-6 overflow-hidden transition-all duration-300 cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.018)' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = cs.color + '44'
                  ;(e.currentTarget as HTMLElement).style.background = cs.bg
                  ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${cs.glow}`
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = ''
                  ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.018)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = ''
                }}
              >
                {/* Top accent */}
                <div className="absolute top-0 inset-x-0 h-[2px] transition-opacity duration-300 opacity-25 group-hover:opacity-100"
                  style={{ background: cs.color }} />

                {/* Index watermark */}
                <div className="absolute bottom-3 right-4 font-display font-black leading-none select-none"
                  style={{ fontSize: '64px', color: cs.color, opacity: 0.04 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                <p className="text-[#efefef] font-semibold text-[15px] leading-snug mb-4 pr-8">{cert.name}</p>
                <div className="flex items-center justify-between">
                  <p className="text-[12px] font-semibold" style={{ color: cs.color }}>{cert.issuer}</p>
                  <p className="text-[11px] text-[#555]">{cert.date}</p>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Dean's List */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl border border-[rgba(200,255,59,0.2)] p-8"
          style={{ borderLeftWidth: 3, borderLeftColor: '#c8ff3b', background: 'rgba(200,255,59,0.025)' }}
        >
          <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-accent mb-3">Academic Excellence</p>
          <p className="font-display font-bold text-2xl text-[#efefef] mb-1">Dean&apos;s List</p>
          <p className="text-[#888] text-sm mb-6">University of the Fraser Valley · Six consecutive semesters</p>
          <div className="flex flex-wrap gap-2">
            {deansList.map(e => e.semesters.map(s => (
              <span key={`${e.year}-${s}`} className="pill">{s} {e.year}</span>
            )))}
          </div>
        </motion.div>

      </div>
    </main>
  )
}
