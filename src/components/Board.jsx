import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const members = [
  {
    name: 'Ava Martinez',
    role: 'Founder & A&R',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop'
  },
  { name: 'Noah Kim', role: 'Head of Marketing', img: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Lena Fischer', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Kai Nakamura', role: 'Label Manager', img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1200&auto=format&fit=crop' }
]

export default function Board() {
  useEffect(() => { AOS.refresh() }, [])

  const animations = ['fade-up', 'zoom-in', 'flip-left', 'flip-up']

  return (
    <section className="bg-zinc-950 text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10" data-aos="fade-up">Board Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, i) => (
            <div
              key={m.name}
              className="group rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-xl"
              data-aos={animations[i % animations.length]}
              data-aos-delay={i * 100}
            >
              <div className="relative h-64">
                <img src={m.img} alt={m.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{m.name}</h3>
                <p className="text-gray-400">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
