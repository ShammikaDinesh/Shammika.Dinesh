import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Check, Send } from 'lucide-react';

const LinkedinIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const socials = [
  { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
  { icon: GithubIcon, label: 'GitHub', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@example.com' },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section
      id="contact"
      style={{
        background: 'var(--color-bg-badge)',
      }}
    >
      <div className="section">
        <div className="section-inner" style={{ maxWidth: 640, margin: '0 auto' }}>
          {/* Section Title */}
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', display: 'block' }}
          >
            <span style={{ display: 'inline-block', position: 'relative' }}>
              Get in Touch
              <span
                style={{
                  position: 'absolute',
                  bottom: -8,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 60,
                  height: 4,
                  background: 'var(--color-text-main)',
                  borderRadius: 2,
                }}
              />
            </span>
          </motion.h2>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              background: 'var(--color-bg-card)',
              borderRadius: 20,
              padding: '2.5rem 2.5rem 2rem',
              borderTop: '4px solid var(--color-border)',
              boxShadow: '0 8px 40px rgba(22,38,96,0.08)',
              marginTop: '1rem',
            }}
          >
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="form-field">
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  style={{ boxSizing: 'border-box' }}
                />
                <label htmlFor="contact-name">Your Name</label>
                <span className="form-underline" />
              </div>

              {/* Email */}
              <div className="form-field">
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  style={{ boxSizing: 'border-box' }}
                />
                <label htmlFor="contact-email">Email Address</label>
                <span className="form-underline" />
              </div>

              {/* Message */}
              <div className="form-field">
                <textarea
                  id="contact-message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  rows={4}
                  style={{ resize: 'vertical', boxSizing: 'border-box' }}
                />
                <label htmlFor="contact-message">Your Message</label>
                <span className="form-underline" />
              </div>

              {/* Submit Button */}
              <motion.button
                id="contact-submit"
                type="submit"
                disabled={submitted}
                whileHover={!submitted ? { scale: 1.03 } : {}}
                whileTap={!submitted ? { scale: 0.97 } : {}}
                style={{
                  width: '100%',
                  padding: '1rem',
                  border: 'none',
                  borderRadius: 12,
                  background: submitted ? '#22c55e' : 'var(--color-accent)',
                  color: '#fff',
                  fontSize: '1rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-body)',
                  cursor: submitted ? 'default' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  transition: 'background 0.4s',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.span
                      key="check"
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                    >
                      <Check size={20} /> Sent!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="send"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -10 }}
                      style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                    >
                      <Send size={18} /> Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>

          {/* Social Icons */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              marginTop: '2rem',
            }}
          >
            {socials.map(({ icon: Icon, label, href }, i) => (
              <motion.a
                key={label}
                id={`social-${label.toLowerCase()}`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4, color: 'var(--color-accent)' }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: 'var(--color-bg-card)',
                  color: 'var(--color-text-muted)',
                  transition: 'color 0.3s, box-shadow 0.3s',
                  boxShadow: '0 2px 12px rgba(22,38,96,0.06)',
                  textDecoration: 'none',
                }}
                aria-label={label}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </div>

          {/* Footer */}
          <p
            style={{
              textAlign: 'center',
              fontSize: '0.8rem',
              color: 'var(--color-text-muted)',
              marginTop: '3rem',
              opacity: 0.7,
            }}
          >
            © {new Date().getFullYear()} Shammika Dinesh Wijethunga. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
