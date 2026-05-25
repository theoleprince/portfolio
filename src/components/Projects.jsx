import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  ExternalLink, Layers,
  Package, Shield, Landmark, Bot, Brain, Heart, ShoppingBag,
  ShoppingCart, BarChart3, Building2, KeyRound, Users, Activity,
} from 'lucide-react'

// ── DATA ─────────────────────────────────────────────────────────────────────

const auroreModules = [
  { name: 'Gescom',   desc: 'Gestion commerciale & POS',   Icon: ShoppingCart },
  { name: 'Compta',   desc: 'Comptabilité SYSCOHADA',       Icon: BarChart3 },
  { name: 'Immo',     desc: 'Immobilisations & patrimoine', Icon: Building2 },
  { name: 'Licence',  desc: 'Contrôle licences',            Icon: KeyRound, link: 'https://licence.aurorecloud.com' },
  { name: 'Paie',     desc: 'Paie & RH',                    Icon: Users },
  { name: 'HIS',      desc: 'Gestion hospitalière',         Icon: Activity },
]

const projects = [
  // ── ADVANCE-IT ────────────────────────────────────────────────
  {
    key: 'aurore-erp',
    wide: true,
    Icon: Package,
    title: 'Aurore ERP',
    subtitle: 'Suite ERP Multi-Modules · Advance-IT Group',
    company: 'Advance-IT',
    description:
      'Architecture frontend principale d\'une suite ERP complète dédiée aux entreprises africaines. Développement parallèle multi-équipes via une architecture modulaire Angular avancée. Chaque module est une sous-application Angular indépendante partageant un socle commun (auth JWT, design system, state management RxJS/NgRx).',
    tags: ['Angular 14+', 'Spring Boot', 'TypeScript', 'Docker', 'GitLab CI/CD', 'RxJS'],
    link: 'https://aurorecloud.com',
    featured: true,
  },
  {
    key: 'ivindo',
    Icon: Shield,
    title: 'IVINDO — CIMA',
    subtitle: '14 Pays · 400+ Sociétés',
    company: 'Advance-IT',
    description:
      'Supervision prudentielle de 400+ sociétés d\'assurances dans 14 pays africains francophones. 5 modules livrés : missions, rapports d\'audit, notes de synthèse, sessions CRCA, scoring prudentiel.',
    tags: ['Angular', 'Spring Boot', 'Docker', 'JWT'],
    link: null,
    featured: true,
  },
  {
    key: 'digeste',
    Icon: Landmark,
    title: 'Digeste',
    subtitle: 'Banque Atlantique du Cameroun',
    company: 'Advance-IT',
    description:
      'SPA Angular pour ordonnancement budgétaire et gestion opérationnelle bancaire : missions, congés, fournisseurs. 5 modules déployés en production bancaire via Docker.',
    tags: ['Angular', 'Spring Boot', 'Docker', 'SQL'],
    link: null,
  },

  // ── NOVALITIX ─────────────────────────────────────────────────
  {
    key: 'mlo',
    Icon: Bot,
    title: 'MLO API',
    subtitle: 'Plateforme IA · Oratoria & Interpretaria',
    company: 'Novalitix',
    description:
      'Plateforme API IA avec module Oratoria (synthèse et traitement vocal) et Interpretaria (interprétation multilingue temps réel). Backend Spring Boot + modèles Python.',
    tags: ['Spring Boot', 'Python', 'IA', 'REST API'],
    link: null,
    featured: true,
  },
  {
    key: 'novalitix',
    Icon: Brain,
    title: 'Novalitix Platform',
    subtitle: 'Agents IA & Automatisation',
    company: 'Novalitix',
    description:
      'Plateforme d\'agents IA orientés métier avec orchestration multi-agents (CrewAI), automatisation de workflows (n8n, Make, Zapier) et intégration LLM (OpenAI, Anthropic, Mistral).',
    tags: ['Angular', 'Spring Boot', 'Python', 'IA'],
    link: 'https://novalitix.com',
  },
  {
    key: 'meetme',
    Icon: Heart,
    title: 'YouMeetNMatch',
    subtitle: 'Application de Rencontre',
    company: 'Novalitix',
    description:
      'Application de rencontre moderne avec messagerie temps réel, matching intelligent, flux live et profils dynamiques.',
    tags: ['Angular', 'Spring Boot', 'WebSocket'],
    link: 'https://youmeetnmatch.com',
  },

  // ── AUTRES ────────────────────────────────────────────────────
  {
    key: 'mapinoo',
    Icon: ShoppingBag,
    title: 'Mapinoo',
    subtitle: 'E-Commerce · France · iOS & Android',
    company: 'DIMSOFT',
    description:
      'E-commerce cross-platform avec paiement par tranches, live en France sur iOS & Android. Première livraison internationale.',
    tags: ['Ionic 6', 'Angular', 'Spring Boot', 'Capacitor'],
    link: null,
  },
]

const filters = ['Tous', 'Advance-IT', 'Novalitix', 'Angular', 'Spring Boot', 'IA', 'Mobile']

const filterFn = {
  'Tous': () => true,
  'Advance-IT': (p) => p.company === 'Advance-IT',
  'Novalitix': (p) => p.company === 'Novalitix',
  'Angular': (p) => p.tags.some(t => t.toLowerCase().includes('angular') || t.toLowerCase().includes('ionic')),
  'Spring Boot': (p) => p.tags.some(t => t.toLowerCase().includes('spring')),
  'IA': (p) => p.tags.some(t => ['IA', 'Python'].includes(t)),
  'Mobile': (p) => p.tags.some(t => ['Ionic 6', 'Capacitor'].includes(t)),
}

// ── WIDE CARD (Aurore ERP) ────────────────────────────────────────────────────

function AuroreCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className="group relative md:col-span-2 lg:col-span-3 bg-[#112240] border border-white/[0.06] rounded-2xl p-7 overflow-hidden hover:border-[#1a6fff]/25 transition-all duration-300 hover:shadow-2xl hover:shadow-[#1a6fff]/8"
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl overflow-hidden">
        <div
          className="h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'linear-gradient(90deg, transparent, #1a6fff 40%, #3d8bff 60%, transparent)' }}
        />
      </div>

      <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
        {/* Left */}
        <div>
          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/[0.04] border border-white/[0.05] rounded-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1a6fff]" />
              <span className="text-[#8a9ab8] text-[0.65rem] font-medium">{project.company}</span>
            </div>
            <div className="px-2.5 py-0.5 bg-[#1a6fff]/15 text-[#1a6fff] text-[0.62rem] font-bold rounded-full border border-[#1a6fff]/25 uppercase tracking-wider">
              Featured
            </div>
          </div>

          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-[#1a6fff]/10 border border-[#1a6fff]/18 rounded-xl flex items-center justify-center flex-shrink-0">
              <project.Icon size={24} className="text-[#1a6fff]" />
            </div>
            <div>
              <h3 className="text-[#f0f4ff] font-semibold text-xl mb-1 group-hover:text-[#1a6fff] transition-colors duration-200">
                {project.title}
              </h3>
              <div className="text-[#1a6fff] text-xs font-medium opacity-80">{project.subtitle}</div>
            </div>
          </div>

          <p className="text-[#8a9ab8] text-sm leading-relaxed mb-5 max-w-2xl">{project.description}</p>

          {/* Stack tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="px-2.5 py-1 bg-[#0b1a2e] text-[#8a9ab8] text-xs rounded-md border border-white/[0.04] group-hover:border-white/[0.08] transition-colors">
                {tag}
              </span>
            ))}
          </div>

          {/* Link */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Voir ${project.title} en ligne`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a6fff]/10 border border-[#1a6fff]/25 text-[#1a6fff] text-sm font-medium rounded-xl hover:bg-[#1a6fff] hover:text-white transition-all duration-200"
            >
              <ExternalLink size={14} />
              {project.link.replace('https://', '')}
            </a>
          )}
        </div>

        {/* Right: modules grid */}
        <div className="min-w-[280px]">
          <div className="flex items-center gap-2 mb-4">
            <Layers size={14} className="text-[#1a6fff]" />
            <span className="text-[#8a9ab8] text-xs font-medium uppercase tracking-wider">
              {auroreModules.length} modules
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {auroreModules.map((mod) => (
              <div
                key={mod.name}
                className="p-3 bg-[#0b1a2e] border border-white/[0.05] rounded-xl hover:border-[#1a6fff]/20 transition-colors group/mod"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <mod.Icon size={13} className="text-[#1a6fff] flex-shrink-0" />
                    <span className="text-[#f0f4ff] text-xs font-semibold">{mod.name}</span>
                  </div>
                  {mod.link && (
                    <a
                      href={mod.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Voir module ${mod.name}`}
                      onClick={e => e.stopPropagation()}
                      className="opacity-0 group-hover/mod:opacity-100 transition-opacity"
                    >
                      <ExternalLink size={10} className="text-[#1a6fff]" />
                    </a>
                  )}
                </div>
                <div className="text-[#8a9ab8] text-[0.6rem] leading-tight">{mod.desc}</div>
                {mod.link && (
                  <div className="mt-1.5 text-[#1a6fff] text-[0.58rem] opacity-60">{mod.link.replace('https://', '')}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ── REGULAR CARD ─────────────────────────────────────────────────────────────

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className="group relative bg-[#112240] border border-white/[0.06] rounded-2xl p-7 overflow-hidden hover:border-[#1a6fff]/25 transition-all duration-300 hover:shadow-2xl hover:shadow-[#1a6fff]/8 flex flex-col"
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl overflow-hidden">
        <div
          className="h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'linear-gradient(90deg, transparent, #1a6fff, transparent)' }}
        />
      </div>

      {project.featured && (
        <div className="absolute top-5 right-5 px-2.5 py-0.5 bg-[#1a6fff]/15 text-[#1a6fff] text-[0.62rem] font-bold rounded-full border border-[#1a6fff]/25 uppercase tracking-wider">
          Featured
        </div>
      )}

      {/* Company chip */}
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/[0.04] border border-white/[0.05] rounded-lg mb-4 self-start">
        <span className="w-1.5 h-1.5 rounded-full bg-[#1a6fff]" />
        <span className="text-[#8a9ab8] text-[0.65rem] font-medium">{project.company}</span>
      </div>

      <div className="w-11 h-11 bg-[#1a6fff]/10 border border-[#1a6fff]/18 rounded-xl flex items-center justify-center mb-4">
        <project.Icon size={20} className="text-[#1a6fff]" />
      </div>

      <h3 className="text-[#f0f4ff] font-semibold text-base mb-1 group-hover:text-[#1a6fff] transition-colors duration-200 leading-snug">
        {project.title}
      </h3>
      <div className="text-[#1a6fff] text-[0.7rem] font-medium mb-3 opacity-80">{project.subtitle}</div>

      <p className="text-[#8a9ab8] text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

      <div className="flex items-end justify-between gap-3 mt-auto">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-[#0b1a2e] text-[#8a9ab8] text-[0.65rem] rounded border border-white/[0.04] group-hover:border-white/[0.08] transition-colors">
              {tag}
            </span>
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Voir le site ${project.title}`}
            onClick={e => e.stopPropagation()}
            className="w-8 h-8 bg-[#1a6fff]/10 border border-[#1a6fff]/20 rounded-lg flex items-center justify-center text-[#1a6fff] hover:bg-[#1a6fff] hover:text-white transition-all duration-200 flex-shrink-0"
          >
            <ExternalLink size={13} />
          </a>
        )}
      </div>
    </motion.div>
  )
}

// ── SECTION ───────────────────────────────────────────────────────────────────

export default function ProjectsSection({ showFilters = false }) {
  const [activeFilter, setActiveFilter] = useState('Tous')
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  const filtered = projects.filter(filterFn[activeFilter])

  return (
    <section id="projects" className="py-24 bg-[#050d1a]">
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
            Réalisations
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#f0f4ff] mb-4">
            Projets <span className="text-[#1a6fff]">sélectionnés</span>
          </h2>
          <p className="text-[#8a9ab8] max-w-lg mx-auto">
            Solutions enterprise déployées en production — banque, assurance, santé, IA, e-commerce
          </p>
          <div className="flex justify-center gap-8 mt-8">
            {[
              { v: projects.filter(p => p.company === 'Advance-IT').length, l: 'Advance-IT' },
              { v: projects.filter(p => p.company === 'Novalitix').length, l: 'Novalitix' },
              { v: projects.filter(p => p.link).length, l: 'En ligne' },
            ].map(s => (
              <div key={s.l} className="text-center">
                <div className="font-display text-2xl font-bold text-[#1a6fff]">{s.v}</div>
                <div className="text-[#8a9ab8] text-xs mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2.5 justify-center mb-12"
          >
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                aria-label={`Filtrer par ${f}`}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-[#1a6fff] text-white shadow-lg shadow-[#1a6fff]/25'
                    : 'bg-[#112240] text-[#8a9ab8] border border-white/[0.06] hover:border-[#1a6fff]/30 hover:text-[#f0f4ff]'
                }`}
              >
                {f}
                <span className={`ml-1.5 text-xs ${activeFilter === f ? 'text-white/70' : 'text-[#8a9ab8]/50'}`}>
                  ({projects.filter(filterFn[f]).length})
                </span>
              </button>
            ))}
          </motion.div>
        )}

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) =>
              project.wide ? (
                <AuroreCard key={project.key} project={project} index={i} />
              ) : (
                <ProjectCard key={project.key} project={project} index={i} />
              )
            )}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-[#8a9ab8]">Aucun projet pour ce filtre.</div>
        )}
      </div>
    </section>
  )
}
