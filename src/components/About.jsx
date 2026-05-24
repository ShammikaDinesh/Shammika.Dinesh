import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

/* ── Animated Counter ── */
function Counter({ target, label, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = typeof target === 'number' ? target : parseInt(target, 10);
    if (isNaN(end)) { setCount(target); return; }
    const duration = 1800;
    const step = Math.ceil(duration / end);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2.5rem',
          fontWeight: 800,
          color: 'var(--color-text-main)',
          margin: 0,
          lineHeight: 1,
        }}
      >
        {typeof target === 'number' ? count : target}
        {suffix}
      </p>
      <p
        style={{
          fontSize: '0.85rem',
          fontWeight: 500,
          color: 'var(--color-text-muted)',
          marginTop: 6,
        }}
      >
        {label}
      </p>
    </div>
  );
}

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
                I'm Shammika Dinesh Wijethunga, an IT professional with over 5 years of
                hands-on experience in system administration, network operations, and
                healthcare technology. Based in Sri Lanka, I specialize in keeping
                critical systems running smoothly and securely.
              </motion.p>
              <motion.p
                variants={fadeUp(0.15)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                style={{ fontSize: '1.05rem', marginBottom: '1rem' }}
              >
                Currently serving as an IT Assistant at HEMAS Hospitals, I manage
                hardware and software troubleshooting, network monitoring, CCTV
                infrastructure, and data protection processes. My mission is to bridge
                the gap between technology and healthcare, ensuring patient data stays
                safe and systems stay operational.
              </motion.p>
              <motion.p
                variants={fadeUp(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                style={{ fontSize: '1.05rem', marginBottom: '2.5rem' }}
              >
                Beyond my hospital role, I'm passionate about web design, digital
                solutions, and building a tech business that can make a real difference
                in people's lives.
              </motion.p>

              {/* Stat Counters */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1.5rem',
                  padding: '1.5rem',
                  background: 'var(--color-bg-badge)',
                  borderRadius: 16,
                }}
              >
                <Counter target={5} suffix="+" label="Years Experience" />
                <Counter target={1} suffix="" label="Healthcare IT Role" />
                <Counter target="∞" label="Passion for Tech" />
              </motion.div>
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
