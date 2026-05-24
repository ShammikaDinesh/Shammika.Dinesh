import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'IT Assistant',
    company: 'HEMAS Hospitals',
    location: 'Sri Lanka',
    date: '2024 Jan — 2024 Dec',
    responsibilities: [
      'Resolve hardware-software issues (medical & admin systems)',
      'Maintain network for clinical ops',
      'Install & configure healthcare IT equipment ',
      'Managing the operational side of three system ',
      'Data protection & backup processes',
    ],
  },
  {
    role: 'Associate System Administrator',
    company: 'Rainco Pvt Ltd',
    location: 'Sri Lanka',
    date: '2024 Dec - Present',
    responsibilities: [
      'System administration and IT infrastructure support',
      'Hardware and software configuration',
      'Network troubleshooting and maintenance',
      'Supporting ERP & SAP project implementation',
    ],
  },
];

function ExperienceCard({ exp }) {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: '-100px' });

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 40 }}
        animate={cardInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        style={{
          background: 'var(--color-bg-main)',
          borderRadius: 16,
          padding: '2rem 2.5rem',
          borderTop: '4px solid var(--color-border)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
          maxWidth: 640,
          width: '100%',
        }}
      >
        {/* Role Title */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: '0.5rem',
          }}
        >
          <Briefcase size={22} color="var(--color-accent)" />
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--color-text-main)',
              margin: 0,
            }}
          >
            {exp.role}
          </h3>
        </div>

        {/* Company */}
        <p
          style={{
            fontSize: '1.15rem',
            fontWeight: 600,
            color: 'var(--color-text-main)',
            margin: '0 0 0.75rem',
            opacity: 0.85,
          }}
        >
          {exp.company}
        </p>

        {/* Badges */}
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '1.5rem',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
              padding: '0.35rem 0.85rem',
              background: 'var(--color-bg-badge)',
              borderRadius: 999,
              fontSize: '0.8rem',
              fontWeight: 500,
              color: 'var(--color-text-main)',
            }}
          >
            <MapPin size={14} /> {exp.location}
          </span>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
              padding: '0.35rem 0.85rem',
              background: 'var(--color-bg-badge)',
              borderRadius: 999,
              fontSize: '0.8rem',
              fontWeight: 500,
              color: 'var(--color-text-main)',
            }}
          >
            <Calendar size={14} /> {exp.date}
          </span>
        </div>

        {/* Responsibilities */}
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          {exp.responsibilities.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 10,
                marginBottom: '0.75rem',
                fontSize: '0.95rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: 'var(--color-accent)',
                  marginTop: 8,
                  flexShrink: 0,
                }}
              />
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const sectionRef = useRef(null);

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        background: 'var(--color-bg-card)',
      }}
    >
      <div className="section">
        <div className="section-inner">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            Experience
          </motion.h2>

          <div style={{ marginTop: '2rem' }}>
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
