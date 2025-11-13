import React from 'react'
import { motion } from 'framer-motion'

export default function Vision({ images = [] }) {
  const card = {
    hidden: { opacity: 0, y: 20 },
    show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
  }

  return (
    <section id="vision" className="relative w-full bg-gradient-to-b from-white via-slate-50 to-white py-20 text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl sm:text-5xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-[linear-gradient(135deg,#0f172a_0%,#334155_40%,#64748b_100%)]">
            Our Vision
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
          To nurture every student with excellence, moral strength, and divine inspiration drawn from the teachings of Swami Vivekananda, Swami Ramkrishna Paramhans, and Maa Sharda Devi.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {images.map((src, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow transition hover:shadow-md"
            >
              <div className="aspect-square w-full overflow-hidden rounded-xl">
                <img src={src} alt="Visionary" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
