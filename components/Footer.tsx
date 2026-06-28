import { personalInfo } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="px-6 pt-8 pb-10 border-t border-[rgba(255,255,255,0.06)] relative overflow-hidden">
      {/* Decorative name watermark */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center overflow-hidden pointer-events-none select-none">
        <p
          className="font-display font-black leading-none text-outline whitespace-nowrap"
          style={{ fontSize: 'clamp(60px,14vw,180px)' }}
        >
          {personalInfo.firstName}&nbsp;{personalInfo.lastName}
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between text-[#444] text-xs relative z-10">
        <p>© {new Date().getFullYear()} {personalInfo.name}</p>
        <p>Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  )
}
