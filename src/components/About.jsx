import { useRef } from 'react';
import { motion } from 'framer-motion';

/* ── Ticker Items ── */
const tickerItems = [
  'Linux',
  'Windows Server',
  'Network Operations',
  'Healthcare IT',
  'SAP System Admin',
  'Data Protection',
  'Hardware Config',
  'Web Design',
];

export default function About() {
  const sectionRef = useRef(null);

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' } },
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        background: 'var(--color-bg-card)',
        position: 'relative',
      }}
    >
      <div className="section" style={{ paddingBottom: '2rem' }}>
        <div className="section-inner">
          {/* Section Title */}
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          {/* Two-column layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
              marginTop: '2rem',
            }}
            className="about-grid"
          >
            {/* ── Left: Photo ── */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              style={{ position: 'relative' }}
            >
              {/* Corner bracket decoration */}
              <div
                style={{
                  position: 'absolute',
                  top: -12,
                  left: -12,
                  width: 60,
                  height: 60,
                  borderTop: '3px solid var(--color-accent)',
                  borderLeft: '3px solid var(--color-accent)',
                  zIndex: 2,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: -12,
                  right: -12,
                  width: 60,
                  height: 60,
                  borderBottom: '3px solid var(--color-accent)',
                  borderRight: '3px solid var(--color-accent)',
                  zIndex: 2,
                }}
              />
              {/* Photo frame */}
              <div
                style={{
                  background: 'var(--color-bg-main)',
                  borderRadius: 16,
                  padding: 12,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <img
                  src="/about-photo.jpg.jpeg"
                  alt="Shammika Dinesh Wijethunga"
                  style={{
                    width: '100%',
                    height: 400,
                    objectFit: 'cover',
                    borderRadius: 10,
                    display: 'block',
                  }}
                />
              </div>
            </motion.div>

            {/* ── Right: Bio + Stats ── */}
            <div>
              <motion.p
                variants={fadeUp(0)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                style={{ fontSize: '1.05rem', marginBottom: '1rem' }}
              >
               I am an IT Professional and aspiring Software Engineer based in Sri Lanka, passionate about healthcare technology, system administration, and building innovative digital solutions. With hands-on experience in IT infrastructure, technical support, and healthcare systems, I enjoy solving real-world problems through technology while continuously improving my skills in software engineering, cloud technologies, and modern web development.
              </motion.p>

            </div>
          </div>
        </div>
      </div>

      {/* ── Auto-scrolling Ticker ── */}
      <div
        style={{
          background: 'var(--color-bg-badge)',
          padding: '0.85rem 0',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              style={{
                color: 'var(--color-accent)',
                fontWeight: 500,
                fontSize: '0.95rem',
                marginRight: '2.5rem',
                letterSpacing: '0.02em',
              }}
            >
              {item} ·
            </span>
          ))}
        </div>
      </div>

      {/* ── Responsive ── */}
      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
