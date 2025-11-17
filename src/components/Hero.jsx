import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: 'ease-out-quart' })
  }, [])

  return (
    <header className="relative overflow-hidden bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="relative z-10 text-center">
          <img
            src="/logo.svg"
            alt="Label Logo"
            className="mx-auto h-16 w-auto mb-6"
            data-aos="fade-down"
          />
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight" data-aos="fade-up">
            Elevating Underground Sound
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="150">
            An Electronic Press Kit showcasing artists, releases, and global club partnerships.
          </p>
        </div>

        {/* Side visuals */}
        <img
          src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1600&auto=format&fit=crop"
          alt="DJ Turntable"
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 w-96 rounded-2xl opacity-70 shadow-2xl"
          data-aos="fade-right"
        />
        <img
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop"
          alt="Vinyl Records"
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-96 rounded-2xl opacity-70 shadow-2xl"
          data-aos="fade-left"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
    </header>
  )
}
