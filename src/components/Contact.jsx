import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-black via-[#071020] to-black py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <h3 className="text-center text-3xl sm:text-5xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-[linear-gradient(135deg,#93c5fd_0%,#38bdf8_50%,#22d3ee_100%)]">
            Visit or Contact Us
          </span>
        </h3>
        <p className="mt-4 text-center text-blue-100">
          RKP Sr. Sec. School, NH-9 Hisar Road, Madina, Rohtak
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+919999999999"
            className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-white/5 px-6 py-3 text-blue-100 backdrop-blur transition hover:border-blue-300/70 hover:bg-white/10"
          >
            <Phone size={18} /> Call
          </a>
          <a
            href="mailto:admissions@rkpschool.com"
            className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-white/5 px-6 py-3 text-blue-100 backdrop-blur transition hover:border-blue-300/70 hover:bg-white/10"
          >
            <Mail size={18} /> Email
          </a>
          <a
            href="https://maps.google.com/?q=RKP%20Sr.%20Sec.%20School,%20NH-9%20Hisar%20Road,%20Madina,%20Rohtak"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-white/5 px-6 py-3 text-blue-100 backdrop-blur transition hover:border-blue-300/70 hover:bg-white/10"
          >
            <MapPin size={18} /> Directions
          </a>
        </div>
      </div>
    </section>
  )
}
