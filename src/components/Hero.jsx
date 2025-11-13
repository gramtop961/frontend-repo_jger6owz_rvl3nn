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
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/rvFZ5oikmZSIbmGQ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle dark gradient for contrast */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(12,20,40,0.15),rgba(0,0,0,0.8))]" />
      </div>

      {/* Floating glow orbs */}
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-blue-500/30 blur-[120px] animate-pulseSlow" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-[120px] animate-pulseSlow delay-150" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-white/5 px-4 py-1 text-sm text-blue-200 backdrop-blur">
            <Sparkles size={16} className="text-blue-300" />
            Igniting young minds with discipline and devotion
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight select-none">
            <span className="bg-clip-text text-transparent bg-[linear-gradient(135deg,#a5b4fc_0%,#60a5fa_35%,#22d3ee_70%,#93c5fd_100%)] drop-shadow-[0_0_30px_rgba(59,130,246,0.35)]">
              RKP Sr. Sec. School
            </span>
            <span className="block text-xl sm:text-2xl font-medium mt-4 text-blue-100 neon-soft">
              Igniting Young Minds with Knowledge and Values.
            </span>
            <span className="mt-2 block text-base sm:text-lg text-blue-200/90">
              Admissions Open (Nursery to Class 12th)
            </span>
          </h1>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={scrollToContact}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 px-6 py-3 text-white shadow-[0_0_25px_rgba(59,130,246,0.65)] transition hover:shadow-[0_0_45px_rgba(59,130,246,0.85)] focus:outline-none"
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
              className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-white/5 px-5 py-3 text-blue-100 backdrop-blur transition hover:border-blue-300/70 hover:bg-white/10"
            >
              <PlayCircle size={20} className="text-cyan-300" />
              Watch Reel
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
