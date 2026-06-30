'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Properties', href: '/properties' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function Nav({ active }: { active: string }) {
  const [solid, setSolid] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 300,
          height: 72,
          padding: '0 clamp(20px,4vw,48px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: 'var(--font-manrope), Manrope, sans-serif',
          transition: 'background .35s ease, box-shadow .35s ease, backdrop-filter .35s',
          background: solid ? 'rgba(247,246,243,.82)' : 'rgba(247,246,243,0)',
          boxShadow: solid ? '0 1px 0 rgba(28,28,26,.07),0 10px 30px rgba(28,28,26,.05)' : 'none',
          backdropFilter: solid ? 'blur(14px)' : 'blur(0px)',
          WebkitBackdropFilter: solid ? 'blur(14px)' : 'blur(0px)',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 11, color: '#1c1c1a', textDecoration: 'none' }}>
          <Logo size={38} />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
            <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 19, fontWeight: 600, letterSpacing: '.2px', textShadow: '0 0 16px rgba(247,246,243,.9)' }}>CornerStone</span>
            <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#a89a6a', textShadow: '0 0 16px rgba(247,246,243,.9)' }}>Buildcom</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="cs-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(20px,2.4vw,34px)' }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              style={{ position: 'relative', fontSize: 12.5, fontWeight: 600, letterSpacing: 1.4, textTransform: 'uppercase', color: '#4a443b', textDecoration: 'none', padding: '6px 0', textShadow: '0 0 16px rgba(247,246,243,.9)' }}
            >
              {link.name}
              {link.name === active && (
                <span style={{ position: 'absolute', left: 0, right: 0, bottom: -2, height: 2, borderRadius: 2, background: 'linear-gradient(90deg,#c8973d,#e0b765)' }} />
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="cs-nav-btn"
          style={{ display: 'flex', alignItems: 'center', gap: 9, background: '#1c1c1a', color: '#f7f6f3', padding: '11px 12px 11px 20px', borderRadius: 40, fontSize: 12.5, fontWeight: 600, letterSpacing: '.3px', textDecoration: 'none', boxShadow: '0 8px 22px rgba(28,28,26,.22)', transition: 'transform .2s,box-shadow .2s' }}
        >
          Book A Consultation
          <span style={{ width: 26, height: 26, borderRadius: '50%', background: '#d9ad5a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1c1c1a' }}>
            <ArrowIcon />
          </span>
        </Link>

        {/* Burger */}
        <button
          className="cs-burger"
          onClick={() => setMobile(true)}
          aria-label="Menu"
          style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}
        >
          <span style={{ width: 24, height: 2, borderRadius: 2, background: '#1c1c1a', display: 'block' }} />
          <span style={{ width: 24, height: 2, borderRadius: 2, background: '#1c1c1a', display: 'block' }} />
          <span style={{ width: 16, height: 2, borderRadius: 2, background: '#1c1c1a', display: 'block' }} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 299,
          background: 'linear-gradient(160deg,#f7f6f3,#efeae1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          fontFamily: 'var(--font-manrope), Manrope, sans-serif',
          transition: 'opacity .4s ease, transform .45s cubic-bezier(.16,1,.3,1)',
          opacity: mobile ? 1 : 0,
          transform: mobile ? 'translateY(0)' : 'translateY(-12px)',
          pointerEvents: mobile ? 'auto' : 'none',
        }}
      >
        <button
          onClick={() => setMobile(false)}
          aria-label="Close"
          style={{ position: 'absolute', top: 22, right: 22, background: 'none', border: 'none', fontSize: 30, cursor: 'pointer', color: '#1c1c1a', lineHeight: 1 }}
        >
          ×
        </button>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setMobile(false)}
            style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 34, fontWeight: 600, color: '#1c1c1a', textDecoration: 'none', padding: '6px 0' }}
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setMobile(false)}
          style={{ marginTop: 18, background: '#1c1c1a', color: '#f7f6f3', padding: '14px 28px', borderRadius: 40, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}
        >
          Book A Consultation
        </Link>
      </div>
    </>
  );
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
