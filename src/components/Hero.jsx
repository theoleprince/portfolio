import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone, MapPin, ChevronDown, Download } from 'lucide-react'
import { SiGithub, SiGitlab, SiWhatsapp } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'

// ── À mettre à jour avec tes vrais profils ──────────────────────────────────
const GITHUB_URL  = 'https://github.com/theoleprince'
const GITLAB_URL  = 'https://gitlab.com/theoleprince'
const LINKEDIN_URL = 'https://linkedin.com/in/theophane-jiozang'
const WHATSAPP_URL = 'https://wa.me/237655489186'
// ────────────────────────────────────────────────────────────────────────────

const containerVar = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.2 } },
}

const itemVar = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const stats = [
  { value: '5+', label: 'ans Angular' },
  { value: '3+', label: 'ans Spring Boot' },
  { value: '10+', label: 'Apps livrées' },
  { value: '14', label: 'pays couverts' },
]

const tags = ['Angular', 'Spring Boot', 'TypeScript', 'Docker', 'IA', 'RxJS']

const socialLinks = [
  { icon: SiGithub,   href: GITHUB_URL,   label: 'GitHub' },
  { icon: SiGitlab,   href: GITLAB_URL,   label: 'GitLab' },
  { icon: FaLinkedinIn, href: LINKEDIN_URL, label: 'LinkedIn' },
  { icon: SiWhatsapp, href: WHATSAPP_URL, label: 'WhatsApp' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-bg bg-[#050d1a]">
      {/* Radial gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 20%, rgba(26,111,255,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(26,111,255,0.07) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 xl:gap-20 items-center">

          {/* ── Left column ── */}
          <motion.div variants={containerVar} initial="hidden" animate="visible">
            {/* Availability badge */}
            <motion.div variants={itemVar} className="inline-flex items-center gap-2.5 px-4 py-2 mb-8 rounded-full border border-[#1a6fff]/25 bg-[#1a6fff]/8 text-sm text-[#8a9ab8]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              Disponible · Ouvert à la mobilité internationale
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVar}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[#f0f4ff] leading-[1.08] mb-6"
            >
              Développeur
              <br />
              <span className="text-[#1a6fff]">Fullstack</span>
              <br />
              Senior
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={itemVar} className="text-[#8a9ab8] text-lg font-medium mb-3">
              Angular · Spring Boot · Intégration IA
            </motion.p>

            <motion.p variants={itemVar} className="text-[#8a9ab8] leading-relaxed mb-10 max-w-lg text-[0.95rem]">
              Architecte de solutions enterprise critiques en Afrique et au-delà.
              5+ ans sur des projets bancaires, assurantiels et de santé couvrant 14 pays.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVar} className="flex flex-wrap gap-3 mb-8">
              <Link
                to="/projects"
                aria-label="Voir mes projets"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#1a6fff] text-white font-semibold rounded-xl hover:bg-[#3d8bff] transition-all duration-200 group shadow-xl shadow-[#1a6fff]/25"
              >
                Voir mes projets
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              {/* CV download — placer cv.pdf dans le dossier public/ */}
              <a
                href={`${import.meta.env.BASE_URL}cv.pdf`}
                download="CV_Jiozang_Theophane.pdf"
                aria-label="Télécharger le CV"
                className="inline-flex items-center gap-2.5 px-6 py-3 border border-[#1a6fff]/40 text-[#1a6fff] font-semibold rounded-xl hover:bg-[#1a6fff]/10 transition-all duration-200 group"
              >
                <Download size={16} />
                Télécharger CV
              </a>
            </motion.div>

            {/* Social links row */}
            <motion.div variants={itemVar} className="flex items-center gap-3 mb-12">
              <span className="text-[#8a9ab8]/50 text-xs">Retrouve-moi sur</span>
              <div className="flex gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 bg-[#112240] border border-white/[0.06] rounded-lg flex items-center justify-center text-[#8a9ab8] hover:text-[#1a6fff] hover:border-[#1a6fff]/30 hover:bg-[#1a6fff]/8 transition-all duration-200"
                  >
                    <s.icon size={15} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVar} className="grid grid-cols-4 gap-2 sm:gap-6 max-w-md">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-[#1a6fff]">{s.value}</div>
                  <div className="text-[#8a9ab8] text-[0.65rem] sm:text-xs mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: floating card (md+) ── */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden md:flex justify-end"
          >
            <div className="relative">
              {/* Glow blobs */}
              <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-[#1a6fff]/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-[#1a6fff]/6 blur-3xl pointer-events-none" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-[300px] xl:w-[320px] bg-[#112240] border border-white/[0.07] rounded-2xl p-7 shadow-2xl shadow-black/40"
              >
                {/* Photo + name */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#1a6fff]/30 shadow-lg shadow-[#1a6fff]/20 flex-shrink-0">
                    <img
                      src={`${import.meta.env.BASE_URL}theophane.jpeg`}
                      alt="Jiozang Théophane"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-[#1a6fff] to-[#0b46c8] flex items-center justify-center text-white font-display text-2xl font-bold">JT</div>'
                      }}
                    />
                  </div>
                  <div>
                    <div className="text-[#f0f4ff] font-semibold text-base">Jiozang Théophane</div>
                    <div className="text-[#8a9ab8] text-sm mt-0.5">Fullstack Senior Dev</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-[#1a6fff]/12 text-[#1a6fff] text-xs rounded-lg border border-[#1a6fff]/18 font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Contact info */}
                <div className="space-y-2.5 text-sm mb-6">
                  <div className="flex items-center gap-3 text-[#8a9ab8]">
                    <div className="w-7 h-7 bg-[#1a6fff]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={12} className="text-[#1a6fff]" />
                    </div>
                    <span className="truncate text-xs">jiozangtheophane@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#8a9ab8]">
                    <div className="w-7 h-7 bg-[#1a6fff]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={12} className="text-[#1a6fff]" />
                    </div>
                    <span className="text-xs">+237 655 48 91 86</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#8a9ab8]">
                    <div className="w-7 h-7 bg-[#1a6fff]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={12} className="text-[#1a6fff]" />
                    </div>
                    <span className="text-xs">Yaoundé, Cameroun</span>
                  </div>
                </div>

                {/* Social links in card */}
                <div className="flex gap-2 mb-6">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-8 h-8 bg-[#0b1a2e] border border-white/[0.05] rounded-lg flex items-center justify-center text-[#8a9ab8] hover:text-[#1a6fff] hover:border-[#1a6fff]/25 transition-all duration-200"
                    >
                      <s.icon size={13} />
                    </a>
                  ))}
                </div>

                {/* Status */}
                <div className="flex items-center gap-2.5 px-4 py-2.5 bg-green-500/8 rounded-xl border border-green-500/18">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <span className="text-green-400 text-xs font-medium">Disponible · CDI & Remote</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#8a9ab8]/60 text-xs"
        >
          <span>Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
