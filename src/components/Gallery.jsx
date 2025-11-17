import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const photos = [
  'https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506157786153-1d8a70a2d2d1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1464375117522-1311d6a5b81a?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506157771626-c312cb7f4f40?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop'
]

export default function Gallery() {
  useEffect(() => { AOS.refresh() }, [])

  return (
    <section className="bg-zinc-950 text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10" data-aos="fade-up">Polaroid Gallery</h2>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((src, i) => (
            <div key={i}
              className="relative mx-auto w-72 bg-white p-3 pt-3 shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-300"
              style={{ transform: `rotate(${(i%2 ? -5 : 5)}deg)` }}
              data-aos="fade-up"
              data-aos-delay={i*80}
            >
              <div className="bg-black h-60 overflow-hidden">
                <img src={src} alt={`Polaroid ${i+1}`} className="h-full w-full object-cover" />
              </div>
              <div className="mt-3 h-10 bg-white" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-300 rotate-45" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
