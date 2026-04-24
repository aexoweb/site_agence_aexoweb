'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const stats = [
  { value: '50+', label: 'Projets livrés' },
  { value: '40+', label: 'Clients satisfaits' },
  { value: '5 ans', label: "D'expérience" },
  { value: '100%', label: 'Livraison dans les délais' },
];

const values = [
  {
    title: 'Design first',
    description: "L'esthétique au cœur de chaque pixel. Pas de compromis sur le visuel.",
  },
  {
    title: 'Performance',
    description: "Des sites qui chargent en moins d'une seconde. Scores Lighthouse 100/100.",
  },
  {
    title: 'Sur mesure',
    description: 'Aucun template. Chaque projet est conçu de zéro, rien que pour vous.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden pt-20 md:pt-22 pb-10 md:pb-12 px-4 sm:px-6 h-full">

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Emerald blob — top right */}
        <motion.div
          animate={{ scale: [1, 1.09, 1], opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-emerald-500/18 dark:bg-emerald-500/28 blur-3xl"
        />
        {/* Violet blob — bottom left */}
        <motion.div
          animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-violet-500/15 dark:bg-violet-500/25 blur-3xl"
        />
        {/* Concentric rings — right side */}
        <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.12] dark:opacity-[0.18]" viewBox="0 0 320 320" fill="none">
          {[40, 80, 120, 160, 200, 240].map((r) => (
            <circle key={r} cx="320" cy="160" r={r} stroke="currentColor" strokeWidth="0.7" />
          ))}
        </svg>
        {/* Horizontal lines — left accent */}
        <svg className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-64 opacity-[0.1] dark:opacity-[0.15]" viewBox="0 0 192 256" fill="none">
          {Array.from({ length: 14 }).map((_, i) => (
            <line key={i} x1="0" y1={i * 20} x2="192" y2={i * 20} stroke="currentColor" strokeWidth="0.6" />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium text-muted-foreground/60 uppercase tracking-[0.2em] mb-4"
        >
          À propos
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.15] mb-6 sm:mb-8"
            >
              Une agence pensée{' '}
              <span className="text-muted-foreground">pour l&apos;ère digitale.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-base text-muted-foreground leading-relaxed mb-10"
            >
              Fondée sur la conviction que le web doit être beau, performant et utile,
              Aexo accompagne entreprises et startups dans la création d&apos;expériences
              digitales qui marquent les esprits — et les résultats.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-col gap-5"
            >
              {values.map((v) => (
                <motion.div key={v.title} variants={itemVariants} className="flex gap-4">
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-0.5">{v.title}</p>
                    <p className="text-sm text-muted-foreground">{v.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6">
            {/* Stats grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="p-4 sm:p-6 rounded-2xl bg-card border border-border hover:border-border/80 transition-colors duration-300"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Terminal — always dark, it's intentional */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl bg-zinc-950 border border-zinc-800/80 p-4 sm:p-6 font-mono text-xs sm:text-sm"
            >
              <div className="flex gap-1.5 mb-5">
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
              </div>
              <div className="text-zinc-500">$ npm run build</div>
              <div className="mt-3 flex flex-col gap-2">
                <div className="text-zinc-400">
                  <span className="text-zinc-600">✓ </span>Compiling...{' '}
                  <span className="text-zinc-600">done</span>
                </div>
                <div className="text-zinc-400">
                  <span className="text-zinc-600">✓ </span>Performance{' '}
                  <span className="text-emerald-400 ml-1">100 / 100</span>
                </div>
                <div className="text-zinc-400">
                  <span className="text-zinc-600">✓ </span>SEO{' '}
                  <span className="text-emerald-400 ml-1">100 / 100</span>
                </div>
                <div className="text-zinc-400">
                  <span className="text-zinc-600">✓ </span>Accessibility{' '}
                  <span className="text-emerald-400 ml-1">100 / 100</span>
                </div>
                <div className="text-zinc-400">
                  <span className="text-zinc-600">✓ </span>Bundle size{' '}
                  <span className="text-blue-400 ml-1">38kb</span>
                </div>
                <div className="mt-1 text-zinc-600">
                  Build time: <span className="text-zinc-400">1.1s</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
