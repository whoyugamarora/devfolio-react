import Link from 'next/link'
import { ArrowLeft, Target, Shield, Lightbulb, Users } from 'lucide-react'

export default function MissionPage() {
  return (
    <main className="relative min-h-screen bg-[#050515] text-slate-100 px-4 py-8">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[100px]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-cyan-600/12 blur-[100px]" />
      </div>

      <div className="relative max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors glass px-4 py-2 rounded-xl mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <div className="mb-12">
          <p className="section-label mb-4">My Mission</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-100 leading-tight mb-6">
            Purpose &amp; <span className="text-gradient">Direction.</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Inspired by frameworks of purposeful living, this is my professional mission as an IT
            and security professional.
          </p>
        </div>

        <div className="space-y-5">
          {[
            {
              icon: Shield,
              color: 'indigo',
              title: 'Secure Digital Infrastructure',
              body: 'I am driven to protect organizations from evolving cyber threats by designing and maintaining robust security architectures. Cybersecurity is not just a job — it is a responsibility to the people whose data and privacy depend on the systems I manage.',
            },
            {
              icon: Lightbulb,
              color: 'cyan',
              title: 'Continuous Learning',
              body: 'Technology evolves at breakneck speed. My mission includes staying at the forefront of cloud security, identity management, and emerging threats. Every certification, every course, every late night of study is an investment in being the best professional I can be.',
            },
            {
              icon: Users,
              color: 'violet',
              title: 'Collaborative Problem Solving',
              body: 'Great IT teams build more than systems — they build trust. I am committed to working collaboratively, communicating clearly, and bringing a solutions-first mindset to every challenge I face alongside my colleagues and clients.',
            },
            {
              icon: Target,
              color: 'emerald',
              title: 'Creating Real-World Impact',
              body: 'Behind every system I secure is a business that depends on it, employees who use it, and customers who trust it. My mission is to translate technical expertise into tangible security improvements that protect real people and enable organizations to thrive.',
            },
          ].map(({ icon: Icon, color, title, body }) => (
            <div
              key={title}
              className="glass glass-hover rounded-3xl p-7 flex gap-5"
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                  color === 'indigo'
                    ? 'bg-indigo-500/12 border border-indigo-500/20'
                    : color === 'cyan'
                    ? 'bg-cyan-500/12 border border-cyan-500/20'
                    : color === 'violet'
                    ? 'bg-violet-500/12 border border-violet-500/20'
                    : 'bg-emerald-500/12 border border-emerald-500/20'
                }`}
              >
                <Icon
                  className={`w-6 h-6 ${
                    color === 'indigo'
                      ? 'text-indigo-400'
                      : color === 'cyan'
                      ? 'text-cyan-400'
                      : color === 'violet'
                      ? 'text-violet-400'
                      : 'text-emerald-400'
                  }`}
                />
              </div>
              <div>
                <h3 className="text-slate-100 font-bold text-lg mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
