import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiAngular, SiSpring, SiTypescript, SiDocker,
  SiIonic, SiPython, SiPostgresql, SiReactivex,
  SiReact, SiLaravel, SiHtml5, SiSass, SiBootstrap,
  SiGit, SiGitlab, SiGithub,
} from 'react-icons/si'

const skills = [
  { name: 'Angular 14+', level: 95, label: 'Expert · 5 ans',           Icon: SiAngular,    color: '#DD0031' },
  { name: 'Spring Boot',  level: 80, label: 'Confirmé · 3 ans',         Icon: SiSpring,     color: '#6DB33F' },
  { name: 'TypeScript',   level: 88, label: 'Avancé',                   Icon: SiTypescript, color: '#3178C6' },
  { name: 'Docker / CI',  level: 80, label: 'GitLab CI/CD',             Icon: SiDocker,     color: '#2496ED' },
  { name: 'RxJS / NgRx',  level: 82, label: 'Avancé',                   Icon: SiReactivex,  color: '#B7178C' },
  { name: 'Ionic / Mobile', level: 75, label: 'Ionic 6 · Capacitor 3', Icon: SiIonic,      color: '#3880FF' },
  { name: 'Python / IA',  level: 70, label: 'Intégration IA · ML',      Icon: SiPython,     color: '#3776AB' },
  { name: 'PostgreSQL',   level: 76, label: 'Hibernate · JPA',          Icon: SiPostgresql, color: '#336791' },
]

const otherSkills = [
  { name: 'React',      Icon: SiReact,     color: '#61DAFB' },
  { name: 'Laravel',    Icon: SiLaravel,   color: '#FF2D20' },
  { name: 'HTML5/CSS3', Icon: SiHtml5,     color: '#E34F26' },
  { name: 'Sass',       Icon: SiSass,      color: '#CC6699' },
  { name: 'Bootstrap',  Icon: SiBootstrap, color: '#7952B3' },
  { name: 'Git',        Icon: SiGit,       color: '#F05032' },
  { name: 'GitLab',     Icon: SiGitlab,    color: '#FC6D26' },
  { name: 'GitHub',     Icon: SiGithub,    color: '#f0f4ff' },
]

function SkillBar({ skill, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${skill.color}18`, border: `1px solid ${skill.color}30` }}
          >
            <skill.Icon size={14} style={{ color: skill.color }} />
          </div>
          <span className="text-[#f0f4ff] font-medium text-sm">{skill.name}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#8a9ab8] text-xs hidden sm:block">{skill.label}</span>
          <span className="text-[#1a6fff] font-bold text-sm w-8 text-right">{skill.level}%</span>
        </div>
      </div>
      <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden ml-9">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.4, delay: index * 0.07 + 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, #1a6fff, ${skill.color}80)` }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })
  const otherRef = useRef(null)
  const otherInView = useInView(otherRef, { once: true, margin: '-40px' })

  return (
    <section id="skills" className="py-24 bg-[#0b1a2e]">
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
            Compétences techniques
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#f0f4ff] mb-4">
            Stack & <span className="text-[#1a6fff]">Expertise</span>
          </h2>
          <p className="text-[#8a9ab8] max-w-md mx-auto">
            5+ ans de développement sur des projets enterprise critiques
          </p>
        </motion.div>

        {/* Skill bars */}
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-7 mb-16">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* Other skills */}
        <div ref={otherRef}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={otherInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center text-[#8a9ab8] text-xs uppercase tracking-wider mb-6"
          >
            Également maîtrisé
          </motion.p>
          <div className="flex flex-wrap gap-3 justify-center">
            {otherSkills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={otherInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex items-center gap-2 px-4 py-2 bg-[#112240] border border-white/[0.06] text-[#8a9ab8] text-sm rounded-xl hover:border-[#1a6fff]/25 hover:text-[#f0f4ff] transition-all duration-200 group"
              >
                <s.Icon size={14} style={{ color: s.color }} className="opacity-80 group-hover:opacity-100 transition-opacity" />
                {s.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
