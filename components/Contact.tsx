'use client'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, ArrowUpRight, Send, CheckCircle } from 'lucide-react'
import { personalInfo } from '@/lib/data'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const show = useInView(ref, { once: true, margin: '-80px' })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const inputClass =
    'w-full bg-[var(--surface)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--text)] placeholder-[var(--text-4)] focus:outline-none focus:border-accent/50 transition-colors'

  return (
    <section id="contact" ref={ref} className="py-28 px-6 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-end justify-between mb-16">
          <motion.p
            initial={{ opacity: 0, x: -16 }} animate={show ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-num"
          >
            07 — Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display font-black tracking-[-0.04em] text-[var(--text)]"
            style={{ fontSize: 'clamp(28px,4.5vw,56px)' }}
          >
            Get in touch
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-14 xl:gap-20 items-start">

          <motion.form
            initial={{ opacity: 0, y: 20 }} animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[10px] font-bold tracking-[0.18em] uppercase text-[var(--text-3)] mb-2">Name</label>
                <input
                  required value={name} onChange={e => setName(e.target.value)}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-[0.18em] uppercase text-[var(--text-3)] mb-2">Email</label>
                <input
                  type="email" required value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold tracking-[0.18em] uppercase text-[var(--text-3)] mb-2">Message</label>
              <textarea
                required rows={7} value={message} onChange={e => setMessage(e.target.value)}
                placeholder="What's on your mind?"
                className={`${inputClass} resize-none`}
              />
            </div>

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-emerald-400 text-sm font-medium"
                >
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  Your mail client is opening — looking forward to hearing from you!
                </motion.div>
              ) : (
                <motion.button
                  key="btn"
                  type="submit"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-[var(--accent-contrast)] text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Send message <Send className="w-3.5 h-3.5" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-emerald-400 font-semibold text-sm">Available for opportunities</span>
              </div>
              <p className="text-[var(--text-3)] text-sm leading-relaxed">
                Open to full-time roles, contracts, and collaborations — remote worldwide.
              </p>
            </div>

            <div className="card p-5">
              <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[var(--text-3)] mb-3">Direct email</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="group font-display font-bold text-[var(--text)] hover:text-[var(--accent-text)] transition-colors text-base inline-flex items-center gap-1.5"
              >
                {personalInfo.email}
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            <div className="card p-5">
              <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[var(--text-3)] mb-4">Find me on</p>
              <div className="flex flex-col gap-3">
                {[
                  { Icon: Github,   label: 'GitHub',   href: personalInfo.github,   sub: '@whoyugamarora' },
                  { Icon: Linkedin, label: 'LinkedIn',  href: personalInfo.linkedin, sub: 'in/yugam-arora'  },
                ].map(({ Icon, label, href, sub }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-[var(--text-3)] hover:text-[var(--text)] transition-colors">
                    <div className="w-8 h-8 rounded-lg border border-[var(--border)] flex items-center justify-center group-hover:border-accent/40 transition-colors shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[var(--text)]">{label}</p>
                      <p className="text-[11px] text-[var(--text-4)]">{sub}</p>
                    </div>
                    <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
