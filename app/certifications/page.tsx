'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Award, Star } from 'lucide-react'
import { credlyBadges, deansList } from '@/lib/data'

declare global {
  interface Window {
    __credlyLoaded?: boolean
  }
}

export default function CertificationsPage() {
  useEffect(() => {
    if (window.__credlyLoaded) return
    const script = document.createElement('script')
    script.src = 'https://cdn.credly.com/assets/utilities/embed.js'
    script.async = true
    script.onload = () => { window.__credlyLoaded = true }
    document.body.appendChild(script)
  }, [])

  return (
    <main className="relative min-h-screen bg-[#050515] text-slate-100 px-4 py-8">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] rounded-full bg-violet-600/18 blur-[100px]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-indigo-600/12 blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors glass px-4 py-2 rounded-xl mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <div className="mb-12">
          <p className="section-label mb-4">Certifications</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-100 leading-tight mb-4">
            All <span className="text-gradient">credentials.</span>
          </h1>
          <p className="text-slate-400 text-lg">
            {credlyBadges.length} professional certifications verified by Credly.
          </p>
        </div>

        {/* Dean's List */}
        <div className="glass rounded-3xl p-7 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/12 border border-amber-500/20 flex items-center justify-center">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400/30" />
            </div>
            <div>
              <p className="font-bold text-slate-100">Dean&apos;s List — University of the Fraser Valley</p>
              <p className="text-xs text-slate-500 mt-0.5">Academic Excellence</p>
            </div>
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

        {/* Credly Badges */}
        <div className="flex items-center gap-3 mb-6">
          <Award className="w-5 h-5 text-indigo-400" />
          <p className="text-slate-200 font-semibold">Professional Certifications</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {credlyBadges.map((id) => (
            <div
              key={id}
              className="glass glass-hover rounded-2xl p-4 flex items-center justify-center min-h-[180px] overflow-hidden"
            >
              <div
                data-iframe-width="240"
                data-iframe-height="160"
                data-share-badge-id={id}
                data-share-badge-host="https://www.credly.com"
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
