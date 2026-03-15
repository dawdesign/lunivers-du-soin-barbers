import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Barbers } from './components/Barbers';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { MarqueeAnimation } from './components/MarqueeAnimation';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches || window.matchMedia('(pointer: coarse)').matches;

    const lenis = new Lenis({
      duration: isMobile ? 1.6 : 1.2,
      easing: isMobile
        ? (t) => 1 - Math.pow(1 - t, 5) // Quintic ease-out for iOS feel
        : (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Standard exponential ease for desktop
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: false,      // Disabled so desktop users get 100% native scrolling
      wheelMultiplier: isMobile ? 2 : 1,
      syncTouch: isMobile,     // Keeps touch synchronized with the easing only on mobile
      touchMultiplier: isMobile ? 1 : 2,
      infinite: false,
    });

    const handleTouchMove = () => { };
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen animate-page-wipe">
      <div className="grain-overlay" />
      <CustomCursor />
      <Header />

      <main>
        <Hero />
        <Services />
        <Barbers />
        <Gallery />
        <Testimonials />
        <div className="py-20 border-y border-offwhite/5 bg-noir overflow-hidden">
          <MarqueeAnimation baseVelocity={-0.8} className="text-offwhite/10 font-display text-7xl md:text-9xl tracking-normal">
            LUNDI 11:00 — 19:30 • MARDI — SAMEDI 10:00 — 19:30 • DIMANCHE FERMÉ •
          </MarqueeAnimation>
        </div>
      </main>

      <Footer />
    </div>
  );
}
