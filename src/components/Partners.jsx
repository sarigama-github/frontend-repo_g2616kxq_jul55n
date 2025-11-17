import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const logos = Array.from({ length: 20 }).map((_, i) => `https://dummyimage.com/300x120/0ea5e9/ffffff&text=Club+${i+1}`)

export default function Partners() {
  useEffect(() => { AOS.refresh() }, [])
  return (
    <section className="bg-black text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10" data-aos="fade-up">Club Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          {logos.map((src, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur" data-aos="zoom-in" data-aos-delay={i*50}>
              <img src={src} alt={`Club ${i+1}`} className="mx-auto h-12 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
