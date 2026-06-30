'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const ansRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`cs-faq-item${open ? ' cs-open' : ''}`} style={{ borderBottom: '1px solid rgba(28,28,26,.12)' }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '22px 0', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontSize: 16, fontWeight: 600, color: '#1c1c1a', textAlign: 'left' }}
      >
        {question}
        <span className="cs-faq-ico" style={{ width: 30, height: 30, flexShrink: 0, borderRadius: '50%', border: '1.5px solid rgba(28,28,26,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, transition: 'transform .3s,background .3s,color .3s' }}>+</span>
      </button>
      <div style={{ maxHeight: open ? (ansRef.current?.scrollHeight ?? 200) : 0, overflow: 'hidden', transition: 'max-height .42s cubic-bezier(.16,1,.3,1)' }}>
        <div ref={ansRef} style={{ fontSize: 15, lineHeight: 1.7, color: '#6f665a', paddingBottom: 22 }}>{answer}</div>
      </div>
    </div>
  );
}

const CHECK = (
  <span style={{ width: 20, height: 20, background: 'rgba(200,151,61,.16)', color: '#a07e34', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, flexShrink: 0 }}>✓</span>
);

const SERVICES = [
  {
    n: '.01', bg: '#f7f6f3', title: 'Strategic Investments', desc: 'Research-driven plays across commercial, premium residential, and industrial assets — structured to match your wealth ambitions.',
    bullets: ['Asset selection & market timing', 'Portfolio diversification'],
    img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1100&q=72', alt: 'Strategic investments', reversed: false,
  },
  {
    n: '.02', bg: '#efeae1', title: 'Integrated Leasing', desc: 'End-to-end leasing for offices, warehouses, retail formats, and premium residences — from sourcing to signed agreement.',
    bullets: ['Tenant & landlord representation', 'Lease structuring & negotiation'],
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1100&q=72', alt: 'Integrated leasing', reversed: true,
  },
  {
    n: '.03', bg: '#f7f6f3', title: 'Due Diligence', desc: 'Technical, legal, and financial vetting covering title, documents, approvals, and full RERA compliance — before you commit.',
    bullets: ['Title & legal verification', 'RERA & approval checks'],
    img: 'https://framerusercontent.com/images/fTvLhDbO86UBiJORkMBXabiLfM.png', alt: 'Due diligence', reversed: false,
  },
  {
    n: '.04', bg: '#efeae1', title: 'Capital & Fund Support', desc: 'Financial structuring, capital access, and VC/PE introductions for developers and NRIs looking to scale with confidence.',
    bullets: ['Capital access & structuring', 'VC / PE introductions'],
    img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1100&q=72', alt: 'Capital support', reversed: true,
  },
];

export default function ServicesPage() {
  useScrollReveal();

  return (
    <>
      <Nav active="Services" />

      {/* HERO */}
      <section style={{ padding: 'clamp(120px,16vw,168px) clamp(20px,4vw,48px) clamp(56px,7vw,90px)', background: 'linear-gradient(170deg,#efeae1,#f7f6f3)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }} className="cs-split">
          <div>
            <div className="cs-reveal" style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#a07e34', marginBottom: 20 }}>
              <span style={{ width: 24, height: 1, background: '#c8973d' }} />Our Services
            </div>
            <h1 className="cs-reveal" data-d="80" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(42px,6.2vw,84px)', fontWeight: 600, lineHeight: 1, letterSpacing: -1, margin: '0 0 20px' }}>Advisory, end to end</h1>
            <p className="cs-reveal" data-d="160" style={{ fontSize: 17, lineHeight: 1.7, color: '#6f665a', maxWidth: 460, margin: 0 }}>Research-backed insight, better options, and confident decisions — plans built around your real estate goals.</p>
          </div>
          <div className="cs-reveal" data-d="120" style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', aspectRatio: '4/5', boxShadow: '0 30px 70px rgba(28,28,26,.16)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=72" alt="Modern commercial advisory" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 20, left: 20, background: '#1c1c1a', color: '#f7f6f3', padding: '16px 22px', borderRadius: 14, textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 30, fontWeight: 600, lineHeight: 1, color: '#d9ad5a' }}>4</div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', opacity: .7, marginTop: 4 }}>Core Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE SECTIONS */}
      {SERVICES.map(({ n, bg, title, desc, bullets, img, alt, reversed }) => (
        <section key={n} style={{ background: bg, padding: 'clamp(48px,6vw,80px) clamp(20px,4vw,48px)' }}>
          <div
            style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(36px,5vw,72px)', alignItems: 'center', direction: reversed ? 'rtl' : 'ltr' }}
            className="cs-srow"
          >
            <div style={{ direction: 'ltr' }}>
              <div className="cs-reveal" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(54px,8vw,96px)', fontWeight: 600, color: 'rgba(28,28,26,.08)', lineHeight: .9, marginBottom: 6 }}>{n}</div>
              <h2 className="cs-reveal" data-d="80" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(28px,3.6vw,46px)', fontWeight: 600, letterSpacing: -.5, lineHeight: 1.1, margin: '0 0 16px' }}>{title}</h2>
              <p className="cs-reveal" data-d="140" style={{ fontSize: 16, lineHeight: 1.72, color: '#6f665a', margin: '0 0 22px' }}>{desc}</p>
              <div className="cs-reveal" data-d="200" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {bullets.map((b) => (
                  <div key={b} style={{ display: 'flex', gap: 11, alignItems: 'center', fontSize: 14, color: '#2a261f' }}>{CHECK}{b}</div>
                ))}
              </div>
            </div>
            <div className="cs-reveal" data-d="120" style={{ direction: 'ltr', borderRadius: 22, overflow: 'hidden', aspectRatio: '5/4', boxShadow: '0 26px 60px rgba(28,28,26,.14)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </section>
      ))}

      {/* WHO WE SERVE */}
      <section style={{ background: '#f7f6f3', padding: 'clamp(64px,9vw,116px) clamp(20px,4vw,48px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 48px' }}>
            <div className="cs-reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#a07e34', marginBottom: 16 }}>
              <span style={{ width: 24, height: 1, background: '#c8973d' }} />Who We Serve
            </div>
            <h2 className="cs-reveal" data-d="80" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(28px,4vw,50px)', fontWeight: 600, letterSpacing: -.5, margin: 0 }}>Built for serious investors</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }} className="cs-who-grid">
            {[
              { n: '01', title: 'HNIs & Family Offices', desc: 'Wealth-focused advisory for high-net-worth portfolios.' },
              { n: '02', title: 'Corporates', desc: 'Office, retail, and industrial leasing at scale.' },
              { n: '03', title: 'NRI Investors', desc: 'Remote, RERA-compliant investing made simple.' },
              { n: '04', title: 'Developers', desc: 'Capital, fund support, and go-to-market strategy.' },
            ].map(({ n, title, desc }, i) => (
              <div key={n} className="cs-reveal cs-who" data-d={i * 80} style={{ border: '1px solid rgba(28,28,26,.1)', borderRadius: 18, padding: '28px 24px', transition: 'transform .3s,border-color .3s,background .3s' }}>
                <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 30, color: '#d9ad5a', marginBottom: 14 }}>{n}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 6px' }}>{title}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.55, color: '#6f665a', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#efeae1', padding: 'clamp(64px,9vw,116px) clamp(20px,4vw,48px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: 'clamp(36px,6vw,80px)', alignItems: 'start' }} className="cs-faq-wrap">
          <div>
            <div className="cs-reveal" style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#a07e34', marginBottom: 16 }}>
              <span style={{ width: 24, height: 1, background: '#c8973d' }} />FAQ
            </div>
            <h2 className="cs-reveal" data-d="80" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(28px,3.6vw,46px)', fontWeight: 600, letterSpacing: -.5, lineHeight: 1.08, margin: 0 }}>Common questions</h2>
          </div>
          <div className="cs-faq-list cs-reveal" data-d="120">
            <FaqItem question="What asset classes do you cover?" answer="Commercial, premium residential, branded residences, retail, and industrial — across Noida, NCR, and pan-India markets." />
            <FaqItem question="Do you support NRI investments?" answer="Yes — we guide NRIs end to end with full RERA compliance, legal clarity, and remote support wherever you are." />
            <FaqItem question="How do your fees work?" answer="Engagements are tailored to scope — advisory retainers or transaction-based, agreed transparently up front. Book a call for specifics." />
          </div>
        </div>
      </section>

      <Footer eyebrow="Let's Begin" title="Ready to invest with conviction?" sub="Tell us your goals and we'll design an advisory plan around them." />
    </>
  );
}
