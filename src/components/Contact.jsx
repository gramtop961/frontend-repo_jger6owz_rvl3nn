import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-white via-slate-50 to-white py-20 text-slate-900">
      <div className="mx-auto max-w-5xl px-6">
        <h3 className="text-center text-3xl sm:text-5xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-[linear-gradient(135deg,#0f172a_0%,#334155_40%,#64748b_100%)]">
            Visit or Contact Us
          </span>
        </h3>
        <p className="mt-4 text-center text-slate-600">
          RKP Sr. Sec. School, NH-9 Hisar Road, Madina, Rohtak
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+919999999999"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-slate-700 shadow-sm transition hover:shadow"
          >
            <Phone size={18} /> Call
          </a>
          <a
            href="mailto:admissions@rkpschool.com"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-slate-700 shadow-sm transition hover:shadow"
          >
            <Mail size={18} /> Email
          </a>
          <a
            href="https://maps.google.com/?q=RKP%20Sr.%20Sec.%20School,%20NH-9%20Hisar%20Road,%20Madina,%20Rohtak"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-slate-700 shadow-sm transition hover:shadow"
          >
            <MapPin size={18} /> Directions
          </a>
        </div>
      </div>
    </section>
  )
}
