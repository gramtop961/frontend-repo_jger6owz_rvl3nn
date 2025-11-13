import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Sparkles, PlayCircle } from 'lucide-react'

const scrollToContact = () => {
  const el = document.getElementById('contact')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white text-slate-900">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/rvFZ5oikmZSIbmGQ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft neutral gradient overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.2),rgba(255,255,255,0.8))] mix-blend-screen" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-4 py-1 text-sm text-slate-700 backdrop-blur">
            <Sparkles size={16} className="text-emerald-600" />
            Nurturing discipline, devotion, and excellence
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight select-none">
            <span className="bg-clip-text text-transparent bg-[linear-gradient(135deg,#0f172a_0%,#334155_40%,#64748b_100%)]">
              RKP Sr. Sec. School
            </span>
            <span className="block text-xl sm:text-2xl font-medium mt-4 text-slate-600">
              Igniting Young Minds with Knowledge and Values.
            </span>
            <span className="mt-2 block text-base sm:text-lg text-slate-500">
              Admissions Open (Nursery to Class 12th)
            </span>
          </h1>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={scrollToContact}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-emerald-600 to-lime-600 px-6 py-3 text-white shadow transition hover:shadow-lg focus:outline-none"
            >
              <span className="relative z-10 font-semibold tracking-wide">
                Enroll Now
              </span>
              <span className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-500 group-hover:translate-y-0" />
            </button>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-5 py-3 text-slate-700 backdrop-blur transition hover:bg-white"
            >
              <PlayCircle size={20} className="text-emerald-600" />
              Watch Reel
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
