import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiExternalLink } from 'react-icons/fi';
import './Resume.css';
import shyamPhoto from '../../assets/shyam-photo.png';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] },
});

const skills = [
  { label: 'JavaScript / React', level: 88 },
  { label: 'Node.js / Express', level: 82 },
  { label: 'Java / Spring Boot', level: 75 },
  { label: 'Python / AI-ML', level: 78 },
  { label: 'MongoDB / MySQL', level: 80 },
  { label: 'HTML / CSS', level: 92 },
];

const tools = ['Git', 'GitHub', 'Docker', 'Jenkins', 'Power BI', 'MS Office'];

const education = [
  {
    degree: 'MCA',
    institute: 'TIMSCDR, Mumbai',
    detail: 'Thakur Institute of Management Studies Career Development & Research',
    score: '8.16 SGPI',
    year: '2025 – 27',
    board: 'University of Mumbai',
  },
  {
    degree: 'B.Sc. Computer Science',
    institute: 'V K Krishna Menon College',
    detail: 'Bachelor Degree in Computer Science',
    score: '7.77 CGPA',
    year: '2022 – 25',
    board: 'University of Mumbai',
  },
  {
    degree: 'XII (HSC) – Science',
    institute: 'St. Xaviers College',
    detail: '',
    score: '60%',
    year: '2022',
    board: 'Maharashtra State Board',
  },
  {
    degree: 'X (SSC)',
    institute: 'Cosmos English High School & Jr. College',
    detail: '',
    score: '80.60%',
    year: '2020',
    board: 'Maharashtra State Board',
  },
];

const projects = [
  {
    title: 'AI Cyber Defend',
    year: '2026',
    color: '#00f5ff',
    bullets: [
      'Built a full-stack MERN cybersecurity platform integrating OpenAI API for explainable AI threat detection and NLP-based log analysis.',
      'Implemented real-time threat alerting via Socket.io WebSockets; secured API with JWT auth, bcrypt, Helmet, and rate limiting.',
      'Designed RESTful Express.js backend with MongoDB (Mongoose), Winston logging, Multer file uploads, and Joi-based validation.',
    ],
    link: 'https://github.com/shyam030904/Ai-cyber-Defend',
  },
  {
    title: 'Sportz – Mumbai Sports Store',
    year: '2025',
    color: '#ff6584',
    bullets: [
      'Built a fully functional e-commerce frontend with vanilla JavaScript — product listing, category filtering, cart, and detail view.',
      'Implemented mobile-first responsive design using CSS3 Flexbox and Grid across all devices.',
      'Deployed on Vercel with smooth UI animations, hover effects, and Font Awesome icons.',
    ],
    link: 'https://github.com/shyam030904/sportz',
  },
];

const certifications = [
  { name: 'Prompt Engineering', org: 'EduExpress', year: '2026' },
  { name: 'Gen AI', org: 'IBM SkillsBuild', year: '2026' },
  { name: 'Data Analytics & Business Intelligence', org: 'FOSLIPY', year: '2025' },
  { name: 'Cloud Computing', org: 'iFuture Technologies', year: '2024' },
  { name: 'AI/ML Fundamentals', org: 'Coursera', year: '2023' },
  { name: 'Python Programming', org: 'Coding Ninjas', year: '2023' },
];

const activities = [
  'Participated in Business Mela and Awarded First Prize.',
  'Member of Synapse product development program — solutions for the UN\'s Sustainable Development Goals.',
  'Participated in various Sports events during College Annual Sport Day.',
];

export default function Resume({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="resume-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          className="resume-modal"
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 40 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Top Bar */}
          <div className="resume-topbar">
            <span className="resume-topbar-label">
              <span className="dot" /> Shyam Yadav — Resume
            </span>
            <div className="resume-topbar-actions">
              <motion.a
                href="https://drive.google.com/file/d/1OLoYv5egCVa0Nt945Xy4XHZaJ-wZhzbl/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-action-btn"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload size={15} /> Download / Print
              </motion.a>
              <motion.button className="resume-close-btn" onClick={onClose} whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}>
                <FiX size={20} />
              </motion.button>
            </div>
          </div>

          <div className="resume-body">
            {/* ══ LEFT SIDEBAR ══ */}
            <aside className="resume-sidebar">

              {/* Avatar / Header */}
              <motion.div className="sidebar-header" {...fadeLeft(0.1)}>
                <div className="sidebar-avatar">
                  <img src={shyamPhoto} alt="Shyam Yadav" className="avatar-photo" />
                </div>
                <h1 className="sidebar-name">Shyam Yadav</h1>
                <p className="sidebar-title">Full-Stack Developer</p>
                <p className="sidebar-batch">MCA Batch 2025 – 27</p>
              </motion.div>

              {/* Contact */}
              <motion.div className="sidebar-section" {...fadeLeft(0.2)}>
                <h3 className="sidebar-section-title">Contact</h3>
                <ul className="contact-list">
                  <li><FiPhone size={13} /><span>8879995639</span></li>
                  <li><FiMail size={13} /><a href="mailto:Shyam030904@gmail.com">Shyam030904@gmail.com</a></li>
                  <li><FiMapPin size={13} /><span>Bhandup (West), Mumbai – 400078</span></li>
                  <li><FiGithub size={13} /><a href="https://github.com/shyam030904" target="_blank" rel="noopener">github.com/shyam030904</a></li>
                  <li><FiLinkedin size={13} /><a href="https://linkedin.com/in/shyam-yadav" target="_blank" rel="noopener">in/shyam-yadav</a></li>
                  <li>
                    <FiExternalLink size={13} />
                    <a href="https://leetcode.com/u/aka_shyam/" target="_blank" rel="noopener">LeetCode: aka_shyam</a>
                  </li>
                </ul>
              </motion.div>

              {/* About */}
              <motion.div className="sidebar-section" {...fadeLeft(0.25)}>
                <h3 className="sidebar-section-title">About Me</h3>
                <ul className="about-list">
                  <li><span>DOB</span><span>03 / 09 / 2004</span></li>
                  <li><span>Gender</span><span>Male</span></li>
                  <li><span>Origin</span><span>Mumbai</span></li>
                </ul>
              </motion.div>

              {/* Skills */}
              <motion.div className="sidebar-section" {...fadeLeft(0.3)}>
                <h3 className="sidebar-section-title">Technical Skills</h3>
                <div className="skill-bars">
                  {skills.map((s, i) => (
                    <div className="skill-bar-item" key={s.label}>
                      <div className="skill-bar-label">
                        <span>{s.label}</span>
                        <span>{s.level}%</span>
                      </div>
                      <div className="skill-bar-track">
                        <motion.div
                          className="skill-bar-fill"
                          initial={{ width: 0 }}
                          animate={{ width: `${s.level}%` }}
                          transition={{ duration: 0.8, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Tools */}
              <motion.div className="sidebar-section" {...fadeLeft(0.4)}>
                <h3 className="sidebar-section-title">Tools & Databases</h3>
                <div className="tool-tags">
                  {['MongoDB', 'MySQL', ...tools].map((t) => (
                    <span className="tool-tag" key={t}>{t}</span>
                  ))}
                </div>
              </motion.div>

              {/* Interests + Languages */}
              <motion.div className="sidebar-section" {...fadeLeft(0.45)}>
                <h3 className="sidebar-section-title">Interests</h3>
                <p className="sidebar-text">Coding · Playing Cricket</p>
                <h3 className="sidebar-section-title" style={{ marginTop: '1rem' }}>Languages</h3>
                <p className="sidebar-text">English · Marathi · Hindi</p>
              </motion.div>
            </aside>

            {/* ══ MAIN CONTENT ══ */}
            <main className="resume-main">

              {/* Education */}
              <motion.section className="resume-section" {...fadeUp(0.15)}>
                <div className="section-label">
                  <span className="section-label-line" />
                  <h2>Education</h2>
                  <span className="section-label-line" />
                </div>
                <div className="edu-timeline">
                  {education.map((e, i) => (
                    <motion.div
                      className="edu-card"
                      key={e.degree}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.45 }}
                    >
                      <div className="edu-card-top">
                        <div>
                          <h4 className="edu-degree">{e.degree}</h4>
                          <p className="edu-institute">{e.institute}</p>
                          {e.detail && <p className="edu-detail">{e.detail}</p>}
                          <p className="edu-board">{e.board}</p>
                        </div>
                        <div className="edu-meta">
                          <span className="edu-score">{e.score}</span>
                          <span className="edu-year">{e.year}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Projects */}
              <motion.section className="resume-section" {...fadeUp(0.3)}>
                <div className="section-label">
                  <span className="section-label-line" />
                  <h2>Projects</h2>
                  <span className="section-label-line" />
                </div>
                <div className="project-list">
                  {projects.map((p, i) => (
                    <motion.div
                      className="project-card"
                      key={p.title}
                      style={{ '--project-color': p.color }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 + i * 0.15, duration: 0.45 }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="project-card-header">
                        <div>
                          <h4 className="project-title">{p.title}</h4>
                          <span className="project-year">{p.year}</span>
                        </div>
                        <a href={p.link} target="_blank" rel="noopener" className="project-link-btn">
                          <FiGithub size={15} /> View
                        </a>
                      </div>
                      <ul className="project-bullets">
                        {p.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Certifications */}
              <motion.section className="resume-section" {...fadeUp(0.45)}>
                <div className="section-label">
                  <span className="section-label-line" />
                  <h2>Certifications</h2>
                  <span className="section-label-line" />
                </div>
                <div className="cert-grid">
                  {certifications.map((c, i) => (
                    <motion.div
                      className="cert-card"
                      key={c.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.07, duration: 0.35 }}
                      whileHover={{ scale: 1.04, y: -3 }}
                    >
                      <span className="cert-badge">{c.year}</span>
                      <p className="cert-name">{c.name}</p>
                      <p className="cert-org">{c.org}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Activities */}
              <motion.section className="resume-section" {...fadeUp(0.55)}>
                <div className="section-label">
                  <span className="section-label-line" />
                  <h2>Co-Curricular Activities</h2>
                  <span className="section-label-line" />
                </div>
                <ul className="activity-list">
                  {activities.map((a, i) => (
                    <motion.li
                      key={a}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      {a}
                    </motion.li>
                  ))}
                </ul>
              </motion.section>

            </main>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
