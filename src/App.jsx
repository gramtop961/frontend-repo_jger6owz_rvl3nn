import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Vision from './components/Vision'
import Achievements from './components/Achievements'
import Motivation from './components/Motivation'
import Contact from './components/Contact'

function App() {
  const [visionImages, setVisionImages] = useState([
    // Fallbacks until backend responds
    'https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1600&auto=format&fit=crop',
  ])

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/school-images`)
        const data = await res.json()
        if (data && Array.isArray(data.images) && data.images.length) {
          const urls = data.images.map((it) => (typeof it === 'string' ? it : it.url)).filter(Boolean)
          if (urls.length) setVisionImages(urls)
        }
      } catch (e) {
        // keep fallbacks on error
      }
    }
    fetchImages()
  }, [])

  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <Hero />
      <Vision images={visionImages} />
      <Achievements />
      <Motivation />
      <Contact />
    </div>
  )
}

export default App
