'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function AboutPage() {
  useScrollReveal();

  return (
    <>
      <Nav active="About" />

      {/* HERO */}
      <section style={{ padding: 'clamp(120px,16vw,170px) clamp(20px,4vw,48px) clamp(56px,7vw,90px)', background: 'linear-gradient(170deg,#efeae1,#f7f6f3)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }} className="cs-split">
          <div>
            <div className="cs-reveal" style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#a07e34', marginBottom: 20 }}>
              <span style={{ width: 24, height: 1, background: '#c8973d' }} />Who We Are
            </div>
            <h1 className="cs-reveal" data-d="80" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(42px,6.4vw,86px)', fontWeight: 600, lineHeight: .98, letterSpacing: -1, margin: '0 0 22px' }}>India&apos;s trusted real estate advisory</h1>
            <p className="cs-reveal" data-d="160" style={{ fontSize: 17, lineHeight: 1.7, color: '#6f665a', maxWidth: 460, margin: 0 }}>Founded in 2012. Eighteen-plus years of expertise. Delivering premium advisory to HNIs, family offices, and corporates across India.</p>
          </div>
          <div className="cs-reveal" data-d="120" style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', aspectRatio: '4/5', boxShadow: '0 30px 70px rgba(28,28,26,.16)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://framerusercontent.com/images/CdWqqbxMdI0CYbn1OZIsaPpFSU.png" alt="CornerStone residence" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 20, left: 20, background: '#1c1c1a', color: '#f7f6f3', padding: '16px 22px', borderRadius: 14, textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 30, fontWeight: 600, lineHeight: 1, color: '#d9ad5a' }}>2012</div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', opacity: .7, marginTop: 4 }}>Established</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section style={{ background: '#f7f6f3', padding: '0 clamp(20px,4vw,48px) clamp(56px,7vw,80px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }} className="cs-vals">
          {[
            { val: '₹2.1M+', label: 'Value Advised' },
            { val: '500+', label: 'Projects' },
            { val: '300+', label: 'HNI Clients' },
            { val: '100%', label: 'RERA Compliant' },
          ].map(({ val, label }, i) => (
            <div key={label} className="cs-reveal" data-d={i * 80} style={{ textAlign: 'center', padding: '30px 18px', background: '#efeae1', borderRadius: 18 }}>
              <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(34px,4vw,52px)', fontWeight: 600, color: '#1c1c1a', lineHeight: 1 }}>{val}</div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', color: '#9a8e7c', marginTop: 8 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section style={{ background: '#efeae1', padding: 'clamp(64px,9vw,116px) clamp(20px,4vw,48px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }} className="cs-split">
          <div className="cs-reveal" style={{ borderRadius: 24, overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 26px 60px rgba(28,28,26,.14)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://framerusercontent.com/images/fTvLhDbO86UBiJORkMBXabiLfM.png" alt="Premium residence" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div className="cs-reveal" style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#a07e34', marginBottom: 16 }}>
              <span style={{ width: 24, height: 1, background: '#c8973d' }} />Our Story
            </div>
            <h2 className="cs-reveal" data-d="80" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(30px,4vw,52px)', fontWeight: 600, letterSpacing: -.5, lineHeight: 1.06, margin: '0 0 20px' }}>Built on trust, driven by results</h2>
            <p className="cs-reveal" data-d="160" style={{ fontSize: 16, lineHeight: 1.72, color: '#6f665a', margin: '0 0 16px' }}>Since 2012 we&apos;ve brought institutional-grade advisory to individual investors and corporates — specialising in commercial, premium residential, branded retail, and industrial assets.</p>
            <p className="cs-reveal" data-d="220" style={{ fontSize: 16, lineHeight: 1.72, color: '#6f665a', margin: 0 }}>Deep market research, rigorous due diligence, and personalised relationship management help clients build lasting wealth across Noida, NCR, and pan-India.</p>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section style={{ background: '#f7f6f3', padding: 'clamp(64px,9vw,116px) clamp(20px,4vw,48px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: 'clamp(36px,6vw,72px)', alignItems: 'center' }} className="cs-split">
          <div className="cs-reveal" style={{ borderRadius: 24, overflow: 'hidden', aspectRatio: '3/4', boxShadow: '0 26px 60px rgba(28,28,26,.14)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://framerusercontent.com/images/Cn8DCdolOsfC5Loc5Z2UAI1fY.png" alt="Founder portrait" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div className="cs-reveal" style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#a07e34', marginBottom: 16 }}>
              <span style={{ width: 24, height: 1, background: '#c8973d' }} />Our Founder
            </div>
            <blockquote className="cs-reveal" data-d="80" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(24px,3vw,38px)', fontWeight: 500, lineHeight: 1.32, letterSpacing: -.3, color: '#2a261f', margin: '0 0 26px', paddingLeft: 22, borderLeft: '3px solid #c8973d' }}>
              &quot;Real estate isn&apos;t about transactions — it&apos;s about building legacies. Every investment we advise on is one we&apos;d make ourselves.&quot;
            </blockquote>
            <div className="cs-reveal" data-d="160" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 22, fontWeight: 600 }}>Rajesh Ghai</div>
            <div className="cs-reveal" data-d="180" style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: '#9a8e7c', marginTop: 4 }}>Founder &amp; Managing Director</div>
            <div className="cs-reveal" data-d="240" style={{ marginTop: 26 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#1c1c1a', color: '#f7f6f3', padding: '13px 24px', borderRadius: 40, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                Connect With Rajesh
                <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#d9ad5a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1c1c1a' }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background: '#efeae1', padding: 'clamp(64px,9vw,116px) clamp(20px,4vw,48px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ maxWidth: 560, marginBottom: 46 }}>
            <div className="cs-reveal" style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#a07e34', marginBottom: 16 }}>
              <span style={{ width: 24, height: 1, background: '#c8973d' }} />What Drives Us
            </div>
            <h2 className="cs-reveal" data-d="80" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(30px,4vw,52px)', fontWeight: 600, letterSpacing: -.5, margin: 0 }}>Our core values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }} className="cs-vals">
            {[
              { n: '01', title: 'Integrity First', desc: 'Honest advice, even when it\'s not what you want to hear.' },
              { n: '02', title: 'Research-Driven', desc: 'Every recommendation backed by data and ground intelligence.' },
              { n: '03', title: 'Client First', desc: 'Long-term relationships over short-term commissions.' },
              { n: '04', title: 'Full Compliance', desc: 'RERA, legal due diligence, and transparency — non-negotiable.' },
            ].map(({ n, title, desc }, i) => (
              <div key={n} className="cs-reveal cs-val" data-d={i * 80} style={{ background: '#fff', border: '1px solid rgba(28,28,26,.07)', borderRadius: 18, padding: '30px 26px', transition: 'transform .35s cubic-bezier(.16,1,.3,1),box-shadow .35s' }}>
                <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 30, color: '#d9ad5a', marginBottom: 14 }}>{n}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 8px' }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: '#6f665a', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: '#f7f6f3', padding: 'clamp(64px,9vw,116px) clamp(20px,4vw,48px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 56px' }}>
            <div className="cs-reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#a07e34', marginBottom: 16 }}>
              <span style={{ width: 24, height: 1, background: '#c8973d' }} />How We Work
            </div>
            <h2 className="cs-reveal" data-d="80" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(30px,4vw,52px)', fontWeight: 600, letterSpacing: -.5, margin: 0 }}>Our advisory process</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 28 }} className="cs-proc">
            {[
              { n: '01', title: 'Discovery Call', desc: 'We understand your objectives, risk appetite, and wealth goals.' },
              { n: '02', title: 'Research & Shortlist', desc: 'We analyse data and credentials to curate the right options.' },
              { n: '03', title: 'Due Diligence', desc: 'Technical, legal, and financial vetting before any recommendation.' },
              { n: '04', title: 'Deal & Support', desc: 'Negotiation, documentation, registration, and beyond.' },
            ].map(({ n, title, desc }, i) => (
              <div key={n} className="cs-reveal" data-d={i * 90} style={{ textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#1c1c1a', color: '#d9ad5a', fontFamily: 'var(--font-playfair), serif', fontSize: 24, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>{n}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 8px' }}>{title}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.6, color: '#6f665a', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section style={{ background: '#efeae1', padding: 'clamp(56px,7vw,90px) clamp(20px,4vw,48px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <div className="cs-reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#9a8e7c', marginBottom: 30 }}>Trusted Developer Partners</div>
          <div className="cs-reveal" data-d="80" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            {['Max Estate', 'DLF', 'M3M', 'Nimbus Realty', 'Trump Towers', 'Adani Realty', 'Sobha', 'Kalpataru'].map((p) => (
              <span key={p} style={{ padding: '11px 22px', background: '#fff', border: '1px solid rgba(28,28,26,.08)', borderRadius: 8, fontSize: 14, fontWeight: 700, color: '#6f665a' }}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      <Footer eyebrow="Work With Us" title="Start your investment journey today" sub="Talk to our advisory team and discover how we build future-ready portfolios." />
    </>
  );
}
