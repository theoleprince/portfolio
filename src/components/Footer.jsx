import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Heart } from 'lucide-react'
import { SiGithub, SiGitlab, SiWhatsapp } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'

// ── À mettre à jour ─────────────────────────────────────────────────────────
const GITHUB_URL   = 'https://github.com/theoleprince'
const GITLAB_URL   = 'https://gitlab.com/theoleprince'
const LINKEDIN_URL = 'https://linkedin.com/in/theophane-jiozang'
const WHATSAPP_URL = 'https://wa.me/237655489186'
// ────────────────────────────────────────────────────────────────────────────

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/about' },
  { name: 'Projets', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

const socialLinks = [
  { icon: SiGithub,   href: GITHUB_URL,   label: 'GitHub' },
  { icon: SiGitlab,   href: GITLAB_URL,   label: 'GitLab' },
  { icon: FaLinkedinIn, href: LINKEDIN_URL, label: 'LinkedIn' },
  { icon: SiWhatsapp, href: WHATSAPP_URL, label: 'WhatsApp' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const copyrightYear = year > 2019 ? `2019–${year}` : '2019'

  return (
    <footer className="bg-[#050d1a] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="font-display text-2xl font-bold text-[#f0f4ff] mb-3">
              J.<span className="text-[#1a6fff]">Théophane</span>
            </div>
            <p className="text-[#8a9ab8] text-sm leading-relaxed mb-6 max-w-xs">
              Développeur Fullstack Senior spécialisé Angular, Spring Boot et Intégration IA.
              Disponible pour CDI et missions remote.
            </p>
            {/* Social links */}
            <div className="flex gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 bg-[#112240] border border-white/[0.06] rounded-xl flex items-center justify-center text-[#8a9ab8] hover:text-[#1a6fff] hover:border-[#1a6fff]/30 hover:bg-[#1a6fff]/5 transition-all duration-200"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#f0f4ff] font-semibold text-sm mb-5 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    aria-label={l.name}
                    className="text-[#8a9ab8] text-sm hover:text-[#1a6fff] transition-colors duration-200"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#f0f4ff] font-semibold text-sm mb-5 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:jiozangtheophane@gmail.com" aria-label="Email"
                  className="flex items-start gap-2.5 text-[#8a9ab8] hover:text-[#1a6fff] transition-colors text-sm">
                  <Mail size={13} className="text-[#1a6fff] mt-0.5 flex-shrink-0" />
                  jiozangtheophane@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+237655489186" aria-label="Téléphone"
                  className="flex items-start gap-2.5 text-[#8a9ab8] hover:text-[#1a6fff] transition-colors text-sm">
                  <Phone size={13} className="text-[#1a6fff] mt-0.5 flex-shrink-0" />
                  +237 655 48 91 86
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[#8a9ab8] text-sm">
                <MapPin size={13} className="text-[#1a6fff] mt-0.5 flex-shrink-0" />
                Yaoundé, Cameroun
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                  className="flex items-start gap-2.5 text-[#8a9ab8] hover:text-green-400 transition-colors text-sm">
                  <SiWhatsapp size={13} className="text-green-500 mt-0.5 flex-shrink-0" />
                  WhatsApp direct
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8a9ab8] text-xs">
            © {copyrightYear} Jiozang Théophane. Tous droits réservés.
          </p>
          <p className="text-[#8a9ab8] text-xs flex items-center gap-1.5">
            Conçu & développé avec <Heart size={11} className="text-[#1a6fff] fill-[#1a6fff]" /> à Yaoundé, Cameroun
          </p>
        </div>
      </div>
    </footer>
  )
}
