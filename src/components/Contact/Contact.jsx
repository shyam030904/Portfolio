import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../../data/portfolio';
import './Contact.css';

// Custom Instagram SVG icon
const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

// Custom LeetCode SVG icon
const LeetCodeIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);

const SOCIALS = [
  { icon: FiGithub,    href: personalInfo.github,    label: 'GitHub'    },
  { icon: FiLinkedin,  href: personalInfo.linkedin,   label: 'LinkedIn'  },
  { icon: InstagramIcon, href: personalInfo.instagram, label: 'Instagram' },
  { icon: LeetCodeIcon,  href: personalInfo.leetcode,  label: 'LeetCode'  },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // 1️⃣  Notify Shyam — the existing "incoming message" template
      const notifyMe = emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // 2️⃣  Auto-reply to the visitor — let them know their message was received
      const autoReply = emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
        {
          to_name:    form.name,
          to_email:   form.email,   // EmailJS sends TO this address
          from_name:  'Shyam Yadav',
          message:    form.message, // echo back so they remember what they wrote
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Send both at the same time
      await Promise.all([notifyMe, autoReply]);

      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag"></p>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">Have a project in mind? I'd love to hear about it.</p>
        </motion.div>

        <div className="contact-grid">
          {/* Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="contact-info-title">Get in touch</h3>
            <p className="contact-info-text">
              I'm currently open to new opportunities. Whether you have a question, 
              a project proposal, or just want to say hello — my inbox is always open!
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <FiMail className="contact-icon" />
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
              <div className="contact-detail">
                <FiMapPin className="contact-icon" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
            <div className="contact-socials">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="contact-social"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            className="contact-form card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Shyam Yadav" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="shyam@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." rows={5} required />
            </div>

            <motion.button
              type="submit"
              className={`btn submit-btn ${status === 'error' ? 'btn-error' : 'btn-primary'}`}
              disabled={status === 'sending' || status === 'sent'}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {status === 'idle'    && <><FiSend /> Send Message</>}
              {status === 'sending' && <><span className="spinner" /> Sending...</>}
              {status === 'sent'    && '✓ Message Sent!'}
              {status === 'error'   && '✗ Failed — Try Again'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
