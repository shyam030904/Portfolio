import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience } from '../../data/portfolio';
import './Experience.css';

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section experience" id="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag"></p>
          <h2 className="section-title">My Journey</h2>
        </motion.div>

        <div className="timeline">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="timeline-dot">
                <motion.div
                  className="timeline-dot-inner"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              </div>
              <motion.div
                className="timeline-card card"
                whileHover={{ y: -5, boxShadow: 'var(--glow)' }}
              >
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">{exp.title}</h3>
                    <p className="timeline-company">{exp.company}</p>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-desc">{exp.description}</p>
                <div className="timeline-skills">
                  {exp.skills.map(s => (
                    <span key={s} className="project-tag">{s}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
          <div className="timeline-line" />
        </div>
      </div>
    </section>
  );
}
