import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail } from 'lucide-react'
import { SiWhatsapp } from 'react-icons/si'

export default function CallToAction() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-24 bg-[#0b1a2e] relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(26,111,255,0.08) 0%, transparent 70%)' }}
      />
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-green-500/25 bg-green-500/8 text-xs text-green-400 font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Disponible immédiatement · CDI & Remote
          </div>

          {/* Heading */}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f0f4ff] mb-6 leading-tight">
            Prêt à travailler
            <br />
            <span className="text-[#1a6fff]">ensemble ?</span>
          </h2>

          <p className="text-[#8a9ab8] text-lg mb-12 max-w-2xl mx-auto">
            Disponible pour un CDI, des missions freelance ou une relocalisation internationale.
            Réponse garantie sous 24h.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center mb-14">
            <Link
              to="/contact"
              aria-label="Me contacter"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#1a6fff] text-white font-semibold rounded-xl hover:bg-[#3d8bff] transition-all duration-200 shadow-xl shadow-[#1a6fff]/25 group"
            >
              <Mail size={17} />
              Me contacter
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/237655489186"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter via WhatsApp"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-green-600/15 text-green-400 border border-green-500/25 font-semibold rounded-xl hover:bg-green-600/25 transition-all duration-200"
            >
              <SiWhatsapp size={17} />
              WhatsApp
            </a>
          </div>

          {/* Mini stats */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { v: '5+', l: 'ans d\'expérience' },
              { v: '14', l: 'pays couverts' },
              { v: '10+', l: 'apps livrées' },
              { v: '< 24h', l: 'temps de réponse' },
            ].map(s => (
              <div key={s.l} className="text-center">
                <div className="font-display text-2xl font-bold text-[#1a6fff]">{s.v}</div>
                <div className="text-[#8a9ab8] text-xs mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
