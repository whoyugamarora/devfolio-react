'use client'
import { useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import { personalInfo } from '@/lib/data'

function MagLink({ href, children, className, external }: { href: string; children: React.ReactNode; className?: string; external?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const mx = useMotionValue(0), my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 260, damping: 22 })
  const sy = useSpring(my, { stiffness: 260, damping: 22 })
  const move = (e: React.MouseEvent) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left - r.width / 2) * 0.38)
    my.set((e.clientY - r.top - r.height / 2) * 0.38)
  }
  const leave = () => { mx.set(0); my.set(0) }
  return (
    <motion.a ref={ref} href={href} style={{ x: sx, y: sy }} onMouseMove={move} onMouseLeave={leave}
      target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}
      className={className}>{children}</motion.a>
  )
}

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null)
  const show = useInView(ref, { once: true, margin: '-80px' })

  return (
    <footer id="contact" ref={ref} className="py-28 px-6 border-t border-[rgba(255,255,255,0.06)] relative overflow-hidden">
      {/* Large decorative BG text */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center overflow-hidden pointer-events-none select-none">
        <p className="font-display font-black leading-none text-outline whitespace-nowrap"
          style={{ fontSize: 'clamp(60px,14vw,180px)' }}>
          {personalInfo.firstName}&nbsp;{personalInfo.lastName}
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.p initial={{ opacity: 0, x: -16 }} animate={show ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }} className="section-num mb-12">06 — Contact</motion.p>

        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }} animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="font-display font-black tracking-[-0.05em] leading-[0.88] text-[#efefef] mb-2"
            style={{ fontSize: 'clamp(54px,11vw,130px)' }}
          >
            Have an idea?
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            className="font-display font-black tracking-[-0.05em] leading-[0.88] text-accent"
            style={{ fontSize: 'clamp(54px,11vw,130px)' }}
          >
            Let&apos;s talk.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-[rgba(255,255,255,0.06)] pt-8 pb-32"
        >
          <MagLink href={`mailto:${personalInfo.email}`}
            className="group font-display font-bold text-lg xl:text-xl text-[#efefef] hover:text-accent transition-colors inline-flex items-center gap-2">
            {personalInfo.email}
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </MagLink>

          <div className="flex items-center gap-3">
            {[{ Icon: Github, href: personalInfo.github, label: 'GitHub', ext: true },
              { Icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn', ext: true },
              { Icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', ext: false },
            ].map(({ Icon, href, label, ext }) => (
              <MagLink key={label} href={href} external={ext}
                className="p-2.5 rounded-xl border border-[rgba(255,255,255,0.07)] text-[#333] hover:text-[#efefef] hover:border-accent/40 transition-all">
                <Icon className="w-4 h-4" />
              </MagLink>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={show ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-between text-[#1e1e1e] text-xs">
          <p>© {new Date().getFullYear()} {personalInfo.name}</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </motion.div>
      </div>
    </footer>
  )
}
