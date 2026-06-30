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

        {/* Dark footer */}
        <div style={{ marginTop: 'clamp(40px,6vw,72px)', background: '#0f1d2b', borderRadius: '30px 30px 0 0', color: 'rgba(255,255,255,.65)' }}>
          <div className="cs-fgrid" style={{ padding: 'clamp(44px,7vw,76px) clamp(20px,4vw,48px) 0', display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1.2fr', gap: 'clamp(32px,5vw,56px)' }}>

            {/* brand */}
            <div>
              <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 14, color: '#fff', textDecoration: 'none', marginBottom: 18 }}>
                <Logo size={56} variant="full" />
                <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 18, fontWeight: 600 }}>CornerStone Buildcom</span>
              </Link>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,.5)', maxWidth: 280, margin: '0 0 24px' }}>
                Beyond sales, built on solutions — curated real estate advisory across India&apos;s most sought-after markets.
              </p>
              <div style={{ display: 'flex', gap: 12 }}>
                {[
                  { label: 'Instagram', d: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 6.2A3.8 3.8 0 1 0 15.8 12 3.8 3.8 0 0 0 12 8.2ZM17.4 6a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z' },
                  { label: 'Facebook', d: 'M14 9h2.5V6H14c-2 0-3.4 1.32-3.4 3.6V12H8.5v3H10.6v6.9h3V15h2.4l.4-3h-2.8v-2.1c0-.8.3-.9 1.4-.9Z' },
                  { label: 'LinkedIn', d: 'M6.9 8.6H4V20h2.9V8.6ZM5.45 4a1.68 1.68 0 1 0 0 3.36A1.68 1.68 0 0 0 5.45 4ZM20 13.4c0-3-1.6-4.4-3.8-4.4a3.27 3.27 0 0 0-2.96 1.62V8.6H10.4V20h2.84v-5.94c0-1.57.3-3.08 2.24-3.08 1.92 0 1.94 1.78 1.94 3.18V20H20v-6.6Z' },
                ].map(({ label, d }) => (
                  <span key={label} aria-label={label} style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d9ad5a' }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d={d} /></svg>
                  </span>
                ))}
              </div>
            </div>

            {/* quick links */}
            <div>
              <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 17, fontWeight: 600, color: '#fff', marginBottom: 20 }}>Quick Links</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
                {[['Home', '/'], ['About', '/about'], ['Properties', '/properties'], ['Services', '/services'], ['Contact', '/contact']].map(([label, href]) => (
                  <Link key={label} href={href} style={{ fontSize: 13.5, color: 'rgba(255,255,255,.55)', textDecoration: 'none' }}>{label}</Link>
                ))}
              </div>
            </div>

            {/* services */}
            <div>
              <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 17, fontWeight: 600, color: '#fff', marginBottom: 20 }}>Services</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
                {['Strategic Investments', 'Integrated Leasing', 'Due Diligence', 'Capital & Fund Support'].map((label) => (
                  <Link key={label} href="/services" style={{ fontSize: 13.5, color: 'rgba(255,255,255,.55)', textDecoration: 'none' }}>{label}</Link>
                ))}
              </div>
            </div>

            {/* contact */}
            <div>
              <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 17, fontWeight: 600, color: '#fff', marginBottom: 20 }}>Contact Us</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ color: '#d9ad5a', flexShrink: 0, marginTop: 2 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  </span>
                  <span style={{ fontSize: 13.5, lineHeight: 1.6, color: 'rgba(255,255,255,.55)' }}>111, F-Block, Sector 8, Noida</span>
                </div>
                <a href="tel:+919810000000" style={{ display: 'flex', gap: 12, alignItems: 'center', textDecoration: 'none' }}>
                  <span style={{ color: '#d9ad5a', flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L7.9 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2.1Z" /></svg>
                  </span>
                  <span style={{ fontSize: 13.5, color: 'rgba(255,255,255,.55)' }}>+91 98100 00000</span>
                </a>
                <a href="mailto:hello@cornerstonebuildcom.com" style={{ display: 'flex', gap: 12, alignItems: 'center', textDecoration: 'none' }}>
                  <span style={{ color: '#d9ad5a', flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4Z" /><path d="m4 6 8 7 8-7" /></svg>
                  </span>
                  <span style={{ fontSize: 13.5, color: 'rgba(255,255,255,.55)' }}>hello@cornerstonebuildcom.com</span>
                </a>
              </div>
            </div>

          </div>

          {/* bottom strip */}
          <div style={{ marginTop: 'clamp(36px,5vw,56px)', borderTop: '1px solid rgba(255,255,255,.1)', padding: '22px clamp(20px,4vw,48px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,.4)' }}>© 2026 CornerStone Buildcom. All rights reserved.</span>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Privacy Policy</Link>
              <Link href="/contact" style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Terms of Service</Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
