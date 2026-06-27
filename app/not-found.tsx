'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  const [hovered, setHovered] = useState(false)

  return (
    <main className="relative min-h-screen bg-[#06060c] flex flex-col items-center justify-center px-6 overflow-hidden">

      {/* Atmosphere */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0">
        <div style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(140px)', width: 700, height: 700, top: -200, left: -200, background: 'radial-gradient(circle, rgba(120,60,220,0.1), transparent 70%)' }} />
        <div style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(120px)', width: 500, height: 500, bottom: -150, right: -100, background: 'radial-gradient(circle, rgba(200,255,59,0.06), transparent 70%)' }} />
      </div>

      <div className="relative z-10 text-center select-none">

        {/* 404 — same outline/fill mechanic as ARORA */}
        <div
          className="overflow-hidden mb-2 cursor-default"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <motion.h1
            className="font-display font-black leading-none block"
            style={{
              fontSize: 'clamp(120px, 30vw, 320px)',
              letterSpacing: '-0.04em',
              color: hovered ? '#c8ff3b' : 'transparent',
              WebkitTextStroke: `clamp(1px, 0.2vw, 3px) ${hovered ? 'transparent' : 'rgba(200,255,59,0.45)'}`,
              transition: 'color 0.35s ease, -webkit-text-stroke-color 0.35s ease',
            }}
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            404
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5 }}
          className="font-display font-black text-[#efefef] tracking-tight mb-3"
          style={{ fontSize: 'clamp(22px, 4vw, 36px)' }}
        >
          Page not found.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-[#555] text-sm mb-10 font-mono tracking-wide"
        >
          This endpoint doesn&apos;t exist in our records.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.88 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-[#06060c] font-semibold text-sm hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
