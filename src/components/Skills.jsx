import { motion } from 'framer-motion';
import {
  Monitor,
  Globe,
  Settings,
  Palette,
  Puzzle,
  Users,
} from 'lucide-react';

const skills = [
  {
    icon: Monitor,
    title: 'IT Support & Troubleshooting',
    desc: 'Diagnosing and resolving hardware, software, and network issues swiftly to minimize downtime across enterprise environments.',
  },
  {
    icon: Globe,
    title: 'Network & System Administration',
    desc: 'Managing servers, routers, switches, and network infrastructure with a focus on uptime, security, and performance monitoring.',
  },
  {
    icon: Settings,
    title: 'Hardware & Software Configuration',
    desc: 'Setting up, configuring, and maintaining workstations, peripherals, and enterprise software systems for optimal operation.',
  },
  {
    icon: Palette,
    title: 'Web Design & Digital Solutions',
    desc: 'Crafting modern, responsive websites and digital tools that help businesses establish a strong and professional online presence.',
  },
  {
    icon: Puzzle,
    title: 'Technical Problem Solving',
    desc: 'Analyzing complex technical challenges and engineering practical, scalable solutions that stand the test of time.',
  },
  {
    icon: Users,
    title: 'Team Collaboration & User Support',
    desc: 'Working closely with cross-functional teams and end users, delivering training, documentation, and responsive IT support.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        background: 'var(--color-bg-badge)',
      }}
    >
      <div className="section">
        <div className="section-inner">
          {/* Section Title — styled as code comment */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: 'monospace',
              fontSize: '1.75rem',
              fontWeight: 600,
              color: 'var(--color-text-main)',
              marginBottom: '3rem',
              letterSpacing: '0.02em',
            }}
          >
            {'// Skills & Expertise'}
          </motion.h2>

          {/* Skill Cards Grid */}
          <div
            className="skills-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem',
            }}
          >
            {skills.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                id={`skill-card-${i}`}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{
                  y: -6,
                  boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                }}
                style={{
                  background: 'var(--color-bg-card)',
                  borderRadius: 14,
                  padding: '2rem 1.75rem',
                  borderLeft: '4px solid var(--color-border)',
                  cursor: 'default',
                  transition: 'box-shadow 0.3s, border-color 0.3s',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderLeftColor = 'var(--color-accent)';
                  e.currentTarget.style.boxShadow =
                    '0 12px 40px rgba(0,0,0,0.12), -4px 0 20px rgba(200,132,58,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderLeftColor = 'var(--color-border)';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)';
                }}
              >
                <Icon
                  size={32}
                  color="var(--color-accent)"
                  style={{ marginBottom: '1rem' }}
                />
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--color-text-main)',
                    marginBottom: '0.6rem',
                    lineHeight: 1.3,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Responsive ── */}
      <style>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
