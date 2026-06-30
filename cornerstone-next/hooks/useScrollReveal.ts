'use client';

import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const arm = () => {
      document.querySelectorAll<HTMLElement>('.cs-reveal:not([data-armed])').forEach((el) => {
        el.setAttribute('data-armed', '1');
        const d = el.getAttribute('data-d') || '0';
        el.style.opacity = '0';
        el.style.transform = 'translateY(42px)';
        el.style.transition = `opacity .9s cubic-bezier(.16,1,.3,1) ${d}ms, transform .9s cubic-bezier(.16,1,.3,1) ${d}ms`;
        ro.observe(el);
      });
    };

    const ro = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          (e.target as HTMLElement).style.opacity = '1';
          (e.target as HTMLElement).style.transform = 'none';
          ro.unobserve(e.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' },
    );

    arm();
    const t1 = setTimeout(arm, 250);
    const t2 = setTimeout(arm, 800);
    return () => {
      ro.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
}
