import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolio';
import './Hero.css';

const SOCIALS = [
  { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: FiTwitter, href: personalInfo.twitter, label: 'Twitter' },
];

const words = personalInfo.title.split(' ');

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.6 },
  },
};
const letterVariant = {
  hidden: { y: 80, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', damping: 12, stiffness: 100 } },
};

export default function Hero({ onResumeOpen }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section className="hero" ref={ref} id="home">
      {/* Animated BG blobs */}
      <motion.div className="hero-blob blob-1" animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="hero-blob blob-2" animate={{ scale: [1, 1.15, 1], y: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="hero-blob blob-3" animate={{ scale: [1, 0.9, 1], x: [0, -15, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} />

      {/* Grid pattern */}
      <div className="hero-grid" />

      <motion.div className="hero-content container" style={{ y, opacity }}>
        {/* Badge */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="badge-dot" />
          {personalInfo.availability}
        </motion.div>

        {/* Name */}
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
        >
          Hi, I'm <br />
          <span className="name-accent">{personalInfo.name}</span>
        </motion.h1>

        {/* Title with staggered letters */}
        <motion.div className="hero-title" variants={container} initial="hidden" animate="visible">
          {words.map((word, wi) => (
            <span key={wi} className="word-wrap">
              {word.split('').map((char, ci) => (
                <motion.span key={ci} variants={letterVariant} className="hero-char">
                  {char}
                </motion.span>
              ))}
              {wi < words.length - 1 && <span className="hero-char">&nbsp;</span>}
            </span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <motion.a href="#projects" className="btn btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            View My Work
          </motion.a>
          <motion.button onClick={onResumeOpen} className="btn btn-outline" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ cursor: 'pointer' }}>
            View Resume
          </motion.button>
          <motion.a href="#contact" className="btn btn-outline" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Socials */}
        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
        >
          {SOCIALS.map(({ icon: Icon, href, label }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 + i * 0.1 }}
              whileHover={{ y: -4, color: 'var(--accent-1)' }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2, y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <FiArrowDown />
      </motion.a>
    </section>
  );
}
