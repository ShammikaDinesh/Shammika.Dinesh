import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/* ── Typewriter roles ── */
const roles = [
  'IT Professional',
  'System Administrator',
  'Tech Problem Solver',
  'Web & Digital Solutions',
];

function useTypewriter(words, typingSpeed = 80, pause = 2000) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, typingSpeed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setCharIdx((c) => c - 1);
        setDisplay(current.slice(0, charIdx - 1));
      }, typingSpeed / 2);
    } else {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, typingSpeed, pause]);

  return display;
}

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  /* parallax transforms */
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]); // slowest
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -280]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  const typed = useTypewriter(roles);

  /* staggered reveal variants */
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 12 } },
  };
  const nameReveal = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120, damping: 10 },
    },
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'var(--color-bg-badge)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* ── Parallax Layer 1: Slow-drifting circle ── */}
      <motion.div
        style={{
          y: y1,
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '60vw',
          height: '60vw',
          maxWidth: 700,
          maxHeight: 700,
          borderRadius: '50%',
          background: 'var(--color-bg-badge)',
          opacity: 0.35,
          zIndex: 0,
        }}
      />

      {/* ── Parallax Layer 2: Geometric brackets ── */}
      <motion.div
        style={{
          y: y2,
          position: 'absolute',
          top: '15%',
          left: '5%',
          zIndex: 1,
          opacity: 0.15,
        }}
      >
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <path d="M10 10 L10 60 L60 60" stroke="var(--color-border)" strokeWidth="3" />
          <path d="M190 190 L190 140 L140 140" stroke="var(--color-border)" strokeWidth="3" />
          <path d="M190 10 L140 10 L140 60" stroke="var(--color-border)" strokeWidth="3" />
        </svg>
      </motion.div>
      <motion.div
        style={{
          y: y2,
          position: 'absolute',
          bottom: '10%',
          right: '8%',
          zIndex: 1,
          opacity: 0.12,
        }}
      >
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
          <path d="M10 150 L10 100 L60 100" stroke="var(--color-border)" strokeWidth="2.5" />
          <path d="M150 10 L150 60 L100 60" stroke="var(--color-border)" strokeWidth="2.5" />
        </svg>
      </motion.div>

      {/* ── Parallax Layer 3: Profile image ── */}
      <motion.div
        className="hero-image-col"
        style={{
          y: y3,
          position: 'absolute',
          right: '8%',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
          style={{
            width: 320,
            height: 380,
            borderRadius: 24,
            background: 'var(--color-bg-main)',
            border: '4px solid var(--color-accent)',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
          }}
        >
          <img
            src="/hero-photo.jpg"
            alt="Shammika Dinesh Wijethunga"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </motion.div>
      </motion.div>

      {/* ── Parallax Layer 4: Text (normal scroll) ── */}
      <motion.div
        style={{
          opacity: textOpacity,
          y: textY,
          position: 'relative',
          zIndex: 3,
          padding: '0 2rem',
          maxWidth: 680,
          marginLeft: '8%',
        }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Greeting */}
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: 'monospace',
            fontSize: '0.95rem',
            color: 'var(--color-accent)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
          }}
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={nameReveal}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 800,
            color: 'var(--color-text-main)',
            margin: '0 0 1rem',
            lineHeight: 1.05,
          }}
        >
          Shammika Dinesh
          <br />
          Wijethunga
        </motion.h1>

        {/* Typewriter Badge */}
        <motion.div
          variants={fadeUp}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'var(--color-bg-badge)',
            color: 'var(--color-accent)',
            padding: '0.5rem 1.25rem',
            borderRadius: 999,
            fontSize: '1rem',
            fontWeight: 500,
            marginBottom: '1.25rem',
            minHeight: 42,
            minWidth: 220,
          }}
        >
          {typed}
          <span className="typewriter-cursor" />
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          style={{
            fontSize: '1.1rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.7,
            marginBottom: '2rem',
            maxWidth: 520,
          }}
        >
          An experienced IT professional based in Sri Lanka, passionate about
          healthcare technology, system administration, and building innovative
          digital solutions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <motion.a
            href="#contact"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.85rem 2rem',
              background: 'var(--color-accent)',
              color: '#ffffff',
              borderRadius: 12,
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.95rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
            }}
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="#about"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.85rem 2rem',
              background: 'transparent',
              color: 'var(--color-accent)',
              borderRadius: 12,
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.95rem',
              border: '2px solid var(--color-accent)',
              cursor: 'pointer',
            }}
          >
            Learn More
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <div
        className="scroll-indicator"
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          color: 'var(--color-text-main)',
          opacity: 0.6,
        }}
      >
        <ChevronDown size={28} />
      </div>

      {/* ── Mobile Responsive ── */}
      <style>{`
        @media (max-width: 900px) {
          .hero-image-col {
            display: none !important;
          }
          #hero > div:nth-child(5) {
            margin-left: 5% !important;
          }
        }
      `}</style>
    </section>
  );
}
