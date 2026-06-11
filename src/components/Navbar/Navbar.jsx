import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import './Navbar.css';
import { personalInfo } from '../../data/portfolio';
import LogoIcon from './LogoIcon';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onResumeOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on('change', (y) => setScrolled(y > 50));
    return unsub;
  }, [scrollY]);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <motion.header
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="nav-inner container">
        <motion.a
          href="#"
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}
        >
          <LogoIcon size={40} />
          <span className="nav-brand-text">
            <span className="nav-brand-first">Shyam</span>
            <span className="nav-brand-last"> Yadav</span>
          </span>
        </motion.a>

        <nav className="nav-links">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className={`nav-link ${active === link.href ? 'active' : ''}`}
              onClick={() => handleNav(link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.4 }}
              whileHover={{ y: -2 }}
            >
              {link.label}
              <span className="nav-link-underline" />
            </motion.a>
          ))}
        </nav>

        <motion.button
          className="btn btn-primary nav-cta"
          onClick={onResumeOpen}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ cursor: 'pointer' }}
        >
          Resume
        </motion.button>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="mobile-link"
                onClick={() => handleNav(link.href)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.05 * i }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button onClick={onResumeOpen} className="btn btn-primary" style={{ margin: '1rem 1.5rem', cursor: 'pointer' }}>
              Resume
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
