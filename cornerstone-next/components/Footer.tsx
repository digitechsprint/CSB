import Link from 'next/link';
import Logo from './Logo';

interface FooterProps {
  eyebrow?: string;
  title?: string;
  sub?: string;
}

export default function Footer({
  eyebrow = 'Build Your Portfolio',
  title = 'Homes designed for the life you want to live',
  sub = 'Explore properties, compare options, and move forward with confidence — everything in one place.',
}: FooterProps) {
  return (
    <section style={{ background: '#f7f6f3', padding: 'clamp(40px,6vw,72px) clamp(20px,4vw,48px) 0', fontFamily: 'var(--font-manrope), Manrope, sans-serif' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* CTA banner */}
        <div style={{ position: 'relative', borderRadius: 30, overflow: 'hidden', background: 'linear-gradient(150deg,#efeae1 0%,#e7e0d3 60%,#e2d8c6 100%)', padding: 'clamp(48px,7vw,92px) clamp(24px,5vw,72px)', textAlign: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: .14, mixBlendMode: 'multiply' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1600&q=70" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
          </div>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 0%,rgba(247,246,243,.5),transparent 70%)' }} />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 11, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#a07e34', marginBottom: 22 }}>
              <span style={{ width: 22, height: 1, background: '#c8973d' }} />
              {eyebrow}
              <span style={{ width: 22, height: 1, background: '#c8973d' }} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(34px,5.2vw,66px)', fontWeight: 600, letterSpacing: '-.5px', lineHeight: 1.05, color: '#1c1c1a', maxWidth: 760, margin: '0 auto 18px' }}>{title}</h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: '#6f665a', maxWidth: 500, margin: '0 auto 36px' }}>{sub}</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#1c1c1a', color: '#f7f6f3', padding: '15px 28px', borderRadius: 40, fontSize: 14, fontWeight: 600, textDecoration: 'none', boxShadow: '0 10px 28px rgba(28,28,26,.2)' }}>
                Book A Consultation
                <span style={{ width: 24, height: 24, borderRadius: '50%', background: '#d9ad5a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1c1c1a' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </Link>
              <Link href="/properties" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid rgba(28,28,26,.25)', color: '#1c1c1a', padding: '15px 28px', borderRadius: 40, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>View Properties</Link>
            </div>
          </div>

          <div style={{ position: 'relative', zIndex: 1, marginTop: 'clamp(20px,4vw,44px)', fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(72px,16vw,200px)', fontWeight: 600, lineHeight: .8, letterSpacing: -3, color: 'transparent', WebkitTextStroke: '1px rgba(28,28,26,.12)', background: 'linear-gradient(180deg,rgba(28,28,26,.10),rgba(28,28,26,0))', WebkitBackgroundClip: 'text', backgroundClip: 'text', userSelect: 'none' }}>CornerStone</div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 22, padding: '40px 8px 48px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 11, color: '#1c1c1a', textDecoration: 'none' }}>
            <Logo size={36} />
            <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 18, fontWeight: 600 }}>CornerStone Buildcom</span>
          </Link>
          <div style={{ display: 'flex', gap: 26, flexWrap: 'wrap' }}>
            {[['Home', '/'], ['About', '/about'], ['Properties', '/properties'], ['Services', '/services'], ['Contact', '/contact']].map(([label, href]) => (
              <Link key={label} href={href} style={{ fontSize: 13, fontWeight: 500, color: '#6f665a', textDecoration: 'none' }}>{label}</Link>
            ))}
          </div>
          <div style={{ fontSize: 12, color: '#a89a86' }}>© 2026 CornerStone Buildcom</div>
        </div>

      </div>
    </section>
  );
}
