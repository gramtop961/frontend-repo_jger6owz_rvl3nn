import React from 'react'
import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'

const achievements = [
  { title: '100% Board Results', desc: 'Outstanding performance in CBSE Board Exams', glow: 'from-emerald-400 to-lime-400' },
  { title: 'State-Level Winners', desc: 'Champions in sports and cultural events', glow: 'from-lime-400 to-emerald-400' },
  { title: 'Modern Labs', desc: 'Well-equipped Science and Computer labs', glow: 'from-emerald-300 to-teal-400' },
  { title: 'Holistic Growth', desc: 'Balanced focus on academics and values', glow: 'from-teal-400 to-emerald-400' },
]

export default function Achievements() {
  return (
    <section id="achievements" className="relative bg-gradient-to-b from-white via-slate-50 to-white py-20 text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl sm:text-5xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-[linear-gradient(135deg,#0f172a_0%,#334155_40%,#64748b_100%)]">
            Our Achievements
          </span>
        </h2>

        <div className="mt-10 overflow-x-auto py-2 scrollbar-thin">
          <div className="flex min-w-[700px] gap-6">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative w-72 flex-shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow hover:shadow-md"
              >
                <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${a.glow} opacity-15 blur-2xl`} />
                <div className="relative z-10">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                    <Trophy className="text-emerald-700" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">{a.title}</h3>
                  <p className="mt-2 text-slate-600">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
