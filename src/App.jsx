import React from 'react'
import Hero from './components/Hero'
import Vision from './components/Vision'
import Achievements from './components/Achievements'
import Motivation from './components/Motivation'
import Contact from './components/Contact'

function App() {
  // Placeholder visionary images; replace with actual uploaded images when available
  const visionImages = [
    'https://upload.wikimedia.org/wikipedia/commons/8/8b/Swami_Vivekananda_in_Chicago_1893.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/0/00/Ramakrishna_paramahamsa.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/5/50/Sarada_Devi.jpg',
  ]

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Vision images={visionImages} />
      <Achievements />
      <Motivation />
      <Contact />
    </div>
  )
}

export default App
