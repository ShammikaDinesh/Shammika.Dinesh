import { useRef } from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Rocket, Globe } from 'lucide-react';

const goals = [
  {
    icon: HeartPulse,
    title: 'Healthcare IT Portfolio',
    desc: 'Documenting and showcasing my journey in healthcare technology at HEMAS Hospitals — building a comprehensive portfolio of systems managed, problems solved, and innovations implemented.',
    badge: null,
  },
  {
    icon: Rocket,
    title: 'Tech Business',
    desc: 'Planning and launching a technology services company that brings enterprise-grade IT solutions to small and medium businesses across Sri Lanka.',
    badge: 'In Progress',
  },
  {
    icon: Globe,
    title: 'Web & Digital Solutions',
    desc: 'Offering freelance web design, digital strategy, and online presence services to help local businesses thrive in the digital age.',
    badge: null,
  },
];

/* ── 3D tilt effect ── */
function TiltCard({ children, style }) {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
  };

  const handleLeave = () => {
    const card = cardRef.current;
    if (card) card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        ...style,
        transition: 'transform 0.15s ease-out',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function Goals() {
  return (
    <section
      id="goals"
      style={{
        background: 'var(--color-bg-main)',
      }}
    >
      <div className="section">
        <div className="section-inner">
          {/* Section Title */}
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            What I'm Building
          </motion.h2>

          {/* Goal Cards */}
          <div
            className="goals-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
              marginTop: '2rem',
            }}
          >
            {goals.map(({ icon: Icon, title, desc, badge }, i) => (
              <motion.div
                key={title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <TiltCard
                  style={{
                    background: 'var(--color-bg-card)',
                    borderRadius: 16,
                    padding: '2rem 1.75rem',
                    borderTop: '4px solid var(--color-border)',
                    boxShadow: '0 4px 24px rgba(22,38,96,0.06)',
                    height: '100%',
                    cursor: 'default',
                    position: 'relative',
                  }}
                >
                  {/* Badge */}
                  {badge && (
                    <span
                      className="pulse-badge"
                      style={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        background: 'var(--color-accent)',
              color: '#0B0F17',
                        padding: '0.3rem 0.8rem',
                        borderRadius: 999,
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {badge}
                    </span>
                  )}

                  <Icon
                    size={36}
                    color="var(--color-accent)"
                    style={{ marginBottom: '1rem' }}
                  />
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--color-text-main)',
                      marginBottom: '0.75rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {desc}
                  </p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          .goals-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .goals-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
