'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ArrowIcon = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const ansRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`cs-faq-item${open ? ' cs-open' : ''}`} style={{ borderBottom: '1px solid rgba(28,28,26,.1)' }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '22px 0', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontSize: 16, fontWeight: 600, color: '#1c1c1a', textAlign: 'left' }}
      >
        {question}
        <span className="cs-faq-ico" style={{ width: 30, height: 30, flexShrink: 0, borderRadius: '50%', border: '1.5px solid rgba(28,28,26,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, transition: 'transform .3s,background .3s,color .3s' }}>+</span>
      </button>
      <div style={{ maxHeight: open ? (ansRef.current?.scrollHeight ?? 200) : 0, overflow: 'hidden', transition: 'max-height .42s cubic-bezier(.16,1,.3,1)' }}>
        <div ref={ansRef} style={{ fontSize: 15, lineHeight: 1.7, color: '#6f665a', paddingBottom: 22 }}>{answer}</div>
      </div>
    </div>
  );
}

export default function HomePage() {
  useScrollReveal();

  // Cinematic hero scroll
  const spRef = useRef<number | null>(null);
  const aliveRef = useRef(true);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
    const seg = (p: number, a: number, b: number) => clamp((p - a) / (b - a), 0, 1);

    const hero = document.getElementById('cs-hero');

    const tick = (snap: boolean) => {
      const vh = window.innerHeight;

      // featured parallax
      document.querySelectorAll<HTMLElement>('.cs-feat-bg').forEach((bg) => {
        const r = bg.parentElement!.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        const prog = (vh - r.top) / (vh + r.height);
        bg.style.transform = `translateY(${(prog - 0.5) * 90}px)`;
      });

      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const total = hero.offsetHeight - vh;
      const target = Math.max(0, Math.min(1, -rect.top / total));

      if (spRef.current === null || snap) spRef.current = target;
      else {
        spRef.current += (target - spRef.current) * 0.09;
        if (Math.abs(target - spRef.current) < 0.00015) spRef.current = target;
      }
      const p = spRef.current;

      const sky = document.getElementById('cs-sky') as HTMLElement | null;
      const tower = document.getElementById('cs-tower') as HTMLElement | null;
      const intr = document.getElementById('cs-int') as HTMLElement | null;
      const c1 = document.getElementById('cs-copy1') as HTMLElement | null;
      const c2 = document.getElementById('cs-copy2') as HTMLElement | null;
      const c3 = document.getElementById('cs-copy3') as HTMLElement | null;
      const hint = document.getElementById('cs-hint') as HTMLElement | null;
      if (!sky) return;

      const skyZ = 1 + seg(p, 0, 0.42) * 0.9;
      sky.style.transform = `scale(${skyZ})`;
      sky.style.opacity = String(1 - seg(p, 0.28, 0.46));
      sky.style.filter = `blur(${seg(p, 0.26, 0.46) * 8}px)`;

      if (tower) {
        const tZ = 1.04 + seg(p, 0.28, 0.82) * 2.75;
        tower.style.transform = `scale(${tZ})`;
        tower.style.opacity = String(Math.min(seg(p, 0.28, 0.45), 1 - seg(p, 0.60, 0.74)));
        tower.style.filter = `blur(${(1 - seg(p, 0.30, 0.46)) * 6 + seg(p, 0.62, 0.76) * 7}px)`;
      }

      if (intr) {
        intr.style.transform = `scale(${1.24 - seg(p, 0.68, 1) * 0.24})`;
        intr.style.opacity = String(seg(p, 0.64, 0.82));
        intr.style.filter = `blur(${(1 - seg(p, 0.66, 0.82)) * 7}px)`;
      }

      if (c1) {
        c1.style.opacity = String(1 - seg(p, 0.15, 0.26));
        c1.style.transform = `translate(-50%,calc(-50% - ${seg(p, 0, 0.26) * 40}px))`;
      }
      if (c2) {
        c2.style.opacity = String(Math.min(seg(p, 0.40, 0.49), 1 - seg(p, 0.58, 0.66)));
        c2.style.transform = `translate(-50%,calc(-50% + ${(1 - seg(p, 0.40, 0.49)) * 26 - seg(p, 0.58, 0.66) * 26}px))`;
      }
      if (c3) {
        c3.style.opacity = String(seg(p, 0.80, 0.90));
        c3.style.transform = `translate(-50%,calc(-50% + ${(1 - seg(p, 0.80, 0.90)) * 28}px))`;
      }
      if (hint) hint.style.opacity = String(1 - seg(p, 0.02, 0.08));

      const idx = p < 0.34 ? 0 : p < 0.66 ? 1 : 2;
      for (let i = 0; i < 3; i++) {
        const el = document.getElementById('cs-r' + i);
        if (el) el.classList.toggle('on', i === idx);
      }
    };

    const loop = () => {
      if (!aliveRef.current) return;
      tick(false);
      rafRef.current = requestAnimationFrame(loop);
    };
    loop();

    const onScroll = () => tick(true);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      aliveRef.current = false;
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <Nav active="Home" />

      {/* ░░ CINEMATIC HERO ░░ */}
      <section id="cs-hero" style={{ position: 'relative', height: '340vh', background: '#f7f6f3' }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', background: 'linear-gradient(180deg,#cfe0f0 0%,#e9edee 55%,#f7f6f3 100%)' }}>

          <div id="cs-sky" style={{ position: 'absolute', inset: 0, willChange: 'transform,opacity', transformOrigin: '50% 60%' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1900&q=75" alt="Glass skyscraper" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%' }} />
          </div>
          <div id="cs-tower" style={{ position: 'absolute', inset: 0, willChange: 'transform,opacity', opacity: 0, transformOrigin: '50% 42%' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1900&q=75" alt="Tower facade" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
          </div>
          <div id="cs-int" style={{ position: 'absolute', inset: 0, willChange: 'transform,opacity', opacity: 0, transformOrigin: '50% 50%' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1900&q=75" alt="Sunlit interior" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          </div>

          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 65% 56% at 50% 46%,rgba(247,246,243,.82),rgba(247,246,243,.2) 60%,rgba(247,246,243,0) 78%)' }} />
          <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '32%', background: 'linear-gradient(to top,#f7f6f3,transparent)', pointerEvents: 'none' }} />

          {/* Progress rail */}
          <div style={{ position: 'absolute', left: 'clamp(20px,4vw,48px)', top: '50%', transform: 'translateY(-50%)', zIndex: 8, display: 'flex', flexDirection: 'column', gap: 26 }} className="cs-rail-wrap">
            {[['01', 'Skyline'], ['02', 'The Ascent'], ['03', 'Residence']].map(([n, l], i) => (
              <div key={i} id={`cs-r${i}`} className="cs-rail">
                <span className="cs-rail-n" style={{ fontFamily: 'var(--font-playfair), serif' }}>{n}</span>
                <span className="cs-rail-l">{l}</span>
              </div>
            ))}
          </div>

          {/* Copy stack */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px', zIndex: 7, pointerEvents: 'none' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: 980 }}>
              <div id="cs-copy1" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: '100%' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#a07e34', marginBottom: 18, textShadow: '0 0 30px rgba(247,246,243,.9)' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#c8973d' }} />Strategic Real Estate Advisory
                </div>
                <h1 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(46px,8vw,108px)', fontWeight: 600, lineHeight: .96, letterSpacing: -1.5, margin: 0, color: '#1c1c1a', textShadow: '0 2px 4px rgba(247,246,243,.5), 0 0 60px rgba(247,246,243,.8)' }}>Build a future-<br />ready portfolio</h1>
                <p style={{ fontSize: 'clamp(14px,1.6vw,18px)', fontWeight: 500, letterSpacing: 3, textTransform: 'uppercase', color: '#6f665a', margin: '22px 0 0', textShadow: '0 0 40px rgba(247,246,243,.9)' }}>Commercial · Residential · Industrial</p>
              </div>
              <div id="cs-copy2" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: '100%', opacity: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#d9ad5a', marginBottom: 14 }}>Max Estate 105 · Sector 105, Noida</div>
                <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(34px,5.5vw,72px)', fontWeight: 600, lineHeight: 1.02, letterSpacing: -1, margin: 0, color: '#fff', textShadow: '0 4px 40px rgba(0,0,0,.45)' }}>We know every floor<br />worth owning</h2>
              </div>
              <div id="cs-copy3" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: '100%', opacity: 0, pointerEvents: 'auto' }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#a07e34', marginBottom: 14 }}>Step Inside</div>
                <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(38px,6vw,84px)', fontWeight: 600, lineHeight: 1, letterSpacing: -1, margin: '0 0 26px', color: '#1c1c1a' }}>Find the address<br />that fits your life</h2>
                <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/properties" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#1c1c1a', color: '#f7f6f3', padding: '15px 28px', borderRadius: 40, fontSize: 14, fontWeight: 600, textDecoration: 'none', boxShadow: '0 10px 28px rgba(28,28,26,.22)' }}>
                    View Properties
                    <span style={{ width: 24, height: 24, borderRadius: '50%', background: '#d9ad5a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1c1c1a' }}><ArrowIcon /></span>
                  </Link>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid rgba(28,28,26,.25)', color: '#1c1c1a', padding: '15px 28px', borderRadius: 40, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Inquire Now</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div id="cs-hint" style={{ position: 'absolute', left: '50%', bottom: 34, transform: 'translateX(-50%)', zIndex: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: '#4a443b' }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase' }}>Scroll to ascend</span>
            <span style={{ width: 24, height: 38, border: '1.5px solid rgba(28,28,26,.4)', borderRadius: 14, display: 'flex', justifyContent: 'center', paddingTop: 7 }}>
              <span style={{ width: 3, height: 7, borderRadius: 2, background: '#c8973d', animation: 'csDot 1.5s ease-in-out infinite' }} />
            </span>
          </div>
        </div>
      </section>

      {/* ░░ INTRO + STATS ░░ */}
      <section style={{ background: '#efeae1', padding: 'clamp(64px,9vw,120px) clamp(20px,4vw,48px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 'clamp(40px,6vw,90px)', alignItems: 'center' }} className="cs-intro-grid">
          <div>
            <div className="cs-reveal" style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#a07e34', marginBottom: 22 }}>
              <span style={{ width: 24, height: 1, background: '#c8973d' }} />Since 2012
            </div>
            <h2 className="cs-reveal" data-d="80" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(30px,4.4vw,56px)', fontWeight: 600, lineHeight: 1.06, letterSpacing: -.5, margin: '0 0 22px' }}>Institutional-grade advisory, built around your ambitions</h2>
            <p className="cs-reveal" data-d="160" style={{ fontSize: 16.5, lineHeight: 1.7, color: '#6f665a', margin: '0 0 30px', maxWidth: 480 }}>Led by founder Rajesh Ghai with 18+ years of expertise, we guide investors, corporates, and family offices through research, due diligence, and end-to-end support.</p>
            <Link className="cs-reveal" data-d="220" href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid rgba(28,28,26,.22)', color: '#1c1c1a', padding: '13px 24px', borderRadius: 40, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
              Our Story <ArrowIcon size={13} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {[
              { val: '₹2.1M+', label: 'Value Advised', dark: false },
              { val: '500+', label: 'Projects', dark: true },
              { val: '300+', label: 'HNI Clients', dark: false },
              { val: '18+', label: 'Years', dark: false },
            ].map(({ val, label, dark }, i) => (
              <div key={i} className="cs-reveal" data-d={i * 80} style={{ background: dark ? '#1c1c1a' : '#fff', border: dark ? 'none' : '1px solid rgba(28,28,26,.07)', borderRadius: 18, padding: '28px 24px', boxShadow: dark ? '0 14px 34px rgba(28,28,26,.18)' : '0 14px 34px rgba(28,28,26,.05)' }}>
                <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 42, fontWeight: 600, lineHeight: 1, color: dark ? '#d9ad5a' : '#1c1c1a' }}>{val}</div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: dark ? 'rgba(247,246,243,.6)' : '#9a8e7c', marginTop: 8 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ░░ FEATURED RESIDENCES ░░ */}
      <section style={{ background: '#f7f6f3', padding: 'clamp(64px,9vw,116px) clamp(20px,4vw,48px) clamp(40px,5vw,60px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap', marginBottom: 44 }}>
          <div>
            <div className="cs-reveal" style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#a07e34', marginBottom: 14 }}>
              <span style={{ width: 24, height: 1, background: '#c8973d' }} />Signature Listings
            </div>
            <h2 className="cs-reveal" data-d="80" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(30px,4.4vw,56px)', fontWeight: 600, letterSpacing: -.5, margin: 0 }}>Residences worth ascending for</h2>
          </div>
          <Link className="cs-reveal" data-d="120" href="/properties" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 600, color: '#6f665a', textDecoration: 'none' }}>
            View all <ArrowIcon size={14} />
          </Link>
        </div>
      </section>

      {[
        { img: 'https://framerusercontent.com/images/2LXhTbxMglkXHEUCXW8SBkvPGQ.png', label: 'Max Estate · Sector-16B, Noida', title: 'The Max State' },
        { img: 'https://framerusercontent.com/images/SCmPl4wPCIenDO4rrG5EsNrpsJg.png', label: 'DLF · Sector-168, Noida', title: 'The Arista Lux' },
      ].map(({ img, label, title }) => (
        <div key={title} className="cs-feat" style={{ position: 'relative', height: '84vh', minHeight: 520, overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
          <div className="cs-feat-bg" style={{ position: 'absolute', inset: '-12% 0', willChange: 'transform' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(20,16,10,.62),rgba(20,16,10,.05) 55%,transparent)' }} />
          <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', width: '100%', padding: '0 clamp(20px,4vw,48px) clamp(36px,5vw,56px)' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgba(255,255,255,.7)', marginBottom: 12 }}>{label}</div>
            <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(34px,5vw,68px)', fontWeight: 600, color: '#fff', lineHeight: 1, margin: '0 0 18px' }}>{title}</h3>
            <Link href="/properties" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: 'rgba(255,255,255,.16)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.3)', color: '#fff', padding: '12px 22px', borderRadius: 40, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
              Explore <ArrowIcon size={13} />
            </Link>
          </div>
        </div>
      ))}

      {/* ░░ SERVICES ░░ */}
      <section style={{ background: '#efeae1', padding: 'clamp(64px,9vw,120px) clamp(20px,4vw,48px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ maxWidth: 620, marginBottom: 48 }}>
            <div className="cs-reveal" style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#a07e34', marginBottom: 16 }}>
              <span style={{ width: 24, height: 1, background: '#c8973d' }} />What We Do
            </div>
            <h2 className="cs-reveal" data-d="80" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(30px,4.4vw,56px)', fontWeight: 600, letterSpacing: -.5, lineHeight: 1.06, margin: 0 }}>Everything you need to invest with conviction</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }} className="cs-svc-grid">
            {[
              { n: '.01', title: 'Strategic Investments', desc: 'Research-driven plays across commercial, residential, and industrial assets.' },
              { n: '.02', title: 'Integrated Leasing', desc: 'End-to-end leasing for offices, warehouses, retail, and premium homes.' },
              { n: '.03', title: 'Due Diligence', desc: 'Technical, legal, and financial vetting — title, approvals, and RERA.' },
              { n: '.04', title: 'Capital Support', desc: 'Financial structuring, capital access, and VC/PE introductions.' },
            ].map(({ n, title, desc }, i) => (
              <div key={n} className="cs-reveal cs-svc" data-d={i * 80} style={{ background: '#fff', border: '1px solid rgba(28,28,26,.07)', borderRadius: 18, padding: '30px 26px', transition: 'transform .35s cubic-bezier(.16,1,.3,1),box-shadow .35s' }}>
                <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 34, color: '#d9ad5a', lineHeight: 1, marginBottom: 18 }}>{n}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 10px' }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: '#6f665a', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
          <div className="cs-reveal" style={{ marginTop: 36 }}>
            <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#1c1c1a', color: '#f7f6f3', padding: '14px 26px', borderRadius: 40, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
              All Services <ArrowIcon size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ░░ PROPERTY GRID TEASER ░░ */}
      <section style={{ background: '#f7f6f3', padding: 'clamp(64px,9vw,116px) clamp(20px,4vw,48px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap', marginBottom: 40 }}>
            <h2 className="cs-reveal" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(28px,4vw,50px)', fontWeight: 600, letterSpacing: -.5, margin: 0 }}>More to explore</h2>
            <Link className="cs-reveal" data-d="80" href="/properties" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 600, color: '#6f665a', textDecoration: 'none' }}>
              All properties <ArrowIcon size={14} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="cs-grid3">
            {[
              { img: 'https://framerusercontent.com/images/QmCjEL8YSsyArnN9l5L7Ox8LdSQ.jpeg', cat: 'Residential', name: 'Hillside View House', loc: 'Sector 94, Noida · 2,400 sq.ft' },
              { img: 'https://framerusercontent.com/images/4B05oCYBsBA8ZhBFWOzFLgleWM.png', cat: 'Branded Residence', name: 'The Cullinan', loc: 'M3M · Sector 94, Noida' },
              { img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=900&q=72', cat: 'Commercial', name: 'DLF Commercial Tower', loc: 'Sector 132, Noida · 980 sq.ft' },
            ].map(({ img, cat, name, loc }, i) => (
              <Link key={name} href="/properties" className="cs-reveal cs-card" data-d={i * 90} style={{ display: 'block', background: '#fff', border: '1px solid rgba(28,28,26,.07)', borderRadius: 18, overflow: 'hidden', textDecoration: 'none', boxShadow: '0 14px 34px rgba(28,28,26,.05)', transition: 'transform .3s,box-shadow .3s' }}>
                <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={name} className="cs-card-img" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .7s cubic-bezier(.16,1,.3,1)' }} />
                </div>
                <div style={{ padding: '20px 22px' }}>
                  <div style={{ display: 'inline-block', fontSize: 10.5, fontWeight: 700, letterSpacing: .6, textTransform: 'uppercase', color: '#a07e34', background: 'rgba(200,151,61,.1)', padding: '4px 10px', borderRadius: 5, marginBottom: 12 }}>{cat}</div>
                  <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 22, fontWeight: 600, marginBottom: 4 }}>{name}</div>
                  <div style={{ fontSize: 13, color: '#9a8e7c' }}>{loc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ░░ TESTIMONIALS ░░ */}
      <section style={{ background: '#efeae1', padding: 'clamp(64px,9vw,116px) clamp(20px,4vw,48px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="cs-reveal" style={{ textAlign: 'center', fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#a07e34', marginBottom: 14 }}>Voices</div>
          <h2 className="cs-reveal" data-d="80" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(28px,4vw,52px)', fontWeight: 600, textAlign: 'center', letterSpacing: -.5, margin: '0 0 46px' }}>Trusted by those who build legacies</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="cs-grid2">
            {[
              { initials: 'RS', name: 'Rahul Sharma', role: 'Corporate Occupier, Delhi NCR', quote: '"Their due diligence was thorough and the team incredibly knowledgeable. We found the perfect commercial space in Noida."' },
              { initials: 'PK', name: 'Priya Kapoor', role: 'NRI Investor, Singapore', quote: '"As an NRI investor I needed a trusted partner in India. Their RERA focus and transparency gave me full confidence."' },
            ].map(({ initials, name, role, quote }, i) => (
              <div key={name} className="cs-reveal" data-d={i * 90} style={{ background: '#fff', border: '1px solid rgba(28,28,26,.07)', borderRadius: 20, padding: '34px 32px', boxShadow: '0 14px 34px rgba(28,28,26,.05)' }}>
                <div style={{ color: '#c8973d', letterSpacing: 3, fontSize: 14, marginBottom: 16 }}>★★★★★</div>
                <p style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 21, fontWeight: 500, lineHeight: 1.45, color: '#2a261f', margin: '0 0 22px' }}>{quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'linear-gradient(135deg,#c8973d,#e0b765)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#fff', fontSize: 14 }}>{initials}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>{name}</div>
                    <div style={{ fontSize: 12, color: '#9a8e7c' }}>{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ░░ FAQ ░░ */}
      <section style={{ background: '#f7f6f3', padding: 'clamp(64px,9vw,116px) clamp(20px,4vw,48px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: 'clamp(36px,6vw,80px)', alignItems: 'start' }} className="cs-faq-wrap">
          <div>
            <div className="cs-reveal" style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#a07e34', marginBottom: 16 }}>
              <span style={{ width: 24, height: 1, background: '#c8973d' }} />FAQ
            </div>
            <h2 className="cs-reveal" data-d="80" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(28px,3.6vw,46px)', fontWeight: 600, letterSpacing: -.5, lineHeight: 1.08, margin: 0 }}>Things you<br />should know</h2>
          </div>
          <div className="cs-faq-list cs-reveal" data-d="120">
            <FaqItem question="Do you support NRI investments?" answer="Yes. We guide NRIs through India's real estate landscape with full RERA compliance, legal clarity, and end-to-end support — wherever you are in the world." />
            <FaqItem question="Can I explore both rental and buying options?" answer="Absolutely. We offer integrated leasing advisory for office, industrial, retail, and residential spaces alongside investment and acquisition services across all asset classes." />
            <FaqItem question="How do I check if a property is available?" answer="Our advisory team tracks real-time availability across all listed properties. Contact us and we'll share pricing, availability, and next steps within 24 hours." />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
