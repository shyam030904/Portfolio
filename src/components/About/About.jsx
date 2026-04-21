import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiServer, FiDatabase, FiGitBranch } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolio';
import './About.css';

const stats = [
  { label: 'Projects Built', value: '20+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Years Coding', value: '4+' },
  { label: 'GitHub Stars', value: '100+' },
];

const traits = [
  { icon: FiCode, title: 'Clean Code', desc: 'Writing readable, maintainable, and scalable code is my top priority.' },
  { icon: FiServer, title: 'Full Stack', desc: 'Comfortable from DB schema to pixel-perfect UI, end-to-end.' },
  { icon: FiDatabase, title: 'Performance', desc: 'Obsessed with optimization, fast load times, and efficient queries.' },
  { icon: FiGitBranch, title: 'Open Source', desc: 'I contribute to and build open-source projects regularly.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="section-tag"></p>
          <h2 className="section-title">Who Am I?</h2>
        </motion.div>

        <div className="about-grid">
          {/* Bio */}
          <motion.div
            className="about-bio"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <p className="bio-text">{personalInfo.bio}</p>
            <p className="bio-text" style={{ marginTop: '1.2rem', color: 'var(--text-muted)' }}>
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
              and writing about software architecture. I believe great software is a blend of art and engineering.
            </p>
            <div className="about-meta">
              <div className="meta-item">
                <span className="meta-label">Location</span>
                <span className="meta-value">{personalInfo.location}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Email</span>
                <a href={`mailto:${personalInfo.email}`} className="meta-value meta-link">{personalInfo.email}</a>
              </div>
              <div className="meta-item">
                <span className="meta-label">Status</span>
                <span className="meta-value status-available">{personalInfo.availability}</span>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="about-stats">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="stat-card card"
                variants={fadeUp}
                custom={i * 0.5 + 1.5}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -6, borderColor: 'var(--accent-1)' }}
              >
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Traits */}
        <div className="about-traits">
          {traits.map((trait, i) => {
            const Icon = trait.icon;
            return (
              <motion.div
                key={trait.title}
                className="trait-card card"
                variants={fadeUp}
                custom={i * 0.15 + 2}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -8, boxShadow: 'var(--glow)' }}
              >
                <div className="trait-icon">
                  <Icon size={24} />
                </div>
                <h3 className="trait-title">{trait.title}</h3>
                <p className="trait-desc">{trait.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
