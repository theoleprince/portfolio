import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    company: 'Advance-IT Group',
    role: 'Développeur Frontend Senior & Architecte',
    period: 'Août 2022 – Présent',
    location: 'Yaoundé, Cameroun',
    current: true,
    missions: [
      'Aurore ERP : Architecture Angular de 6 sous-applications (Gescom, Comptabilité, Immo, Paie, Hospitalier, Licences)',
      'IVINDO (CIMA) : SPA Angular pour supervision prudentielle de 400+ sociétés d\'assurances dans 14 pays africains francophones',
      '5 modules livrés. Interface sécurisée JWT via Spring Boot, déployée via Docker',
    ],
    stack: ['Angular 14+', 'Spring Boot', 'TypeScript', 'JWT', 'Docker', 'GitLab CI/CD', 'RxJS', 'Sass'],
  },
  {
    company: 'Novalitix',
    role: 'Consultant IA & Développeur Fullstack',
    period: 'Novembre 2024 – Mars 2026',
    location: 'Yaoundé, Cameroun',
    current: false,
    missions: [
      'MLO API : Plateforme API IA avec modules Oratoria (synthèse vocale) et Interpretaria (interprétation multilingue)',
      'YouAndMeet : Fonctionnalités frontend d\'une application de rencontre avec flux temps réel',
    ],
    stack: ['Angular', 'Spring Boot', 'Python', 'IA/API', 'Docker'],
  },
  {
    company: 'Uni2Grow',
    role: 'Développeur Fullstack Freelance',
    period: 'Avril 2022 – Mai 2023',
    location: 'Dschang, Cameroun',
    current: false,
    missions: [
      'Banque Atlantique du Cameroun (Digeste) : SPA Angular pour ordonnancement budgétaire, gestion missions/congés/fournisseurs',
      'Déployée via Docker en production bancaire — 5 modules opérationnels',
      'SIGIDEP : Plateforme de gestion budgétaire de la CAPEF',
    ],
    stack: ['Angular', 'Spring Boot', 'Hibernate/JPA', 'Docker', 'SQL'],
  },
  {
    company: 'DIMSOFT / CeNKYAH',
    role: 'Développeur Mobile & Web Fullstack',
    period: 'Août 2021 – Avril 2022',
    location: 'Dschang, Cameroun',
    current: false,
    missions: [
      'Mapinoo (mapinoo.fr) : E-commerce cross-platform avec paiement par tranches',
      'Livraison internationale — live iOS & Android en France',
    ],
    stack: ['Angular', 'Ionic 6', 'Capacitor 3', 'Spring Boot', 'Hibernate/JPA', 'Sass'],
  },
  {
    company: 'Visibility_CAM SARL',
    role: 'Développeur Web',
    period: 'Mars 2019 – Juin 2022',
    location: 'Dschang, Cameroun',
    current: false,
    missions: [
      '4 applications complètes : gestion des paroisses, "Mon Permis en 1 Clic" (Play Store)',
      '"Contribuables 237", gestion associative',
    ],
    stack: ['Angular', 'Laravel', 'HTML5/CSS3', 'JavaScript', 'Git'],
  },
]

function TimelineItem({ exp, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="relative flex gap-6 pb-10 last:pb-0"
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className={`w-4 h-4 rounded-full border-2 mt-1.5 z-10 ${
            exp.current
              ? 'bg-[#1a6fff] border-[#1a6fff] shadow-lg shadow-[#1a6fff]/40'
              : 'bg-transparent border-[#1a6fff]/35'
          }`}
        />
        {index < experiences.length - 1 && (
          <div className="w-px flex-1 mt-2" style={{ background: 'linear-gradient(to bottom, rgba(26,111,255,0.35), transparent)' }} />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 bg-[#112240] border border-white/[0.06] rounded-2xl p-6 hover:border-[#1a6fff]/20 transition-colors duration-300 group">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2.5 mb-1">
              <h3 className="text-[#f0f4ff] font-semibold text-lg">{exp.company}</h3>
              {exp.current && (
                <span className="px-2.5 py-0.5 bg-[#1a6fff]/15 text-[#1a6fff] text-xs font-medium rounded-full border border-[#1a6fff]/25">
                  Actuel
                </span>
              )}
            </div>
            <div className="text-[#1a6fff] text-sm font-medium">{exp.role}</div>
          </div>
          <div className="space-y-1.5 text-right">
            <div className="flex items-center gap-1.5 text-[#8a9ab8] text-sm justify-end">
              <Calendar size={12} />
              <span>{exp.period}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#8a9ab8] text-xs justify-end">
              <MapPin size={11} />
              <span>{exp.location}</span>
            </div>
          </div>
        </div>

        <ul className="space-y-2 mb-5">
          {exp.missions.map((m, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[#8a9ab8] text-sm leading-relaxed">
              <span className="text-[#1a6fff] mt-1 flex-shrink-0 font-bold">›</span>
              {m}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.stack.map((s) => (
            <span
              key={s}
              className="px-2.5 py-1 bg-[#0b1a2e] text-[#8a9ab8] text-xs rounded-md border border-white/[0.04] group-hover:border-white/[0.07] transition-colors"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section id="experience" className="py-24 bg-[#050d1a]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1a6fff]/25 bg-[#1a6fff]/8 text-xs text-[#1a6fff] font-medium mb-5">
            Parcours professionnel
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#f0f4ff] mb-4">
            Expériences
          </h2>
          <p className="text-[#8a9ab8]">5+ ans sur des projets enterprise critiques en Afrique et au-delà</p>
        </motion.div>

        <div>
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.company + i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
