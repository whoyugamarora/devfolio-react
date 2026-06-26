import Link from 'next/link'
import { ArrowLeft, GraduationCap, BookOpen, Code2, Star } from 'lucide-react'
import { education, deansList } from '@/lib/data'

export default function EducationPage() {
  return (
    <main className="relative min-h-screen bg-[#050515] text-slate-100 px-4 py-8">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] rounded-full bg-cyan-600/18 blur-[100px]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-violet-600/12 blur-[100px]" />
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
          <p className="section-label mb-4">Education</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-100 leading-tight mb-4">
            Academic <span className="text-gradient">Journey.</span>
          </h1>
        </div>

        {/* Degree card */}
        <div className="glass rounded-3xl p-8 mb-6 gradient-border">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/12 border border-cyan-500/20 flex items-center justify-center shrink-0">
              <GraduationCap className="w-7 h-7 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-100 mb-1">{education.degree}</h2>
              <p className="text-cyan-400 font-medium mb-1">{education.institution}</p>
              <p className="text-slate-500 text-sm">{education.duration} · {education.location}</p>
            </div>
          </div>
        </div>

        {/* Dean's List */}
        <div className="glass glass-hover rounded-3xl p-7 mb-6">
          <div className="flex items-center gap-3 mb-5">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400/30" />
            <h3 className="text-slate-100 font-bold">Dean&apos;s List Honors</h3>
            <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300">
              6 times
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {deansList.map((entry) =>
              entry.semesters.map((sem) => (
                <span
                  key={`${sem}-${entry.year}`}
                  className="text-sm px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 font-medium"
                >
                  {sem} {entry.year}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Courses */}
        <div className="glass glass-hover rounded-3xl p-7 mb-6">
          <div className="flex items-center gap-3 mb-5">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            <h3 className="text-slate-100 font-bold">Relevant Coursework</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {education.courses.map((course) => (
              <div key={course} className="flex items-center gap-2.5 text-sm text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                {course}
              </div>
            ))}
          </div>
        </div>

        {/* Skills learned */}
        <div className="glass glass-hover rounded-3xl p-7">
          <div className="flex items-center gap-3 mb-5">
            <Code2 className="w-5 h-5 text-violet-400" />
            <h3 className="text-slate-100 font-bold">Technical Skills Developed</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {education.skills.map((skill) => (
              <div key={skill} className="flex items-center gap-2.5 text-sm text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
