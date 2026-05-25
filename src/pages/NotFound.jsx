import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen bg-[#050d1a] grid-bg flex items-center justify-center px-6"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(26,111,255,0.08) 0%, transparent 65%)' }}
      />
      <div className="relative text-center max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-display text-8xl sm:text-9xl font-bold text-[#1a6fff]/20 mb-4 leading-none select-none">
            404
          </div>
          <h1 className="font-display text-3xl font-bold text-[#f0f4ff] mb-4">
            Page introuvable
          </h1>
          <p className="text-[#8a9ab8] mb-10 leading-relaxed">
            Cette page n'existe pas ou a été déplacée.
            Retourne à l'accueil pour continuer.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/"
              aria-label="Retour à l'accueil"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a6fff] text-white font-semibold rounded-xl hover:bg-[#3d8bff] transition-colors"
            >
              <Home size={16} />
              Accueil
            </Link>
            <button
              onClick={() => window.history.back()}
              aria-label="Page précédente"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-[#f0f4ff] font-semibold rounded-xl hover:border-[#1a6fff]/40 hover:bg-[#1a6fff]/8 transition-all"
            >
              <ArrowLeft size={16} />
              Retour
            </button>
          </div>
        </motion.div>
      </div>
    </motion.main>
  )
}
