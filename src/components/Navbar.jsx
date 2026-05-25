import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { SiGithub, SiGitlab } from 'react-icons/si'

// ── À mettre à jour ─────────────────────────────────────────────────────────
const GITHUB_URL = 'https://github.com/theoleprince'
const GITLAB_URL = 'https://gitlab.com/theoleprince'
// ────────────────────────────────────────────────────────────────────────────

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/about' },
  { name: 'Projets', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050d1a]/90 backdrop-blur-md border-b border-white/[0.06] shadow-xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link
          to="/"
          className="font-display text-xl font-bold text-[#f0f4ff] tracking-tight flex-shrink-0"
          aria-label="Accueil"
        >
          J.<span className="text-[#1a6fff]">Théophane</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              aria-label={link.name}
              className={`relative text-sm font-medium transition-colors duration-200 group ${
                location.pathname === link.path
                  ? 'text-[#f0f4ff]'
                  : 'text-[#8a9ab8] hover:text-[#f0f4ff]'
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-[#1a6fff] transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}

          {/* Divider */}
          <div className="w-px h-5 bg-white/[0.08]" />

          {/* GitHub + GitLab icons */}
          <div className="flex items-center gap-2">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil GitHub"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-[#8a9ab8] hover:text-[#f0f4ff] hover:bg-white/[0.06] transition-all duration-200"
            >
              <SiGithub size={16} />
            </a>
            <a
              href={GITLAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil GitLab"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-[#8a9ab8] hover:text-[#f0f4ff] hover:bg-white/[0.06] transition-all duration-200"
            >
              <SiGitlab size={16} />
            </a>
          </div>

          {/* CV download */}
          <a
            href={`${import.meta.env.BASE_URL}cv.pdf`}
            download="CV_Jiozang_Theophane.pdf"
            aria-label="Télécharger le CV"
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#1a6fff]/35 text-[#1a6fff] text-sm font-medium rounded-lg hover:bg-[#1a6fff]/10 transition-all duration-200"
          >
            <Download size={13} />
            CV
          </a>

          {/* Contact CTA */}
          <Link
            to="/contact"
            aria-label="Me contacter"
            className="px-4 py-2 bg-[#1a6fff] text-white text-sm font-semibold rounded-lg hover:bg-[#3d8bff] transition-colors duration-200 shadow-lg shadow-[#1a6fff]/20"
          >
            Me contacter
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#f0f4ff] p-1"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#0b1a2e] border-b border-white/[0.06]"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-label={link.name}
                  className={`block py-3 text-sm font-medium border-b border-white/[0.04] transition-colors ${
                    location.pathname === link.path ? 'text-[#1a6fff]' : 'text-[#8a9ab8] hover:text-[#f0f4ff]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-3 pt-4 pb-2">
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  className="w-9 h-9 bg-[#112240] border border-white/[0.06] rounded-lg flex items-center justify-center text-[#8a9ab8] hover:text-[#f0f4ff] transition-colors">
                  <SiGithub size={15} />
                </a>
                <a href={GITLAB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitLab"
                  className="w-9 h-9 bg-[#112240] border border-white/[0.06] rounded-lg flex items-center justify-center text-[#8a9ab8] hover:text-[#f0f4ff] transition-colors">
                  <SiGitlab size={15} />
                </a>
                <a href={`${import.meta.env.BASE_URL}cv.pdf`} download="CV_Jiozang_Theophane.pdf" aria-label="Télécharger CV"
                  className="flex-1 flex items-center justify-center gap-2 py-2 border border-[#1a6fff]/35 text-[#1a6fff] text-sm font-medium rounded-lg">
                  <Download size={13} /> Télécharger CV
                </a>
              </div>
              <Link to="/contact" aria-label="Me contacter"
                className="block mt-2 px-5 py-2.5 bg-[#1a6fff] text-white text-sm font-semibold rounded-lg text-center">
                Me contacter
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
