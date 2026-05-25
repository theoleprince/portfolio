import { motion } from 'framer-motion'
import ProjectsSection from '../components/Projects'

export default function ProjectsPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="pt-20"
    >
      {/* Page hero */}
      <section className="relative pt-16 pb-2 bg-[#050d1a] grid-bg overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(26,111,255,0.1) 0%, transparent 60%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1a6fff]/25 bg-[#1a6fff]/8 text-xs text-[#1a6fff] font-medium mb-5">
              Portfolio
            </div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-[#f0f4ff] mb-5">
              Mes <span className="text-[#1a6fff]">Projets</span>
            </h1>
            <p className="text-[#8a9ab8] text-lg max-w-2xl mx-auto">
              Solutions enterprise déployées en production dans des secteurs critiques — banque, assurance, santé, e-commerce
            </p>
          </motion.div>
        </div>
      </section>

      <ProjectsSection showFilters={true} />
    </motion.main>
  )
}
