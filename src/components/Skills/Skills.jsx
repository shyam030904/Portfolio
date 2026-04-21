import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../data/portfolio';
import './Skills.css';

const categoryColors = {
  'Frontend': 'var(--accent-1)',
  'Backend': 'var(--accent-2)',
  'Database': 'var(--accent-3)',
  'DevOps': '#f6d155',
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};
const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.04, type: 'spring', stiffness: 200, damping: 15 },
  }),
};

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section skills" id="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag"></p>
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">Technologies I use to bring ideas to life</p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div key={category} className="skill-category card" variants={cardVariants}>
              <div className="skill-category-header" style={{ '--cat-color': categoryColors[category] }}>
                <span className="cat-dot" />
                <h3 className="cat-title">{category}</h3>
              </div>
              <div className="skill-tags">
                {items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    style={{ '--tag-color': categoryColors[category] }}
                    variants={tagVariants}
                    custom={i}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
