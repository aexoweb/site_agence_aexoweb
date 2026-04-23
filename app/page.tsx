'use client';

import { useState } from 'react';
import { Navbar } from '@/components/ui/navbar';
import FloatingIconsHeroDemo from '@/components/ui/demo';
import { ServicesSection } from '@/components/sections/services';
import { PortfolioSection } from '@/components/sections/portfolio';
import { AboutSection } from '@/components/sections/about';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/ui/footer';
import { ContactModal } from '@/components/ui/contact-modal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <main>
      <Navbar onOpenContact={openModal} />
      <FloatingIconsHeroDemo onOpenContact={openModal} />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection onOpenContact={openModal} />
      <Footer />
      <ContactModal open={modalOpen} onClose={closeModal} />
    </main>
  );
}
