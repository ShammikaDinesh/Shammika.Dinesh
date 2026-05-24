import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'var(--color-bg-main)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* ── Decorative partial circle (top-right, cut off) ── */}
      <motion.div
        style={{
          y: y1,
          position: 'absolute',
          top: '-20%',
          right: '-15%',
          width: '70vw',
          height: '70vw',
          maxWidth: 800,
          maxHeight: 800,
          borderRadius: '50%',
          border: '1px solid var(--color-border)',
          opacity: 0.25,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* ── Decorative partial circle (bottom-left, cut off) ── */}
      <motion.div
        style={{
          y: y2,
          position: 'absolute',
          bottom: '-25%',
          left: '-10%',
          width: '50vw',
          height: '50vw',
          maxWidth: 600,
          maxHeight: 600,
          borderRadius: '50%',
          border: '1px solid var(--color-border)',
          opacity: 0.15,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* ── Abstract curved swoosh lines around the image area ── */}
      <motion.div
        style={{
          y: y2,
          position: 'absolute',
          top: '15%',
          right: '35%',
          zIndex: 1,
          opacity: 0.2,
          pointerEvents: 'none',
        }}
      >
        <svg width="300" height="200" viewBox="0 0 300 200" fill="none">
          <path d="M20,180 C100,160 150,60 280,20" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
          <path d="M40,120 C120,100 160,40 260,10" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        </svg>
      </motion.div>

      {/* ── Floating dot circles ── */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          right: '22%',
          width: 14,
          height: 14,
          borderRadius: '50%',
          background: 'var(--color-accent)',
          opacity: 0.6,
          zIndex: 1,
        }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '35%',
          right: '12%',
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'var(--color-accent)',
          opacity: 0.4,
          zIndex: 1,
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '25%',
          right: '30%',
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: 'var(--color-accent)',
          opacity: 0.5,
          zIndex: 1,
        }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '40%',
          left: '15%',
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: 'var(--color-accent)',
          opacity: 0.3,
          zIndex: 1,
        }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Image Column (right side, overlapping edge) ── */}
      <motion.div
        className="hero-image-col"
        style={{
          position: 'absolute',
          right: '-4%',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          width: '45vw',
          maxWidth: 650,
          display: 'flex',
          justifyContent: 'flex-end',
          pointerEvents: 'none',
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
        >
          <img
            src="/hero-photo.jpg.jpeg"
            alt="Hero"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '90vh',
              objectFit: 'contain',
              objectPosition: 'right center',
              display: 'block',
              filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.3))',
            }}
          />
        </motion.div>
      </motion.div>

      {/* ── Text Column (left side) ── */}
      <motion.div
        style={{
          opacity: textOpacity,
          y: textY,
          position: 'relative',
          zIndex: 3,
          padding: '0 2rem',
          maxWidth: 620,
          marginLeft: '8%',
          width: '100%',
        }}
        variants={container}
        initial="hidden"
        animate="show"
      >


        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 3rem)',
            fontWeight: 900,
            color: 'var(--color-text-main)',
            margin: '0 0 1.5rem',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
          }}
        >
          Shammika
          <br />
          Dinesh Wijethunga
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          style={{
            fontSize: '1.1rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            maxWidth: 480,
          }}
        >
          IT Professional specializing in system administration, IT infrastructure, and modern digital solutions, with a growing focus on Software Engineering and emerging technologies.
        </motion.p>
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
          opacity: 0.5,
        }}
      >
        <ChevronDown size={28} />
      </div>

      {/* ── Responsive ── */}
      <style>{`
        @media (max-width: 900px) {
          .hero-image-col {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
