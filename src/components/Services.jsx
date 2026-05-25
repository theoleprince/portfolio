import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layers, Server, Brain, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Layers,
    title: 'Architecture Frontend',
    subtitle: 'Angular 14+ · TypeScript · RxJS',
    description:
      'Conception et développement de SPAs enterprise complexes. Architecture modulaire multi-sous-applications, design systems partagés, state management RxJS/NgRx, lazy-loading et performance.',
    points: [
      'Architectures multi-modules Angular',
      'Design systems & composants réutilisables',
      'Optimisation performance & lazy-loading',
      'Tests unitaires & E2E',
    ],
    accent: '#1a6fff',
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    subtitle: 'Spring Boot · Docker · PostgreSQL',
    description:
      'Développement d\'APIs REST robustes et sécurisées. Authentification JWT, microservices conteneurisés, CI/CD GitLab et déploiement Docker pour des environnements bancaires et de production critique.',
    points: [
      'APIs REST Spring Boot / JWT',
      'Sécurité Spring Security',
      'Docker · GitLab CI/CD',
      'Hibernate/JPA · PostgreSQL',
    ],
    accent: '#1a6fff',
  },
  {
    icon: Brain,
    title: 'Intégration IA',
    subtitle: 'Python · LLM · Automatisation',
    description:
      'Intégration de modèles de langage et d\'APIs IA dans des applications métier. Synthèse vocale, interprétation multilingue, agents autonomes et automatisation de workflows intelligents.',
    points: [
      'Intégration LLM (OpenAI, Anthropic)',
      'Python · LangChain · CrewAI',
      'Traitement vocal & multilingue',
      'Automatisation n8n / Make',
    ],
    accent: '#1a6fff',
  },
]

export default function Services() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section className="py-24 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1a6fff]/25 bg-[#1a6fff]/8 text-xs text-[#1a6fff] font-medium mb-5">
            Ce que je fais
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#f0f4ff] mb-4">
            Services & <span className="text-[#1a6fff]">Expertise</span>
          </h2>
          <p className="text-[#8a9ab8] max-w-lg mx-auto">
            De l'architecture frontend à l'intégration IA, je livre des solutions enterprise complètes et déployables
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((s, i) => {
            const ref = useRef(null)
            const inView = useInView(ref, { once: true, margin: '-50px' })
            return (
              <motion.div
                key={s.title}
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative bg-[#112240] border border-white/[0.06] rounded-2xl p-7 hover:border-[#1a6fff]/25 transition-all duration-300 hover:shadow-2xl hover:shadow-[#1a6fff]/8 overflow-hidden"
              >
                {/* Top line hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl overflow-hidden">
                  <div
                    className="h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(90deg, transparent, #1a6fff, transparent)' }}
                  />
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-[#1a6fff]/10 border border-[#1a6fff]/18 rounded-xl flex items-center justify-center mb-6">
                  <s.icon size={22} className="text-[#1a6fff]" />
                </div>

                <h3 className="text-[#f0f4ff] font-semibold text-lg mb-1 group-hover:text-[#1a6fff] transition-colors">
                  {s.title}
                </h3>
                <div className="text-[#1a6fff] text-xs font-medium opacity-70 mb-4">{s.subtitle}</div>
                <p className="text-[#8a9ab8] text-sm leading-relaxed mb-6">{s.description}</p>

                <ul className="space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-[#8a9ab8] text-sm">
                      <span className="text-[#1a6fff] font-bold mt-0.5 flex-shrink-0">›</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Link to projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link
            to="/projects"
            aria-label="Voir mes réalisations"
            className="inline-flex items-center gap-2 text-[#1a6fff] text-sm font-medium hover:text-[#3d8bff] transition-colors group"
          >
            Voir mes réalisations
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
