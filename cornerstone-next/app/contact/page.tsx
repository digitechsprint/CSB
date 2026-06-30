'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ContactPage() {
  useScrollReveal();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (_) {}
  };

  const fieldStyle: React.CSSProperties = {
    width: '100%',
    fontFamily: 'var(--font-manrope), Manrope, sans-serif',
    fontSize: 15,
    color: '#1c1c1a',
    background: '#fff',
    border: '1.5px solid rgba(28,28,26,.12)',
    borderRadius: 12,
    padding: '14px 16px',
    outline: 'none',
  };

  const labelStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: .6,
    textTransform: 'uppercase',
    color: '#6f665a',
  };

  return (
    <>
      <Nav active="Contact" />

      {/* HERO */}
      <section style={{ padding: 'clamp(120px,16vw,168px) clamp(20px,4vw,48px) clamp(40px,5vw,60px)', background: 'linear-gradient(170deg,#efeae1,#f7f6f3)', textAlign: 'center' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div className="cs-reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#a07e34', marginBottom: 20 }}>
            <span style={{ width: 24, height: 1, background: '#c8973d' }} />Get In Touch
          </div>
          <h1 className="cs-reveal" data-d="80" style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(42px,6.2vw,84px)', fontWeight: 600, lineHeight: 1, letterSpacing: -1, margin: '0 0 20px' }}>Let&apos;s build your portfolio</h1>
          <p className="cs-reveal" data-d="160" style={{ fontSize: 17, lineHeight: 1.7, color: '#6f665a', margin: '0 auto', maxWidth: 520 }}>Tell us your goals and our advisory team will respond within 24 hours with a tailored plan and curated options.</p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section style={{ background: '#f7f6f3', padding: 'clamp(8px,2vw,24px) clamp(20px,4vw,48px) clamp(64px,9vw,110px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.15fr .85fr', gap: 'clamp(28px,4vw,56px)', alignItems: 'start' }} className="cs-c-grid">

          {/* FORM CARD */}
          <div className="cs-reveal" style={{ background: '#fff', border: '1px solid rgba(28,28,26,.07)', borderRadius: 24, padding: 'clamp(28px,4vw,44px)', boxShadow: '0 22px 50px rgba(28,28,26,.06)' }}>
            {!sent ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="cs-form-row">
                  <label style={labelStyle}>
                    Full Name
                    <input className="cs-field" name="name" type="text" placeholder="Your name" required style={fieldStyle} />
                  </label>
                  <label style={labelStyle}>
                    Phone
                    <input className="cs-field" name="phone" type="tel" placeholder="+91 00000 00000" style={fieldStyle} />
                  </label>
                </div>
                <label style={labelStyle}>
                  Email
                  <input className="cs-field" name="email" type="email" placeholder="you@email.com" required style={fieldStyle} />
                </label>
                <label style={labelStyle}>
                  I&apos;m interested in
                  <select className="cs-field" name="interest" style={fieldStyle}>
                    <option>Buying a residence</option>
                    <option>Commercial investment</option>
                    <option>Leasing (office / retail / industrial)</option>
                    <option>NRI advisory</option>
                    <option>Capital &amp; fund support</option>
                    <option>Something else</option>
                  </select>
                </label>
                <label style={labelStyle}>
                  Message
                  <textarea className="cs-field" name="message" placeholder="Tell us about your goals, budget, and preferred locations…" style={{ ...fieldStyle, resize: 'vertical', minHeight: 128 }} />
                </label>
                <button type="submit" style={{ marginTop: 6, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 11, background: '#1c1c1a', color: '#f7f6f3', padding: '16px 28px', border: 'none', borderRadius: 40, fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontSize: 14, fontWeight: 700, cursor: 'pointer', boxShadow: '0 10px 28px rgba(28,28,26,.2)' }}>
                  Send Inquiry
                  <span style={{ width: 24, height: 24, borderRadius: '50%', background: '#d9ad5a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1c1c1a' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </span>
                </button>
                <p style={{ fontSize: 12, color: '#9a8e7c', margin: '2px 0 0', textAlign: 'center' }}>We respect your privacy. Your details are never shared.</p>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: 'clamp(32px,6vw,72px) 8px' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(200,151,61,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 22px' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a07e34" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                </div>
                <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(28px,3.4vw,40px)', fontWeight: 600, margin: '0 0 12px' }}>Thank you — message received</h2>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: '#6f665a', maxWidth: 380, margin: '0 auto' }}>Our advisory team will be in touch within 24 hours. For anything urgent, call us directly.</p>
              </div>
            )}
          </div>

          {/* INFO COLUMN */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <a className="cs-reveal cs-info" data-d="80" href="tel:+919810000000" style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fff', border: '1px solid rgba(28,28,26,.08)', borderRadius: 18, padding: 24, textDecoration: 'none', transition: 'transform .3s,border-color .3s' }}>
              <span style={{ width: 44, height: 44, flexShrink: 0, borderRadius: 12, background: '#1c1c1a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d9ad5a' }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </span>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: '#9a8e7c', marginBottom: 5 }}>Call Us</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#1c1c1a' }}>+91 98100 00000</div>
                <div style={{ fontSize: 13, color: '#6f665a', marginTop: 2 }}>Mon–Sat, 10am–7pm IST</div>
              </div>
            </a>

            <a className="cs-reveal cs-info" data-d="140" href="mailto:hello@cornerstonebuildcom.com" style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fff', border: '1px solid rgba(28,28,26,.08)', borderRadius: 18, padding: 24, textDecoration: 'none', transition: 'transform .3s,border-color .3s' }}>
              <span style={{ width: 44, height: 44, flexShrink: 0, borderRadius: 12, background: '#1c1c1a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d9ad5a' }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
              </span>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: '#9a8e7c', marginBottom: 5 }}>Email Us</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#1c1c1a' }}>hello@cornerstonebuildcom.com</div>
                <div style={{ fontSize: 13, color: '#6f665a', marginTop: 2 }}>We reply within 24 hours</div>
              </div>
            </a>

            <div className="cs-reveal cs-info" data-d="200" style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fff', border: '1px solid rgba(28,28,26,.08)', borderRadius: 18, padding: 24, transition: 'transform .3s,border-color .3s' }}>
              <span style={{ width: 44, height: 44, flexShrink: 0, borderRadius: 12, background: '#1c1c1a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d9ad5a' }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </span>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: '#9a8e7c', marginBottom: 5 }}>Visit Us</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#1c1c1a', lineHeight: 1.4 }}>111, F-Block, Sector 8</div>
                <div style={{ fontSize: 13, color: '#6f665a', marginTop: 2 }}>Noida, Uttar Pradesh</div>
              </div>
            </div>

            <div className="cs-reveal" data-d="240" style={{ position: 'relative', borderRadius: 18, overflow: 'hidden', height: 200, boxShadow: '0 18px 40px rgba(28,28,26,.1)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=72" alt="Sector 8 business district" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(28,22,14,.55),transparent 60%)' }} />
              <div style={{ position: 'absolute', left: 18, bottom: 16, color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: .6 }}>📍 111, F-Block, Sector 8, Noida</div>
            </div>
          </div>

        </div>
      </section>

      <Footer eyebrow="Prefer To Talk?" title="Book a one-on-one consultation" sub="Sit down with our advisors and map out a future-ready real estate strategy built around your goals." />
    </>
  );
}
