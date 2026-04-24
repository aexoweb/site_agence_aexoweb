'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const serviceLinks = [
  'Création Web',
  'Design UI/UX',
  'Intégration IA',
  'E-commerce',
  'SEO & Performance',
  'Support & Évolution',
];

const agenceLinks = [
  { label: 'À propos', href: '/#about' },
  { label: 'Réalisations', href: '/#portfolio' },
  { label: 'Contact', href: '/#contact' },
];

const legalLinks = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border px-4 sm:px-6 pt-10 sm:pt-16 pb-8">
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Subtle top-center glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-40 rounded-full bg-foreground/[0.03] blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12"
        >
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-baseline gap-0.5 mb-4 group">
              <span className="text-xl font-bold text-foreground">aexo</span>
              <span className="text-xl font-bold text-foreground/20 group-hover:text-foreground/50 transition-colors">.</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
              Agence digitale spécialisée en création web et intégration IA.
            </p>
            <a
              href="mailto:contact@aexoweb.com"
              className="inline-block mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              contact@aexoweb.com
            </a>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-medium text-muted-foreground/40 uppercase tracking-widest mb-4">
              Services
            </p>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <a href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Agence */}
          <div>
            <p className="text-xs font-medium text-muted-foreground/40 uppercase tracking-widest mb-4">
              Agence
            </p>
            <ul className="flex flex-col gap-3">
              {agenceLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <p className="text-xs font-medium text-muted-foreground/40 uppercase tracking-widest mb-4">
              Informations légales
            </p>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Aexo. Tous droits réservés.
          </p>
          <p className="text-xs text-muted-foreground/30">
            Conçu & développé avec ♥ à Paris
          </p>
        </div>
      </div>
    </footer>
  );
}
