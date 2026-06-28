'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { personalInfo, skills, projects, experience, certifications } from '@/lib/data'

type Line = { text: string; cls?: string }
type Entry = { cmd?: string; lines: Line[]; batch: number }

const PROMPT = 'yugam@portfolio ~ %'

const WELCOME: Line[] = [
  { text: 'Portfolio Terminal  v1.0.0', cls: 'text-accent font-bold' },
  { text: `Connected as guest  ·  ${personalInfo.location}`, cls: 'text-[#555]' },
  { text: '' },
  { text: "Type 'help' to see available commands.", cls: 'text-[#888]' },
  { text: '' },
]

const TAB_COMPLETIONS = [
  'help', 'whoami', 'skills', 'projects', 'experience', 'education',
  'certs', 'contact', 'open github', 'open linkedin',
  'clear', 'exit', 'ls', 'pwd', 'date', 'uptime', 'ping yugam', 'sudo hire-me',
]

function getOutput(raw: string): Line[] | 'clear' | 'exit' {
  const c = raw.trim().toLowerCase()

  if (c === 'clear') return 'clear'
  if (c === 'exit' || c === 'q' || c === 'quit') return 'exit'
  if (c === '') return []

  if (c === 'help') return [
    { text: 'Commands', cls: 'text-accent font-semibold' },
    { text: '─────────────────────────────────────', cls: 'text-[#1e1e1e]' },
    { text: '  whoami          About me' },
    { text: '  skills          Technical skills' },
    { text: "  projects        Things I've built" },
    { text: '  experience      Work history' },
    { text: '  education       Academic background' },
    { text: '  certs           Certifications' },
    { text: '  contact         Get in touch' },
    { text: '' },
    { text: '  open github     Open GitHub profile' },
    { text: '  open linkedin   Open LinkedIn' },
    { text: '' },
    { text: '  clear           Clear terminal' },
    { text: '  exit            Close terminal' },
    { text: '' },
    { text: "  Tip: Tab to autocomplete  ·  ↑↓ for history  ·  try some other things 👀", cls: 'text-[#3a3a3a]' },
  ]

  if (c === 'whoami') return [
    { text: personalInfo.name, cls: 'text-accent font-bold' },
    { text: `${personalInfo.title}  ·  ${personalInfo.location}`, cls: 'text-[#666]' },
    { text: '' },
    { text: personalInfo.bio, cls: 'text-[#bbb]' },
    { text: '' },
    { text: "  6×   Dean's List at UFV", cls: 'text-[#ccc]' },
    { text: '  3+   Years of IT experience', cls: 'text-[#ccc]' },
    { text: ' 12+   Certifications earned', cls: 'text-[#ccc]' },
    { text: '  3+   Projects shipped to production', cls: 'text-[#ccc]' },
  ]

  if (c === 'skills') {
    const lines: Line[] = []
    for (const cat of skills) {
      lines.push({ text: '' })
      lines.push({ text: `  ${cat.category}`, cls: 'text-accent font-semibold' })
      lines.push({ text: `  ${cat.items.map(i => i.name).join('  ·  ')}`, cls: 'text-[#777]' })
    }
    return lines
  }

  if (c === 'projects') {
    const lines: Line[] = []
    for (let i = 0; i < projects.length; i++) {
      const p = projects[i]
      lines.push({ text: '' })
      lines.push({ text: `  0${i + 1}  ${p.title}${p.featured ? '  ★' : ''}`, cls: 'text-accent font-semibold' })
      lines.push({ text: `      ${p.description}`, cls: 'text-[#999]' })
      lines.push({ text: `      [${p.tech.join('  ')}]`, cls: 'text-[#555]' })
      lines.push({ text: `      ${p.github}`, cls: 'text-[#3a3a3a]' })
    }
    return lines
  }

  if (c === 'experience') {
    const lines: Line[] = []
    for (let i = 0; i < experience.length; i++) {
      const e = experience[i]
      lines.push({ text: '' })
      lines.push({ text: `  0${i + 1}  ${e.role}`, cls: 'text-accent font-semibold' })
      lines.push({ text: `      ${e.company}  ·  ${e.duration}  ·  ${e.location}`, cls: 'text-[#777]' })
      for (const b of e.bullets.slice(0, 2)) {
        lines.push({ text: `      — ${b}`, cls: 'text-[#666]' })
      }
    }
    return lines
  }

  if (c === 'education') return [
    { text: '' },
    { text: 'Bachelor of Computer Information Systems', cls: 'text-accent font-semibold' },
    { text: 'University of the Fraser Valley  ·  Jan 2020 – Apr 2025', cls: 'text-[#777]' },
    { text: 'Abbotsford, BC', cls: 'text-[#555]' },
    { text: '' },
    { text: "  6×  Dean's List honoree", cls: 'text-[#ccc]' },
    { text: '  Focus: Cybersecurity  ·  Cloud Infrastructure  ·  Systems Administration', cls: 'text-[#999]' },
  ]

  if (c === 'certs') {
    const lines: Line[] = [{ text: '' }]
    for (const cert of certifications.slice(0, 8)) {
      lines.push({ text: `  ✓  ${cert.name}`, cls: 'text-[#ccc]' })
      lines.push({ text: `     ${cert.issuer}  ·  ${cert.date}`, cls: 'text-[#555]' })
    }
    if (certifications.length > 8) {
      lines.push({ text: '' })
      lines.push({ text: `  + ${certifications.length - 8} more  →  visit /certifications`, cls: 'text-accent' })
    }
    return lines
  }

  if (c === 'contact') return [
    { text: '' },
    { text: `  email     ${personalInfo.email}`, cls: 'text-[#ccc]' },
    { text: `  github    ${personalInfo.github}`, cls: 'text-[#ccc]' },
    { text: `  linkedin  ${personalInfo.linkedin}`, cls: 'text-[#ccc]' },
    { text: '' },
    { text: '  Or scroll to the Contact section ↓', cls: 'text-accent' },
  ]

  if (c === 'open github') {
    if (typeof window !== 'undefined') window.open(personalInfo.github, '_blank')
    return [{ text: 'Opening GitHub in new tab...', cls: 'text-accent' }]
  }

  if (c === 'open linkedin') {
    if (typeof window !== 'undefined') window.open(personalInfo.linkedin, '_blank')
    return [{ text: 'Opening LinkedIn in new tab...', cls: 'text-accent' }]
  }

  // ── Easter eggs ────────────────────────────────────────────────────

  if (c === 'sudo hire-me' || c === 'sudo hire me') return [
    { text: '[sudo] password for recruiter: ········', cls: 'text-[#555]' },
    { text: '' },
    { text: 'Access granted.', cls: 'text-emerald-400 font-bold' },
    { text: 'Initiating onboarding sequence... ████████████ 100%', cls: 'text-emerald-400' },
    { text: '' },
    { text: `  Next step: send an email to ${personalInfo.email}`, cls: 'text-accent' },
  ]

  if (c.startsWith('sudo')) return [
    { text: 'sudo: command not found for guests. Try sudo hire-me.', cls: 'text-red-400' },
  ]

  if (c === 'vim' || c === 'nano' || c === 'emacs') return [
    { text: "Editor not found. (Trust me, you don't want to get stuck in vim anyway.)", cls: 'text-[#666]' },
  ]

  if (c === 'cat /etc/passwd' || c === 'cat /etc/shadow' || c === 'ls -la /secrets' || c === 'ls /secrets') return [
    { text: 'Permission denied. Nice try, pentester 😏', cls: 'text-red-400' },
  ]

  if (c === 'ls -la' || c === 'ls -al') return [
    { text: 'total 42', cls: 'text-[#555]' },
    { text: 'drwxr-xr-x  yugam  staff   about/', cls: 'text-[#888]' },
    { text: 'drwxr-xr-x  yugam  staff   skills/', cls: 'text-[#888]' },
    { text: 'drwxr-xr-x  yugam  staff   projects/', cls: 'text-[#888]' },
    { text: 'drwxr-xr-x  yugam  staff   experience/', cls: 'text-[#888]' },
    { text: '-rw-r-----  yugam  staff   resume.pdf', cls: 'text-[#888]' },
    { text: '-rw-------  yugam  staff   .secrets     [REDACTED]', cls: 'text-red-400' },
  ]

  if (c === 'ls') return [
    { text: 'about/  skills/  projects/  experience/  certifications/  contact/', cls: 'text-accent' },
  ]

  if (c === 'pwd') return [{ text: '/home/yugam/portfolio', cls: 'text-[#888]' }]

  if (c === 'uname' || c === 'uname -a') return [
    { text: 'YugamOS 1.0.0 portfolio-box #1 SMP (Next.js 15 · Tailwind · Framer Motion)', cls: 'text-[#888]' },
  ]

  if (c === 'date') return [
    { text: new Date().toUTCString(), cls: 'text-[#888]' },
  ]

  if (c === 'uptime') return [
    { text: `up ${new Date().getFullYear() - 2000} years  ·  load average: ∞ passion,  ∞ curiosity,  ∞ coffee`, cls: 'text-[#888]' },
  ]

  if (c === 'history') return [
    { text: '  1  sudo hire-me', cls: 'text-[#555]' },
    { text: '  2  open linkedin', cls: 'text-[#555]' },
    { text: '  3  contact', cls: 'text-[#555]' },
    { text: '  4  whoami', cls: 'text-[#555]' },
  ]

  if (c === 'ping yugam' || c === 'ping yugamarora') return [
    { text: 'PING yugam.arora (127.0.0.1): 56 data bytes', cls: 'text-[#555]' },
    { text: '64 bytes: icmp_seq=0 ttl=64 time=0.001 ms  ← very fast', cls: 'text-emerald-400' },
    { text: '64 bytes: icmp_seq=1 ttl=64 time=0.001 ms', cls: 'text-emerald-400' },
    { text: '' },
    { text: '2 packets transmitted, 2 received, 0.0% packet loss', cls: 'text-[#666]' },
  ]

  if (c === 'ssh yugam' || c === 'ssh yugam@portfolio') return [
    { text: 'ssh: connect to host yugam port 22: Permission denied (try email instead)', cls: 'text-red-400' },
    { text: `  → ${personalInfo.email}`, cls: 'text-accent' },
  ]

  if (c === 'cat resume' || c === 'cat resume.pdf' || c === 'open resume') return [
    { text: 'Binary file — opening in browser...', cls: 'text-[#888]' },
    { text: '  → /resume', cls: 'text-accent' },
  ]

  return [
    { text: `zsh: command not found: ${raw.trim()}`, cls: 'text-red-400' },
    { text: "Type 'help' to see available commands.", cls: 'text-[#555]' },
  ]
}

export default function Terminal() {
  const [open, setOpen] = useState(false)
  const [entries, setEntries] = useState<Entry[]>([{ lines: WELCOME, batch: 0 }])
  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState<string[]>([])
  const [histIdx, setHistIdx] = useState(-1)
  const [latestBatch, setLatestBatch] = useState(0)

  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const batchCount = useRef(0)

  // Global Ctrl+K / Cmd+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(prev => !prev)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', down)
    return () => window.removeEventListener('keydown', down)
  }, [])

  // Focus on open
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 80)
  }, [open])

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [entries])

  const run = useCallback((cmd: string) => {
    const trimmed = cmd.trim()
    if (trimmed) setCmdHistory(prev => [trimmed, ...prev])
    setHistIdx(-1)
    setInput('')

    const result = getOutput(trimmed)

    if (result === 'clear') {
      batchCount.current += 1
      const batch = batchCount.current
      setLatestBatch(batch)
      setEntries([{ lines: WELCOME, batch }])
      return
    }
    if (result === 'exit') {
      setOpen(false)
      return
    }

    // Special-case: cat resume navigates
    if (trimmed.toLowerCase() === 'cat resume' || trimmed.toLowerCase() === 'open resume') {
      window.open('/resume', '_blank')
    }

    batchCount.current += 1
    const batch = batchCount.current
    setLatestBatch(batch)
    setEntries(prev => [...prev, { cmd: trimmed, lines: result, batch }])
  }, [])

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      run(input)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(histIdx + 1, cmdHistory.length - 1)
      setHistIdx(next)
      setInput(cmdHistory[next] ?? '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = Math.max(histIdx - 1, -1)
      setHistIdx(next)
      setInput(next === -1 ? '' : cmdHistory[next])
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const match = TAB_COMPLETIONS.find(c => c.startsWith(input.toLowerCase()) && c !== input.toLowerCase())
      if (match) setInput(match)
    }
  }

  return (
    <>
      {/* Floating hint button */}
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        aria-label="Open terminal"
        className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2 px-3 py-2 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#0a0a0a]/90 text-[#444] hover:text-[#efefef] hover:border-[rgba(255,255,255,0.16)] transition-all text-xs font-mono"
      >
        <span className="text-accent font-bold">~</span>
        <span className="tracking-wide">terminal</span>
        <kbd className="ml-1 px-1.5 py-0.5 rounded text-[10px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#333]">
          ⌃K
        </kbd>
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[200] bg-[#06060c]/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setOpen(false)}
            />

            {/* Terminal window */}
            <motion.div
              className="fixed inset-x-4 top-[6vh] bottom-[6vh] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[780px] md:top-[8vh] md:bottom-[8vh] z-[201] flex flex-col rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-[0_32px_80px_rgba(0,0,0,0.9)]"
              style={{ background: '#0d0d0d' }}
              initial={{ opacity: 0, scale: 0.96, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -20 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
            >
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(255,255,255,0.07)] bg-[#111] shrink-0">
                <button
                  onClick={() => setOpen(false)}
                  className="w-3 h-3 rounded-full bg-[#ff5f56] hover:brightness-125 transition-all"
                  aria-label="Close"
                />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-auto text-[11px] text-[#3a3a3a] font-mono tracking-wide select-none">
                  yugam@portfolio — zsh
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="ml-3 text-[#2a2a2a] hover:text-[#666] transition-colors"
                  aria-label="Close"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Output */}
              <div className="flex-1 overflow-y-auto px-5 py-4 font-mono text-[13px] leading-relaxed">
                {entries.map((entry, ei) => (
                  <div key={ei}>
                    {entry.cmd !== undefined && (
                      <div className="flex items-baseline gap-2 mt-3 mb-0.5">
                        <span className="text-accent text-[11px] select-none shrink-0">{PROMPT}</span>
                        <span className="text-[#efefef]">{entry.cmd}</span>
                      </div>
                    )}
                    {entry.lines.map((line, li) => (
                      <motion.div
                        key={li}
                        initial={entry.batch === latestBatch ? { opacity: 0, x: -4 } : false}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.1,
                          delay: entry.batch === latestBatch ? li * 0.022 : 0,
                        }}
                        className={`whitespace-pre-wrap break-words ${line.cls ?? 'text-[#888]'}`}
                      >
                        {line.text || ' '}
                      </motion.div>
                    ))}
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>

              {/* Input row */}
              <div className="shrink-0 border-t border-[rgba(255,255,255,0.07)] px-5 py-3 flex items-center gap-3 bg-[#0d0d0d]">
                <span className="text-accent text-[11px] font-mono select-none shrink-0">{PROMPT}</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  className="flex-1 bg-transparent text-[#efefef] font-mono text-[13px] outline-none placeholder-[#252525] caret-accent"
                  placeholder="type a command..."
                  spellCheck={false}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
