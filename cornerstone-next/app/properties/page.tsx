'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const CATEGORIES = ['all', 'residential', 'commercial', 'industrial', 'branded', 'upcoming'] as const;
type Category = typeof CATEGORIES[number];

const FEATURED = [
  {
    img: 'https://framerusercontent.com/images/4B05oCYBsBA8ZhBFWOzFLgleWM.png',
    cats: ['branded', 'residential'],
    sub: 'M3M · Sector 94, Noida · Ultra Luxury',
    title: 'The Cullinan',
    details: ['Branded Residence', '3,200 – 8,500 sq.ft', 'On Request'],
  },
  {
    img: 'https://framerusercontent.com/images/SCmPl4wPCIenDO4rrG5EsNrpsJg.png',
    cats: ['residential'],
    sub: 'DLF · Sector-168, Noida · Premium',
    title: 'The Arista Lux',
    details: ['Residential', '1,800 – 4,200 sq.ft', '₹3.2 Cr onwards'],
  },
];

const GRID = [
  { img: 'https://framerusercontent.com/images/QmCjEL8YSsyArnN9l5L7Ox8LdSQ.jpeg', cats: ['residential'], badge: 'Featured', badgeBg: '#c8973d', cat: 'Residential', name: 'Hillside View House', loc: 'Sector 94, Noida', price: '₹9,200 / sq.ft', size: '2,400 sq.ft' },
  { img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=900&q=72', cats: ['commercial'], badge: 'Commercial', badgeBg: '#c8973d', cat: 'Commercial', name: 'DLF Commercial Tower', loc: 'Sector 132, Noida', price: '₹9,800 / sq.ft', size: '980 sq.ft' },
  { img: 'https://framerusercontent.com/images/unUSH9a5g14PTwmHdV6e56xNIs.png', cats: ['residential'], badge: 'New', badgeBg: '#3f7d63', cat: 'Residential', name: 'Nimbus Golden Palms', loc: 'Sector 168, Noida', price: '₹34,000 / sq.ft', size: '4,200 sq.ft' },
  { img: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=900&q=72', cats: ['branded', 'upcoming'], badge: 'Upcoming', badgeBg: '#7a6cc4', cat: 'Branded Residence', name: 'Elie Saab Residences', loc: 'Pan India', price: 'On Request', size: 'Pre-Launch' },
  { img: 'https://framerusercontent.com/images/2LXhTbxMglkXHEUCXW8SBkvPGQ.png', cats: ['branded', 'residential'], badge: 'Featured', badgeBg: '#c8973d', cat: 'Branded Residence', name: 'Trump Towers', loc: 'Pune, Maharashtra', price: '₹45,000 / sq.ft', size: 'Ultra HNI' },
  { img: 'https://framerusercontent.com/images/Hs28VYJsumw25Bf01iFhauVh6U.png', cats: ['industrial', 'commercial'], badge: 'Industrial', badgeBg: '#1c1c1a', badgeColor: '#f7f6f3', cat: 'Industrial', name: 'Logistics Park — NH-58', loc: 'Greater Noida West', price: '₹4,200 / sq.ft', size: '10,000 sq.ft+' },
];

export default function PropertiesPage() {
  useScrollReveal();
  const [activeCat, setActiveCat] = useState<Category>('all');
  const aliveRef = useRef(true);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const alive = aliveRef;
    const loop = () => {
      if (!alive.current) return;
      const sy = window.scrollY;
      const vh = window.innerHeight;
      const hero = document.getElementById('cs-phero');
      if (hero) {
        const r = hero.parentElement!.getBoundingClientRect();
        hero.style.transform = `translateY(${-r.top * 0.18}px)`;
      }
      document.querySelectorAll<HTMLElement>('.cs-feat-bg').forEach((bg) => {
        const r = bg.parentElement!.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        bg.style.transform = `translateY(${((vh - r.top) / (vh + r.height) - 0.5) * 90}px)`;
      });
      rafRef.current = requestAnimationFrame(loop);
    };
    loop();
    return () => { aliveRef.current = false; cancelAnimationFrame(rafRef.current); };
  }, []);

  const isVisible = (cats: string[]) => activeCat === 'all' || cats.includes(activeCat);
  const anyGridVisible = GRID.some((p) => isVisible(p.cats));

  return (
    <>
      <Nav active="Properties" />

      {/* HERO */}
      <section style={{ position: 'relative', height: '74vh', minHeight: 520, overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <div id="cs-phero" style={{ position: 'absolute', inset: '-10% 0', willChange: 'transform' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1900&q=72" alt="Glass towers" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(28,22,14,.72),rgba(28,22,14,.12) 55%,rgba(28,22,14,.25))' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', width: '100%', padding: '0 clamp(20px,4vw,48px) clamp(44px,6vw,70px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#e8c987', marginBottom: 16 }}>
            <span style={{ width: 24, height: 1, background: '#d9ad5a' }} />Premium Portfolio
          </div>
          <h1 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(44px,6.5vw,92px)', fontWeight: 600, lineHeight: .96, letterSpacing: -1, color: '#fff', margin: '0 0 16px', maxWidth: 780 }}>Our curated properties</h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,.82)', maxWidth: 480, margin: 0 }}>Hand-picked commercial, residential, and industrial assets across India&apos;s most sought-after locations.</p>
        </div>
      </section>

      {/* FILTERS */}
      <div style={{ position: 'sticky', top: 72, zIndex: 120, background: 'rgba(247,246,243,.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(28,28,26,.08)', padding: '0 clamp(20px,4vw,48px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: 9, padding: '15px 0', overflowX: 'auto' }}>
          {CATEGORIES.map((cat) => {
            const on = activeCat === cat;
            return (
              <button
                key={cat}
                className="cs-chip"
                onClick={() => setActiveCat(cat)}
                style={{ padding: '9px 20px', borderRadius: 40, fontSize: 13, fontWeight: 600, border: on ? '1.5px solid #1c1c1a' : '1.5px solid rgba(28,28,26,.12)', background: on ? '#1c1c1a' : '#fff', color: on ? '#f7f6f3' : '#6f665a', fontFamily: 'var(--font-manrope), Manrope, sans-serif', cursor: 'pointer' }}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            );
          })}
        </div>
      </div>

      {/* FEATURED FULL-BLEED */}
      {FEATURED.map(({ img, cats, sub, title, details }) => (
        <div key={title} style={{ display: isVisible(cats) ? undefined : 'none', position: 'relative', height: '82vh', minHeight: 520, overflow: 'hidden', alignItems: 'flex-end', flexDirection: 'column' as const, justifyContent: 'flex-end' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', position: 'relative', height: '100%' }}>
            <div className="cs-feat-bg" style={{ position: 'absolute', inset: '-12% 0', willChange: 'transform' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(20,16,10,.66),rgba(20,16,10,.05) 55%,transparent)' }} />
            <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', width: '100%', padding: '0 clamp(20px,4vw,48px) clamp(36px,5vw,56px)' }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgba(255,255,255,.72)', marginBottom: 12 }}>{sub}</div>
              <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(34px,5vw,68px)', fontWeight: 600, color: '#fff', lineHeight: 1, margin: '0 0 16px' }}>{title}</h2>
              <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', marginBottom: 22, color: 'rgba(255,255,255,.78)', fontSize: 13, fontWeight: 600 }}>
                {details.map((d) => <span key={d}>{d}</span>)}
              </div>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: 'rgba(255,255,255,.16)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.3)', color: '#fff', padding: '12px 22px', borderRadius: 40, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
                Inquire Now <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* GRID */}
      <section style={{ background: '#f7f6f3', padding: 'clamp(56px,8vw,100px) clamp(20px,4vw,48px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 40 }}>
            <div className="cs-reveal" style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#a07e34', marginBottom: 14 }}>
              <span style={{ width: 24, height: 1, background: '#c8973d' }} />All Listings
            </div>
            <h2 className="cs-reveal" data-d="80" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(28px,4vw,50px)', fontWeight: 600, letterSpacing: -.5, margin: 0 }}>More properties</h2>
          </div>
          <div className="cs-pgrid">
            {GRID.map(({ img, cats, badge, badgeBg, badgeColor, cat, name, loc, price, size }, i) => (
              <div
                key={name}
                className="cs-reveal cs-pcard"
                data-d={i * 80}
                style={{ display: isVisible(cats) ? undefined : 'none', background: '#fff', border: '1px solid rgba(28,28,26,.07)', borderRadius: 18, overflow: 'hidden', boxShadow: '0 14px 34px rgba(28,28,26,.05)', transition: 'transform .3s,box-shadow .3s' }}
              >
                <div style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="cs-pimg" src={img} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .7s cubic-bezier(.16,1,.3,1)' }} />
                  <span style={{ position: 'absolute', top: 12, left: 12, background: badgeBg, color: badgeColor ?? '#fff', fontSize: 10, fontWeight: 800, letterSpacing: .8, textTransform: 'uppercase', padding: '4px 10px', borderRadius: 5 }}>{badge}</span>
                </div>
                <div style={{ padding: '20px 22px' }}>
                  <div style={{ display: 'inline-block', fontSize: 10.5, fontWeight: 700, letterSpacing: .6, textTransform: 'uppercase', color: '#a07e34', background: 'rgba(200,151,61,.1)', padding: '4px 10px', borderRadius: 5, marginBottom: 12 }}>{cat}</div>
                  <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 22, fontWeight: 600, marginBottom: 4 }}>{name}</div>
                  <div style={{ fontSize: 13, color: '#9a8e7c', marginBottom: 12 }}>{loc}</div>
                  <div style={{ fontSize: 15, fontWeight: 800 }}>{price} <span style={{ fontSize: 12, color: '#9a8e7c', fontWeight: 500 }}>· {size}</span></div>
                </div>
              </div>
            ))}
          </div>
          {!anyGridVisible && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#9a8e7c', fontSize: 15 }}>
              No properties in this category yet — <Link href="/contact" style={{ color: '#a07e34', fontWeight: 700 }}>ask our advisors</Link>.
            </div>
          )}
        </div>
      </section>

      <Footer eyebrow="Find Your Property" title="Can't find what you're looking for?" sub="Our team has access to exclusive off-market listings and pre-launch projects not shown here." />
    </>
  );
}
