'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

const links = [
  { label: 'About',    href: '#about'          },
  { label: 'Skills',   href: '#skills'         },
  { label: 'Projects', href: '#projects'       },
  { label: 'Work',     href: '#experience'     },
  { label: 'Edu',      href: '#education'      },
  { label: 'Certs',    href: '#certifications' },
  { label: 'Contact',  href: '#contact'        },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 40)
      for (const { href } of [...links].reverse()) {
        const el = document.getElementById(href.slice(1))
        if (el && window.scrollY >= el.offsetTop - 160) { setActive(href.slice(1)); return }
      }
      setActive('')
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isDark = theme === 'dark'

  return (
    <>
      <motion.header
        initial={{ y: -52, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-md border-b border-[var(--border)]' : ''
        }`}
        style={scrolled ? { background: 'var(--overlay)' } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 h-[52px] flex items-center justify-between">
          <Link href="/" className="font-display font-bold text-sm tracking-[0.18em] text-[var(--text)] hover:text-accent transition-colors z-50 relative">
            YA
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {links.map(({ label, href }) => {
              const isActive = active === href.slice(1)
              return (
                <a key={href} href={href}
                  className={`text-[13px] font-medium transition-colors duration-150 relative group ${
                    isActive ? 'text-accent' : 'text-[var(--text-3)] hover:text-[var(--text)]'
                  }`}
                >
                  {label}
                  <span className={`absolute -bottom-0.5 left-0 h-[1px] bg-accent transition-all duration-200 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                aria-label="Toggle theme"
                className="p-1.5 rounded-lg border border-[var(--border)] text-[var(--text-3)] hover:text-[var(--text)] hover:border-[var(--border-2)] transition-all"
              >
                {isDark
                  ? <Sun className="w-3.5 h-3.5" />
                  : <Moon className="w-3.5 h-3.5" />
                }
              </button>
            )}

            <Link href="/resume"
              className="hidden md:inline-flex items-center gap-1.5 text-[12px] font-semibold px-3.5 py-1.5 rounded-md bg-accent text-[#0a0a0a] hover:opacity-88 transition-all">
              Resume ↗
            </Link>

            <button
              className="md:hidden p-1 text-[var(--text-3)] hover:text-[var(--text)] relative z-50"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              <div className="w-5 flex flex-col gap-[5px]">
                <span className={`h-[1px] bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
                <span className={`h-[1px] bg-current transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`h-[1px] bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col backdrop-blur-md"
            style={{ background: 'var(--overlay)' }}
          >
            <div aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
              <p className="font-display font-black leading-none text-outline"
                style={{ fontSize: 'clamp(160px, 48vw, 320px)' }}>
                YA
              </p>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-8 relative z-10 pt-[52px]">
              {links.map(({ label, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.22, delay: i * 0.06 }}
                  onClick={() => setOpen(false)}
                  className={`font-display font-black leading-none py-3 transition-colors duration-150 ${
                    active === href.slice(1) ? 'text-accent' : 'text-[var(--text)] hover:text-accent'
                  }`}
                  style={{ fontSize: 'clamp(38px, 9vw, 58px)' }}
                >
                  {label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.22, delay: links.length * 0.06 }}
              >
                <Link href="/resume" onClick={() => setOpen(false)}
                  className="font-display font-black leading-none py-3 text-accent hover:opacity-75 transition-opacity inline-block"
                  style={{ fontSize: 'clamp(38px, 9vw, 58px)' }}
                >
                  Resume ↗
                </Link>
              </motion.div>
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.35 }}
              className="relative z-10 border-t border-[var(--border)] px-8 py-6 flex items-center justify-between"
            >
              <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--text-4)]">Yugam Arora</p>
              <span className="w-1 h-1 rounded-full bg-accent/50" />
              <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--text-4)]">Fraser Valley, BC</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
