'use client'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/data'

/* 3-D tilt card for the image preview */
function TiltPreview({ project }: { project: typeof projects[0] }) {
  const ref = useRef<HTMLDivElement>(null)
  const rx = useMotionValue(0), ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 180, damping: 20 })
  const sry = useSpring(ry, { stiffness: 180, damping: 20 })

  const move = (e: React.MouseEvent) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    rx.set(((e.clientY - r.top)  / r.height - 0.5) * -14)
    ry.set(((e.clientX - r.left) / r.width  - 0.5) *  14)
  }
  const leave = () => { rx.set(0); ry.set(0) }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX: srx, rotateY: sry, transformStyle: 'preserve-3d', perspective: 900 }}
      onMouseMove={move} onMouseLeave={leave}
      className="rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)] w-full shadow-2xl shadow-black/60"
      style2={{ aspectRatio: '4/3' } as React.CSSProperties}
    >
      <div style={{ aspectRatio: '4/3', position: 'relative' }}>
        <Image src={project.image} alt={project.title} fill className="object-cover" sizes="420px" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06060c]/70 via-transparent to-transparent" />
        {/* Sheen */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/4 to-transparent pointer-events-none" />
        <div className="absolute bottom-5 left-5">
          <p className="font-display font-bold text-lg text-[#efefef]">{project.title}</p>
          {project.featured && <span className="text-[10px] font-bold tracking-widest uppercase text-accent">Featured</span>}
        </div>
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          className="absolute top-4 right-4 p-2 rounded-lg bg-[#06060c]/60 backdrop-blur-sm border border-[rgba(255,255,255,0.1)] text-[#888] hover:text-[#efefef] transition-all">
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const show = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState<typeof projects[0] | null>(null)

  return (
    <section id="projects" ref={ref} className="py-28 px-6 border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-end justify-between mb-16">
          <motion.p initial={{ opacity: 0, x: -16 }} animate={show ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }} className="section-num">03 — Projects</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display font-black tracking-[-0.04em] text-[#efefef]"
            style={{ fontSize: 'clamp(28px,4.5vw,56px)' }}
          >
            Things I&apos;ve built
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-10 xl:gap-16 items-start">

          {/* Project list */}
          <div className="relative">
            {/* Large decorative number */}
            <div className="absolute -right-4 -top-12 font-display font-black text-outline select-none pointer-events-none"
              style={{ fontSize: 'clamp(80px,14vw,160px)' }}>
              {String(projects.length).padStart(2, '0')}
            </div>

            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 18 }} animate={show ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                onMouseEnter={() => setActive(p)}
                onMouseLeave={() => setActive(null)}
                className="group py-8 border-b border-[rgba(255,255,255,0.06)] cursor-default"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-5">
                    <span
                      className="font-display font-black text-5xl leading-none mt-0.5 transition-colors duration-300 shrink-0"
                      style={{ color: active?.id === p.id ? '#c8ff3b' : '#1a1a1a' }}
                    >
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-[22px] text-[#666] group-hover:text-[#efefef] transition-colors duration-200 mb-2 leading-tight">
                        {p.title}
                      </h3>
                      <p className="text-[#333] text-sm leading-relaxed mb-3 max-w-sm">{p.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tech.map(t => <span key={t} className="pill">{t}</span>)}
                      </div>
                    </div>
                  </div>
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-[rgba(255,255,255,0.07)] text-[#2a2a2a] group-hover:text-[#efefef] group-hover:border-accent/40 transition-all duration-200 shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sticky 3D image preview */}
          <div className="hidden lg:block lg:sticky lg:top-28" style={{ perspective: '1000px' }}>
            <AnimatePresence mode="wait">
              {active ? (
                <motion.div key={active.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <TiltPreview project={active} />
                </motion.div>
              ) : (
                <motion.div key="empty"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="rounded-2xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.015)] flex items-center justify-center"
                  style={{ aspectRatio: '4/3' }}
                >
                  <p className="text-[#1e1e1e] text-sm font-medium tracking-wide">Hover a project ↑</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
