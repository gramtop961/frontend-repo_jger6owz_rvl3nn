import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const QUOTES = [
  {
    text: 'Arise, awake, and stop not till the goal is reached.',
    author: 'Swami Vivekananda',
  },
  {
    text: 'God is in all men, but all men are not in God.',
    author: 'Sri Ramakrishna Paramhansa',
  },
  {
    text: 'Take up one idea. Make that one idea your life.',
    author: 'Swami Vivekananda',
  },
]

export default function Motivation() {
  const [index, setIndex] = useState(0)
  const videoRef = useRef(null)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % QUOTES.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative w-full overflow-hidden bg-white py-24 text-slate-900">
      {/* Background video overlay (neutral) */}
      <video
        ref={videoRef}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://cdn.coverr.co/videos/coverr-rolling-clouds-4264/1080p.mp4" type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h3 className="text-2xl sm:text-4xl font-bold text-slate-800">Motivation</h3>
        <div className="mt-8 min-h-[140px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl"
            >
              <p className="text-xl sm:text-2xl font-semibold leading-relaxed text-slate-800">
                “{QUOTES[index].text}”
              </p>
              <p className="mt-3 text-slate-600">— {QUOTES[index].author}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
