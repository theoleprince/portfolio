import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { SiWhatsapp } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

// ── Configurer sur emailjs.com ───────────────────────────────────────────────
const EMAILJS_SERVICE  = 'service_7c09a0g'
const EMAILJS_TEMPLATE = 'template_xg7r0u9'
const EMAILJS_KEY      = 'xFWejs4hEzEiMs-9j'
// ─────────────────────────────────────────────────────────────────────────────

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jiozangtheophane@gmail.com',
    href: 'mailto:jiozangtheophane@gmail.com',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+237 655 48 91 86',
    href: 'tel:+237655489186',
  },
  {
    icon: SiWhatsapp,
    label: 'WhatsApp',
    value: 'Message direct',
    href: 'https://wa.me/237655489186',
    external: true,
    accent: '#25D366',
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: 'Yaoundé, Cameroun',
    href: null,
  },
  {
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    value: 'linkedin.com/in/theophane-jiozang',
    href: 'https://linkedin.com/in/theophane-jiozang',
    external: true,
  },
]

const inputClass =
  'w-full px-4 py-3.5 bg-[#0b1a2e] border border-white/[0.07] rounded-xl text-[#f0f4ff] text-sm placeholder-[#8a9ab8]/40 focus:outline-none focus:border-[#1a6fff]/50 focus:bg-[#112240] transition-all duration-200'

export default function ContactSection() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const inView = useInView(ref, { once: true })
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, formRef.current, EMAILJS_KEY)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 6000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  return (
    <section id="contact" className="py-24 bg-[#0b1a2e]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1a6fff]/25 bg-[#1a6fff]/8 text-xs text-[#1a6fff] font-medium mb-5">
            Contact
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#f0f4ff] mb-4">
            Travaillons <span className="text-[#1a6fff]">ensemble</span>
          </h2>
          <p className="text-[#8a9ab8] max-w-lg mx-auto">
            Disponible immédiatement pour CDI, missions remote ou mobilité internationale
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 xl:gap-16">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="text-[#f0f4ff] font-display font-semibold text-xl mb-6">Coordonnées</h3>

            {contactInfo.map((item) => {
              const Tag = item.href ? 'a' : 'div'
              const accentColor = item.accent || '#1a6fff'
              return (
                <Tag
                  key={item.label}
                  {...(item.href ? {
                    href: item.href,
                    ...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
                    'aria-label': item.label,
                  } : {})}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center border flex-shrink-0 transition-colors"
                    style={{
                      backgroundColor: `${accentColor}10`,
                      borderColor: `${accentColor}20`,
                    }}
                  >
                    <item.icon size={17} style={{ color: accentColor }} />
                  </div>
                  <div>
                    <div className="text-[#8a9ab8] text-xs mb-0.5">{item.label}</div>
                    <div
                      className="text-[#f0f4ff] text-sm group-hover:text-[#1a6fff] transition-colors"
                      style={item.href ? {} : {}}
                    >
                      {item.value}
                    </div>
                  </div>
                </Tag>
              )
            })}

            {/* Availability */}
            <div className="mt-6 p-5 bg-[#112240] border border-white/[0.06] rounded-2xl">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">Disponible immédiatement</span>
              </div>
              <p className="text-[#8a9ab8] text-sm">CDI · Missions remote · Mobilité internationale</p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-[#8a9ab8] text-sm mb-2">Nom complet</label>
                  <input id="name" type="text" name="name" value={form.name} onChange={handleChange}
                    required placeholder="Votre nom" className={inputClass} aria-label="Nom complet" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#8a9ab8] text-sm mb-2">Email</label>
                  <input id="email" type="email" name="email" value={form.email} onChange={handleChange}
                    required placeholder="votre@email.com" className={inputClass} aria-label="Email" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-[#8a9ab8] text-sm mb-2">Objet</label>
                <input id="subject" type="text" name="subject" value={form.subject} onChange={handleChange}
                  required placeholder="Objet de votre message" className={inputClass} aria-label="Objet" />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#8a9ab8] text-sm mb-2">Message</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange}
                  required rows={6} placeholder="Décrivez votre projet ou votre demande..."
                  className={`${inputClass} resize-none`} aria-label="Message" />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                aria-label="Envoyer le message"
                className="flex items-center justify-center gap-2.5 w-full px-6 py-4 bg-[#1a6fff] text-white font-semibold rounded-xl hover:bg-[#3d8bff] transition-all duration-200 shadow-xl shadow-[#1a6fff]/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' && <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Envoi...</>}
                {status === 'success' && <><CheckCircle size={18} />Message envoyé !</>}
                {(status === 'idle' || status === 'error') && <><Send size={18} />Envoyer le message</>}
              </button>

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 text-sm bg-red-500/8 border border-red-500/20 rounded-xl px-4 py-3"
                >
                  <AlertCircle size={16} />
                  Échec de l'envoi. Contactez directement via WhatsApp ou email.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
