'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Navbar } from '@/components/ui/navbar';
import FloatingIconsHeroDemo from '@/components/ui/demo';
import { ServicesSection } from '@/components/sections/services';
import { PortfolioSection } from '@/components/sections/portfolio';
import { AboutSection } from '@/components/sections/about';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/ui/footer';
import { ContactModal } from '@/components/ui/contact-modal';

const SECTION_COUNT = 6;
const DURATION = 900; // ms

// easeInOutQuart — départ et arrivée doux, milieu rapide
function easeInOutQuart(t: number): number {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
}

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const containerRef = useRef<HTMLElement | null>(null);
  const currentIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const touchStartYRef = useRef(0);
  const rafRef = useRef<number>(0);

  const scrollToSection = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container || index < 0 || index >= SECTION_COUNT) return;
    if (isAnimatingRef.current) return;

    const sections = Array.from(
      container.querySelectorAll<HTMLElement>('.snap-section')
    );
    if (!sections[index]) return;

    isAnimatingRef.current = true;
    currentIndexRef.current = index;

    const start = container.scrollTop;
    const target = sections[index].offsetTop;
    const distance = target - start;
    let startTime: number | null = null;

    cancelAnimationFrame(rafRef.current);

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / DURATION, 1);

      container.scrollTop = start + distance * easeInOutQuart(progress);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        container.scrollTop = target;
        isAnimatingRef.current = false;
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const sections = Array.from(container.querySelectorAll<HTMLElement>('.snap-section'));
      const current = sections[currentIndexRef.current];
      if (!current) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const atBottom = current.scrollTop + current.clientHeight >= current.scrollHeight - 2;
      const atTop = current.scrollTop <= 2;

      // Laisser défiler à l'intérieur de la section si pas en bout de course
      if (direction > 0 && !atBottom) return;
      if (direction < 0 && !atTop) return;

      e.preventDefault();
      if (isAnimatingRef.current) return;
      scrollToSection(currentIndexRef.current + direction);
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isAnimatingRef.current) return;
      const delta = touchStartYRef.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) < 40) return;
      const direction = delta > 0 ? 1 : -1;

      const sections = Array.from(container.querySelectorAll<HTMLElement>('.snap-section'));
      const current = sections[currentIndexRef.current];
      if (!current) return;
      const atBottom = current.scrollTop + current.clientHeight >= current.scrollHeight - 2;
      const atTop = current.scrollTop <= 2;
      if (direction > 0 && !atBottom) return;
      if (direction < 0 && !atTop) return;

      scrollToSection(currentIndexRef.current + direction);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimatingRef.current) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        scrollToSection(currentIndexRef.current + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToSection(currentIndexRef.current - 1);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
      cancelAnimationFrame(rafRef.current);
    };
  }, [scrollToSection]);

  return (
    <>
      <Navbar onOpenContact={openModal} />
      <main
        ref={(el) => { containerRef.current = el; }}
        id="scroll-main"
        className="snap-container"
      >
        <div className="snap-section"><FloatingIconsHeroDemo onOpenContact={openModal} /></div>
        <div className="snap-section"><ServicesSection /></div>
        <div className="snap-section"><PortfolioSection /></div>
        <div className="snap-section"><AboutSection /></div>
        <div className="snap-section"><ContactSection onOpenContact={openModal} /></div>
        <div className="snap-section"><Footer /></div>
      </main>
      <ContactModal open={modalOpen} onClose={closeModal} />
    </>
  );
}
