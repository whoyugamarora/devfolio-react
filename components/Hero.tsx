'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '@/lib/data'

/* ── Typewriter ── */
function Typewriter({ texts }: { texts: string[] }) {
  const [idx, setIdx] = useState(0)
  const [str, setStr] = useState('')
  const [del, setDel] = useState(false)
  useEffect(() => {
    const cur = texts[idx]; let t: ReturnType<typeof setTimeout>
    if (!del && str.length < cur.length)       t = setTimeout(() => setStr(cur.slice(0, str.length + 1)), 70)
    else if (!del && str.length === cur.length) t = setTimeout(() => setDel(true), 2600)
    else if (del && str.length > 0)             t = setTimeout(() => setStr(str.slice(0, -1)), 30)
    else { setDel(false); setIdx(p => (p + 1) % texts.length) }
    return () => clearTimeout(t)
  }, [str, del, idx, texts])
  return <>{str}<span className="text-accent animate-blink">_</span></>
}

/* ── Magnetic CTA ── */
function MagBtn({ href, children, solid, external }: {
  href: string; children: React.ReactNode; solid?: boolean; external?: boolean
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const mx = useMotionValue(0), my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 280, damping: 22 })
  const sy = useSpring(my, { stiffness: 280, damping: 22 })
  const move = (e: React.MouseEvent) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left - r.width / 2) * 0.38)
    my.set((e.clientY - r.top - r.height / 2) * 0.38)
  }
  return (
    <motion.a ref={ref} href={href} style={{ x: sx, y: sy }}
      onMouseMove={move} onMouseLeave={() => { mx.set(0); my.set(0) }}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-xs tracking-wide transition-opacity hover:opacity-80 ${
        solid
          ? 'bg-accent text-[#06060c]'
          : 'border border-[rgba(255,255,255,0.12)] text-[#555] hover:text-[#efefef]'
      }`}
    >
      {children}
    </motion.a>
  )
}

const marqueeItems = [
  'IT Administrator', 'Security Enthusiast', 'Cloud Practitioner',
  "Dean's List × 6", 'Problem Solver', 'Systems Builder', 'Network Admin',
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── Name block — fills viewport ── */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-4 relative z-10">

        {/* Top center: status tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="flex items-center gap-2 mb-6 sm:mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#2a2a2a]">
            Open to Work &nbsp;·&nbsp; {personalInfo.location}
          </span>
        </motion.div>

        {/* YUGAM — solid white */}
        <div className="overflow-hidden w-full text-center leading-none mb-[-0.06em]">
          <motion.h1
            className="font-display font-black text-[#efefef] block leading-none"
            style={{ fontSize: 'clamp(72px, 19vw, 260px)', letterSpacing: '-0.01em' }}
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            {personalInfo.firstName.toUpperCase()}
          </motion.h1>
        </div>

        {/* ARORA. — outline / stroke */}
        <div className="overflow-hidden w-full text-center leading-none">
          <motion.h1
            className="font-display font-black block leading-none"
            style={{
              fontSize: 'clamp(72px, 19vw, 260px)',
              letterSpacing: '-0.01em',
              color: 'transparent',
              WebkitTextStroke: 'clamp(1px, 0.15vw, 2px) rgba(200,255,59,0.55)',
            }}
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.48 }}
          >
            {(personalInfo.lastName + '.').toUpperCase()}
          </motion.h1>
        </div>

        {/* Bottom strip: role + tagline + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="w-full flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mt-10 sm:mt-12"
        >
          {/* Left: description */}
          <div className="max-w-xs">
            <p className="text-[10px] font-medium tracking-[0.16em] uppercase text-[#333] leading-relaxed">
              <Typewriter texts={personalInfo.taglines} />
            </p>
            <p className="text-[11px] text-[#2a2a2a] mt-2 leading-relaxed max-w-[240px]">
              {personalInfo.bio}
            </p>
          </div>

          {/* Right: CTAs + socials + designation */}
          <div className="flex flex-col items-start sm:items-end gap-4">
            <div className="flex items-center gap-2.5">
              <MagBtn href="#projects" solid>
                View Work <ArrowUpRight className="w-3 h-3" />
              </MagBtn>
              <MagBtn href={`mailto:${personalInfo.email}`}>
                Say Hello
              </MagBtn>
            </div>
            <div className="flex items-center gap-1.5">
              {[{ Icon: Github, href: personalInfo.github, label: 'GitHub', ext: true },
                { Icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn', ext: true },
                { Icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', ext: false },
              ].map(({ Icon, href, label, ext }) => (
                <a key={label} href={href}
                  target={ext ? '_blank' : undefined}
                  rel={ext ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="p-2 rounded-lg border border-[rgba(255,255,255,0.06)] text-[#2a2a2a] hover:text-[#efefef] hover:border-[rgba(255,255,255,0.16)] transition-all">
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
            <p className="text-[9px] tracking-[0.2em] uppercase text-[#1e1e1e]">
              Designation 001 &nbsp;·&nbsp; IT Administrator
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Marquee strip ── */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="border-t border-[rgba(255,255,255,0.05)] py-3.5 overflow-hidden bg-[rgba(255,255,255,0.006)] relative z-10"
      >
        <div className="marquee-track select-none">
          {[0, 1].map(k => (
            <span key={k} className="inline-flex items-center">
              {marqueeItems.map(item => (
                <span key={item} className="inline-flex items-center gap-4 px-4 text-[9px] font-medium tracking-[0.18em] uppercase text-[#1e1e1e]">
                  <span className="w-[3px] h-[3px] rounded-full bg-accent/50 shrink-0" />
                  {item}
                </span>
              ))}
            </span>
          ))}
        </div>
      </motion.div>

    </section>
  )
}
