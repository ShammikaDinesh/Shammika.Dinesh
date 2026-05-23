import { useEffect, useState } from 'react';
import { Globe, MessageCircle, Zap, Star, ArrowUp } from 'lucide-react';

const GithubIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const TwitterIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
  </svg>
);

const InstagramIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: true, timeZoneName: 'short' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      position: 'relative',
      background: 'var(--color-bg-badge)', // Deep dark background
      color: 'var(--color-text-main)',
      padding: '4rem 5% 2rem',
      overflow: 'hidden',
      fontFamily: 'var(--font-body, system-ui, sans-serif)',
    }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '80%',
        height: '100%',
        background: 'radial-gradient(circle at bottom right, rgba(26,122,110,0.1) 0%, transparent 60%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 1200,
        margin: '0 auto'
      }}>
        
        {/* Top Bar */}
        <div className="footer-top-bar" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid var(--color-border)',
          marginBottom: '4rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: 24, height: 24, background: 'var(--color-text-main)', borderRadius: '50%', flexShrink: 0 }} />
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
              Your next idea, beautifully designed and flawlessly built
            </span>
          </div>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            {[Globe, YoutubeIcon, MessageCircle, InstagramIcon, GithubIcon, TwitterIcon].map((Icon, i) => (
              <a key={i} href="#" style={{
                color: 'var(--color-text-muted)',
                transition: 'color 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-bg-card)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="footer-main" style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '4rem',
          marginBottom: '5rem'
        }}>
          {/* Left Column */}
          <div style={{ flex: '1 1 500px' }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '2rem',
              fontFamily: 'var(--font-display, sans-serif)'
            }}>
              LET'S MAKE IT<br />HAPPEN NOW
            </h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button style={{
                background: 'var(--color-accent)', // var(--color-accent) typically
                color: 'var(--color-text-main)',
                border: 'none',
                padding: '0.8rem 1.75rem',
                borderRadius: 999,
                fontWeight: 500,
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                transition: 'background 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#145c53'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--color-accent)'}
              >
                <Zap size={16} fill="currentColor" /> Start Now
              </button>
              <button style={{
                background: 'transparent',
                color: 'var(--color-text-main)',
                border: '1px solid var(--color-border)',
                padding: '0.8rem 1.75rem',
                borderRadius: 999,
                fontWeight: 500,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'background 0.2s, border-color 0.2s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              }}
              >
                Book a call
              </button>
            </div>
          </div>

          {/* Navigation Columns */}
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            {/* NAVIGATE */}
            <div>
              <h4 style={{ color: 'var(--color-text-main)', marginBottom: '1.5rem', fontSize: '1rem', fontWeight: 500 }}>NAVIGATE</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Home', 'Services', 'Portfolio', 'About', 'Testimonials'].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} style={{
                      color: 'var(--color-text-muted)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.95rem',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--color-bg-card)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                    >
                      <Star size={12} color="var(--color-accent)" fill="var(--color-accent)" /> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* RESOURCES */}
            <div>
              <h4 style={{ color: 'var(--color-text-main)', marginBottom: '1.5rem', fontSize: '1rem', fontWeight: 500 }}>RESOURCES</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Download CV', 'Website Templates', 'Monthly Newsletter', 'Atlas Labs', 'Studio IX'].map(link => (
                  <li key={link}>
                    <a href="#" style={{
                      color: 'var(--color-text-muted)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.95rem',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--color-bg-card)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                    >
                      <Star size={12} color="var(--color-accent)" fill="var(--color-accent)" /> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '2rem',
          borderTop: '1px solid var(--color-border)',
          paddingTop: '2rem'
        }}>
          <div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>ALL RIGHTS RESERVED.</p>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 500, margin: 0, color: 'var(--color-text-main)' }}>
              © {new Date().getFullYear()} SHAMMIKA DINESH
            </h3>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', marginBottom: '0.75rem', fontWeight: 500 }}>LOCAL TIME</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                <Star size={12} color="var(--color-accent)" fill="var(--color-accent)" /> {time}
              </div>
            </div>
            
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'var(--color-accent)',
                color: 'var(--color-text-main)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s, background 0.2s',
                flexShrink: 0
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.background = '#145c53';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'var(--color-accent)';
              }}
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
