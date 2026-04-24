'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Lumina Analytics',
    client: 'Startup B2B SaaS — Paris',
    category: 'Dashboard SaaS',
    year: '2024',
    description:
      'Refonte complète de la plateforme de reporting : interface temps réel, graphiques interactifs et exports automatisés pour 200+ clients entreprises.',
    result: '+87 % de rétention client',
    resultColor: 'text-violet-600 dark:text-violet-400 bg-violet-500/10 dark:bg-violet-400/10',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&q=80&auto=format&fit=crop',
    imageAlt: 'Dashboard analytique sur écran',
  },
  {
    id: 2,
    name: 'Maison Élégance',
    client: 'Marque de mode — Paris 8e',
    category: 'E-commerce Luxe',
    year: '2024',
    description:
      'Boutique en ligne haut de gamme avec lookbook interactif, tunnel d\'achat repensé et intégration Stripe. Lancement en 6 semaines.',
    result: '+240 % de conversions',
    resultColor: 'text-rose-600 dark:text-rose-400 bg-rose-500/10 dark:bg-rose-400/10',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=500&q=80&auto=format&fit=crop',
    imageAlt: 'Boutique mode luxe',
  },
  {
    id: 3,
    name: 'NovaTech',
    client: 'Deep tech Series A — Lyon',
    category: 'Site Corporate',
    year: '2024',
    description:
      'Vitrine institutionnelle bilingue pour lever des fonds. Score Lighthouse 100/100, animations soignées et section presse intégrée.',
    result: 'Levée de 2 M€ post-lancement',
    resultColor: 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 dark:bg-cyan-400/10',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&q=80&auto=format&fit=crop',
    imageAlt: 'Bureaux startup tech modernes',
  },
  {
    id: 4,
    name: 'Pulse',
    client: 'Éditeur SaaS — Remote',
    category: 'Application Web',
    year: '2023',
    description:
      'Outil collaboratif de gestion de projet : kanban temps réel, notifications intelligentes et intégration Slack. Passé de 0 à 5 000 utilisateurs actifs.',
    result: '5 000 utilisateurs en 4 mois',
    resultColor: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 dark:bg-amber-400/10',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=500&q=80&auto=format&fit=crop',
    imageAlt: 'Interface application web de gestion',
  },
  {
    id: 5,
    name: 'Dr. Beaumont',
    client: 'Cabinet dentaire — Bordeaux',
    category: 'Site Vitrine + SEO',
    year: '2023',
    description:
      'Site vitrine avec prise de rendez-vous en ligne, avis patients et optimisation SEO locale poussée. Premier cabinet visible dans la région.',
    result: 'Page 1 Google en 6 semaines',
    resultColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-400/10',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&q=80&auto=format&fit=crop',
    imageAlt: 'Cabinet médical professionnel',
  },
  {
    id: 6,
    name: 'Ori Cosmetics',
    client: 'Marque cosmétique bio — Nantes',
    category: 'E-commerce + IA',
    year: '2024',
    description:
      'Boutique e-commerce avec conseiller IA intégré qui guide chaque client vers le bon produit selon son type de peau. Panier moyen x2.',
    result: 'Panier moyen ×2 en 3 mois',
    resultColor: 'text-pink-600 dark:text-pink-400 bg-pink-500/10 dark:bg-pink-400/10',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=500&q=80&auto=format&fit=crop',
    imageAlt: 'Produits cosmétiques bio',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative overflow-hidden pt-20 md:pt-22 pb-10 md:pb-12 px-4 sm:px-6 bg-muted/20 h-full flex flex-col justify-center">

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Diagonal stripe pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.07] dark:opacity-[0.11]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diag-port" width="48" height="48" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="48" stroke="currentColor" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag-port)" />
        </svg>
        {/* Cyan blob — top left */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full bg-cyan-500/18 dark:bg-cyan-500/28 blur-3xl"
        />
        {/* Rose blob — bottom right */}
        <motion.div
          animate={{ scale: [1, 1.07, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-rose-500/15 dark:bg-rose-500/25 blur-3xl"
        />
        {/* Corner accent — top right */}
        <svg className="absolute top-0 right-0 w-48 h-48 opacity-[0.13] dark:opacity-[0.2]" viewBox="0 0 200 200" fill="none">
          {[20, 50, 80, 110, 140].map((r) => (
            <circle key={r} cx="200" cy="0" r={r} stroke="currentColor" strokeWidth="0.6" />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-xs font-medium text-muted-foreground/60 uppercase tracking-[0.2em] mb-4">
              Réalisations
            </p>
            <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Ce qu&apos;on a{' '}
              <span className="text-muted-foreground">construit.</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs md:text-right">
            6 projets récents. Des résultats mesurables, des clients satisfaits.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className="group flex flex-col rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30 hover:-translate-y-1 transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-36 sm:h-44 md:h-52 overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
                {/* Category badge on image */}
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-background/85 backdrop-blur-sm text-foreground border border-border/50">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-3 sm:p-4 md:p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-base font-bold text-foreground leading-tight">
                      {project.name}
                    </h3>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">{project.client}</p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg border border-border bg-muted/50 flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-background transition-colors duration-300" />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mt-2">
                  {project.description}
                </p>

                {/* Result */}
                <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${project.resultColor}`}
                  >
                    <span className="w-1 h-1 rounded-full bg-current opacity-70" />
                    {project.result}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground/40">{project.year}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
