'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const links = [
  { label: 'About',    href: '#about'          },
  { label: 'Skills',   href: '#skills'         },
  { label: 'Projects', href: '#projects'       },
  { label: 'Work',     href: '#experience'     },
  { label: 'Certs',    href: '#certifications' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

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

  return (
    <>
      <motion.header
        initial={{ y: -52, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0a0a0a]/85 backdrop-blur-md border-b border-[rgba(255,255,255,0.07)]' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[52px] flex items-center justify-between">
          <Link href="/" className="font-display font-bold text-sm tracking-[0.18em] text-[#efefef] hover:text-accent transition-colors">
            YA
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {links.map(({ label, href }) => {
              const isActive = active === href.slice(1)
              return (
                <a
                  key={href}
                  href={href}
                  className={`text-[13px] font-medium transition-colors duration-150 relative group ${
                    isActive ? 'text-accent' : 'text-[#555] hover:text-[#efefef]'
                  }`}
                >
                  {label}
                  <span className={`absolute -bottom-0.5 left-0 h-[1px] bg-accent transition-all duration-200 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/resume"
              className="hidden md:inline-flex items-center gap-1.5 text-[12px] font-semibold px-3.5 py-1.5 rounded-md bg-accent text-[#0a0a0a] hover:opacity-88 transition-all"
            >
              Resume ↗
            </Link>
            <button className="md:hidden p-1 text-[#555] hover:text-[#efefef]" onClick={() => setOpen(!open)}>
              <div className="w-5 flex flex-col gap-[5px]">
                <span className={`h-[1px] bg-current transition-all ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
                <span className={`h-[1px] bg-current transition-all ${open ? 'opacity-0' : ''}`} />
                <span className={`h-[1px] bg-current transition-all ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-x-0 top-[52px] z-40 bg-[#0a0a0a] border-b border-[rgba(255,255,255,0.07)] px-6 py-4"
        >
          {links.map(({ label, href }) => (
            <a key={href} href={href} className="block py-2.5 text-sm text-[#555] hover:text-[#efefef] transition-colors" onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <Link href="/resume" className="block py-2.5 text-sm text-accent mt-1 border-t border-[rgba(255,255,255,0.07)] pt-3" onClick={() => setOpen(false)}>Resume →</Link>
        </motion.div>
      )}
    </>
  )
}
