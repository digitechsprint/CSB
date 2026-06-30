import type { Metadata } from 'next';
import { Playfair_Display, Manrope } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CornerStone Buildcom — Premium Real Estate Advisory',
  description:
    'Institutional-grade real estate advisory for HNIs, family offices, and corporates across India. Commercial, residential, and industrial assets.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <body style={{ fontFamily: 'var(--font-manrope), Manrope, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
