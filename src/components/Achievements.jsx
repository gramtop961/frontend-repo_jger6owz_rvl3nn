import React from 'react'
import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'

const achievements = [
  { title: '100% Board Results', desc: 'Outstanding performance in CBSE Board Exams', glow: 'from-blue-500 to-cyan-400' },
  { title: 'State-Level Winners', desc: 'Champions in sports and cultural events', glow: 'from-cyan-400 to-blue-400' },
  { title: 'Modern Labs', desc: 'Well-equipped Science and Computer labs', glow: 'from-blue-400 to-sky-400' },
  { title: 'Holistic Growth', desc: 'Balanced focus on academics and values', glow: 'from-sky-500 to-cyan-400' },
]

export default function Achievements() {
  return (
    <section id="achievements" className="relative bg-gradient-to-b from-black via-[#071020] to-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl sm:text-5xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-[linear-gradient(135deg,#93c5fd_0%,#38bdf8_50%,#22d3ee_100%)]">
            Our Achievements
          </span>
        </h2>

        <div className="mt-10 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-blue-700/50">
          <div className="flex min-w-[700px] gap-6">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative w-72 flex-shrink-0 overflow-hidden rounded-2xl border border-blue-500/20 bg-white/5 p-6 backdrop-blur hover:border-blue-400/40"
              >
                <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${a.glow} opacity-20 blur-2xl`} />
                <div className="relative z-10">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/30">
                    <Trophy className="text-cyan-300" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">{a.title}</h3>
                  <p className="mt-2 text-blue-100/80">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
