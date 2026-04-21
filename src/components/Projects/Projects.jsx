import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import { projects } from '../../data/portfolio';
import './Projects.css';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] },
  }),
};

function ProjectCard({ project, index, onClick }) {
  return (
    <motion.div
      className="project-card card"
      style={{ '--project-color': project.color }}
      variants={cardVariants}
      custom={index}
      whileHover={{ y: -10, boxShadow: `0 20px 60px ${project.color}30` }}
      onClick={() => onClick(project)}
      data-cursor="hover"
    >
      <div className="project-top">
        <div className="project-dot" style={{ background: project.color, boxShadow: `0 0 15px ${project.color}` }} />
        {project.featured && <span className="project-badge">Featured</span>}
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="project-tags">
        {project.tags.map(t => (
          <span key={t} className="project-tag">{t}</span>
        ))}
      </div>
      <div className="project-links" onClick={e => e.stopPropagation()}>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-link" aria-label="GitHub">
          <FiGithub />
        </a>
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="proj-link" aria-label="Live">
          <FiExternalLink />
        </a>
      </div>
    </motion.div>
  );
}

function Modal({ project, onClose }) {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.8, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 40 }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}><FiX /></button>
        <div className="modal-header">
          <div className="modal-dot" style={{ background: project.color, boxShadow: `0 0 20px ${project.color}` }} />
          <h2 className="modal-title">{project.title}</h2>
          {project.featured && <span className="project-badge">Featured</span>}
        </div>
        <p className="modal-desc">{project.description}</p>
        <div className="modal-tags">
          {project.tags.map(t => (
            <span key={t} className="project-tag">{t}</span>
          ))}
        </div>
        <div className="modal-actions">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <FiGithub /> View Code
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selected, setSelected] = useState(null);

  return (
    <section className="section projects" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag"></p>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-subtitle">Click any card to learn more</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onClick={setSelected} />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
