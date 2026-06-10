import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolio';
import './Footer.css';

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
        <p className="footer-copy">
          Made with <FiHeart style={{ color: 'var(--accent-2)', verticalAlign: 'middle' }} /> by <strong>{personalInfo.name}</strong> using React + Framer Motion
        </p>
      </div>
    </motion.footer>
  );
}
