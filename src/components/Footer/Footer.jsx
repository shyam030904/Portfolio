import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolio';
import './Footer.css';
import LogoIcon from '../Navbar/LogoIcon';

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container footer-inner">
        <a href="#home" className="footer-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <LogoIcon size={44} />
        </a>
        <p className="footer-copy">
          Made with <FiHeart style={{ color: 'var(--accent-2)', verticalAlign: 'middle' }} /> by <strong>{personalInfo.name}</strong> using React + Framer Motion
        </p>
        <div className="footer-socials">
          {[
            { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
            { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
            { icon: FiTwitter, href: personalInfo.twitter, label: 'Twitter' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a key={label} href={href} target="_blank" rel="noopener" aria-label={label} className="footer-social" whileHover={{ y: -3, color: 'var(--accent-1)' }}>
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
