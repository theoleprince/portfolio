import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Experience from '../components/Experience'
import { Code2, Globe2, BarChart3, GraduationCap, Download } from 'lucide-react'
import { SiGithub, SiGitlab, SiWhatsapp } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'

const GITHUB_URL   = 'https://github.com/theoleprince'
const GITLAB_URL   = 'https://gitlab.com/theoleprince'
const LINKEDIN_URL = 'https://linkedin.com/in/theophane-jiozang'
const WHATSAPP_URL = 'https://wa.me/237655489186'

const highlights = [
  { icon: Code2,        title: '5+ ans d\'expertise',  desc: 'Angular · Spring Boot · Architecture enterprise multi-modules' },
  { icon: Globe2,       title: '14 pays couverts',      desc: 'Solutions déployées en Afrique francophone (CIMA)' },
  { icon: BarChart3,    title: '10+ apps livrées',      desc: 'Projets bancaires, assurance, santé, e-commerce' },
  { icon: GraduationCap,title: 'Master IA',             desc: 'Université de Dschang · Intelligence Artificielle' },
]

const education = [
  { degree: 'Master Intelligence Artificielle', school: 'Université de Dschang', year: '2021–2022', level: 'Bac+5' },
  { degree: 'Maîtrise Informatique / IA',       school: 'Université de Dschang', year: '2020–2021', level: 'Bac+4' },
  { degree: 'Licence Informatique Fondamentale',school: 'Université de Dschang', year: '2016–2020', level: 'Bac+3' },
  { degree: 'Baccalauréat Série C',             school: 'Lycée Bilingue de Dschang',year: '2015–2016', level: 'Bac' },
]

const languages = [
  { name: 'Français', level: 'Langue maternelle',           percent: 100 },
  { name: 'Anglais',  level: 'Professionnel · En progression', percent: 65 },
]

const socialLinks = [
  { icon: SiGithub,   href: GITHUB_URL,   label: 'GitHub' },
  { icon: SiGitlab,   href: GITLAB_URL,   label: 'GitLab' },
  { icon: FaLinkedinIn, href: LINKEDIN_URL, label: 'LinkedIn' },
  { icon: SiWhatsapp, href: WHATSAPP_URL, label: 'WhatsApp' },
]

export default function About() {
  const eduRef  = useRef(null)
  const eduInView = useInView(eduRef, { once: true })
  const langRef  = useRef(null)
  const langInView = useInView(langRef, { once: true })

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      {/* ── Hero avec photo ── */}
      <section className="relative pt-32 pb-20 bg-[#050d1a] grid-bg overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(26,111,255,0.1) 0%, transparent 65%)' }}
        />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl bg-[#1a6fff]/20 blur-2xl scale-110 pointer-events-none" />
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-[#1a6fff]/30 shadow-2xl shadow-[#1a6fff]/20">
                  <img
                    src="/theophane.jpeg"
                    alt="Jiozang Théophane — Développeur Fullstack Senior"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.className += ' bg-gradient-to-br from-[#1a6fff] to-[#0b46c8] flex items-center justify-center'
                      e.target.parentElement.innerHTML = '<span class="text-white font-display text-5xl font-bold">JT</span>'
                    }}
                  />
                </div>
                {/* Available badge on photo */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 bg-[#0b1a2e] border border-green-500/25 rounded-full shadow-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-medium">Disponible</span>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex-1 text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1a6fff]/25 bg-[#1a6fff]/8 text-xs text-[#1a6fff] font-medium mb-4">
                À propos
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#f0f4ff] mb-2">
                Jiozang <span className="text-[#1a6fff]">Théophane</span>
              </h1>
              <p className="text-[#8a9ab8] text-base font-medium mb-4">
                Développeur Fullstack Senior · Angular · Spring Boot · IA
              </p>
              <p className="text-[#8a9ab8] text-[0.95rem] leading-relaxed mb-6 max-w-2xl">
                5+ ans d'expérience sur des projets enterprise critiques en Afrique.
                Architecte de solutions couvrant 14 pays africains francophones dans des secteurs
                exigeants : assurance, banque, santé et e-commerce international.
                Passionné par la qualité du code, les architectures propres et l'intégration
                de l'IA dans des applications à fort impact.
              </p>

              {/* Social + CV */}
              <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 bg-[#112240] border border-white/[0.06] rounded-xl flex items-center justify-center text-[#8a9ab8] hover:text-[#1a6fff] hover:border-[#1a6fff]/30 transition-all duration-200"
                  >
                    <s.icon size={16} />
                  </a>
                ))}
                <a
                  href="/cv.pdf"
                  download="CV_Jiozang_Theophane.pdf"
                  aria-label="Télécharger le CV"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#1a6fff]/35 text-[#1a6fff] text-sm font-semibold rounded-xl hover:bg-[#1a6fff]/10 transition-all duration-200"
                >
                  <Download size={14} />
                  Télécharger CV
                </a>
              </div>
            </motion.div>
          </div>

          {/* Highlights grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.4 }}
                className="flex items-start gap-3 p-4 bg-[#112240] border border-white/[0.06] rounded-2xl hover:border-[#1a6fff]/20 transition-colors"
              >
                <div className="w-9 h-9 bg-[#1a6fff]/10 border border-[#1a6fff]/18 rounded-lg flex items-center justify-center flex-shrink-0">
                  <h.icon size={17} className="text-[#1a6fff]" />
                </div>
                <div>
                  <div className="text-[#f0f4ff] font-semibold text-sm mb-0.5">{h.title}</div>
                  <div className="text-[#8a9ab8] text-xs leading-relaxed">{h.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Formation ── */}
      <section ref={eduRef} className="py-20 bg-[#0b1a2e]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={eduInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1a6fff]/25 bg-[#1a6fff]/8 text-xs text-[#1a6fff] font-medium mb-4">
              Formation
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#f0f4ff]">
              Parcours académique
            </h2>
          </motion.div>
          <div className="space-y-3">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                animate={eduInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="flex items-center justify-between p-5 bg-[#112240] border border-white/[0.06] rounded-2xl hover:border-[#1a6fff]/18 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#1a6fff]/10 border border-[#1a6fff]/18 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1a6fff] text-[0.6rem] font-bold">{edu.level}</span>
                  </div>
                  <div>
                    <div className="text-[#f0f4ff] font-medium group-hover:text-[#1a6fff] transition-colors">{edu.degree}</div>
                    <div className="text-[#8a9ab8] text-sm">{edu.school}</div>
                  </div>
                </div>
                <div className="text-[#1a6fff] text-sm font-medium whitespace-nowrap ml-4">{edu.year}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Langues ── */}
      <section ref={langRef} className="py-16 bg-[#050d1a]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={langInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1a6fff]/25 bg-[#1a6fff]/8 text-xs text-[#1a6fff] font-medium mb-4">
              Langues
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#f0f4ff]">
              Compétences linguistiques
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5">
            {languages.map((lang, i) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 20 }}
                animate={langInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 bg-[#112240] border border-white/[0.06] rounded-2xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#f0f4ff] font-semibold">{lang.name}</span>
                  <span className="px-3 py-1 bg-[#1a6fff]/10 text-[#1a6fff] text-xs rounded-full border border-[#1a6fff]/18">
                    {lang.level}
                  </span>
                </div>
                <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={langInView ? { width: `${lang.percent}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: i * 0.1 + 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #1a6fff, #3d8bff)' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <Experience />
    </motion.main>
  )
}
