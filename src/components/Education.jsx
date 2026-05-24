import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: 'Higher Diploma in Software Engineering',
    institute: 'National Institute of Business Management (NIBM)',
    location: 'Kandy, Sri Lanka',
    date: 'Dec 2022 — Dec 2023',
    subjects: [
      'Robotic Application Development',
      'Programming Data Structures and Algorithms - 1',
      'Enterprise Application Development - 2',
      'Advance Database Management Systems',
      'Statistics for Computing',
      'Digital Image Processing',
      'Data warehousing and Data mining',
      'Mobile Application Development',
      'Machine Learning for Artificial Intelligence',
      'Software Security',
      'IT Management Practice',
      'Innovation and Entrepreneurship Project',
      'Industrial Training',
    ],
  },
  {
    degree: 'Diploma in Computer System Design',
    institute: 'National Institute of Business Management (NIBM)',
    location: 'Kandy, Sri Lanka',
    date: 'July 2021 — December 2022',
    subjects: [
      'Programming Fundamentals',
      'Creative Thinking and Problem Solving',
      'Database Management System',
      'Developing Modern Web',
      'Enterprise Application Development - 1',
      'Fundamental of Electronics',
      'GUI Application Development',
      'Introduction to Computer Science',
      'Introduction to IOT',
      'Mathematics for Computing',
      'Networking Fundamental',
      'SEO & Digital Marketing ',
      'System Analysis and Design ',
      'System Essentials',
    ],
  },
  {
    degree: 'Certificate in Software Engineering',
    institute: 'National Institute of Business Management (NIBM), Kandy, Sri Lanka',
    location: 'Kandy, Sri Lanka',
    date: 'April 2021 — August 2021',
    subjects: [],
  },
  {
    degree: 'Diploma in English Language',
    institute: 'British Way English Academy, Nittambuwa, Sri Lanka',
    location: 'Nittambuwa, Sri Lanka',
    date: 'August 2019 — November 2019',
    subjects: [],
  },
];

function EducationCard({ edu }) {
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
          background: 'var(--color-bg-card)',
          borderRadius: 16,
          padding: '2rem 2.5rem',
          borderTop: '4px solid var(--color-border)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
          maxWidth: 640,
          width: '100%',
        }}
      >
        {/* Degree Title */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: '0.5rem',
          }}
        >
          <GraduationCap size={22} color="var(--color-accent)" />
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--color-text-main)',
              margin: 0,
            }}
          >
            {edu.degree}
          </h3>
        </div>

        {/* Institute */}
        <p
          style={{
            fontSize: '1.15rem',
            fontWeight: 600,
            color: 'var(--color-text-main)',
            margin: '0 0 0.75rem',
            opacity: 0.85,
          }}
        >
          {edu.institute}
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
            <MapPin size={14} /> {edu.location}
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
            <Calendar size={14} /> {edu.date}
          </span>
        </div>

        {edu.subjects.length > 0 && (
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '0.5rem 1rem',
            }}
          >
            {edu.subjects.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.05 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
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
        )}
      </motion.div>
    </div>
  );
}

export default function Education() {
  const sectionRef = useRef(null);

  return (
    <section
      id="education"
      ref={sectionRef}
      style={{
        background: 'var(--color-bg-main)',
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
            Education
          </motion.h2>

          <div style={{ marginTop: '2rem' }}>
            {educationData.map((edu, i) => (
              <EducationCard key={i} edu={edu} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
