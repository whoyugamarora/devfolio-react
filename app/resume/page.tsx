'use client'

import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'

export default function ResumePage() {
  return (
    <main className="relative min-h-screen bg-[#050515] text-slate-100 px-4 py-8">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[100px]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-violet-600/15 blur-[100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors glass px-4 py-2 rounded-xl"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>

          <a
            href="/Resume-IT.pdf"
            download
            className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30 font-medium"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>

        <h1 className="text-3xl font-bold text-slate-100 mb-2">
          Resume — <span className="text-gradient">Yugam Arora</span>
        </h1>
        <p className="text-slate-400 text-sm mb-8">IT Administrator · Security Enthusiast</p>

        {/* PDF viewer */}
        <div className="glass rounded-3xl overflow-hidden">
          <iframe
            src="/Resume-IT.pdf"
            className="w-full"
            style={{ height: '90vh', border: 'none' }}
            title="Yugam Arora Resume"
          />
        </div>
      </div>
    </main>
  )
}
