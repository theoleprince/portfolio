import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Skills from '../components/Skills'
import ProjectsSection from '../components/Projects'
import CallToAction from '../components/CallToAction'

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Hero />
      <Services />
      <Skills />
      <ProjectsSection />
      <CallToAction />
    </motion.main>
  )
}
