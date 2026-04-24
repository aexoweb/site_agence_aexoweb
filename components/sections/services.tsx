'use client';

import { motion } from 'framer-motion';
import { Globe, Wand2, Cpu, Zap, ShoppingBag, Wrench } from 'lucide-react';

const services = [
  {
    icon: Globe,
    number: '01',
    title: 'Création Web',
    description:
      'Sites vitrines, landing pages conçus sur mesure pour convertir vos visiteurs en clients.',
    example: 'Site vitrine moderne pour un cabinet d\'avocats parisien',
    result: '3× de demandes de contact',
    resultColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/8 dark:bg-emerald-400/10',
  },
  {
    icon: Wand2,
    number: '02',
    title: 'Design UI/UX',
    description:
      'Des interfaces épurées qui captivent dès le premier regard et guident l\'utilisateur naturellement vers l\'action.',
    example: 'Refonte de l\'interface d\'une app fintech',
    result: '+65 % d\'engagement',
    resultColor: 'text-violet-600 dark:text-violet-400 bg-violet-500/8 dark:bg-violet-400/10',
  },
  {
    icon: Cpu,
    number: '03',
    title: 'Intégration IA',
    description:
      'En développement. Bientôt disponible..',
    example: 'Chatbot intelligent',
    result: '−40 % de tickets support',
    resultColor: 'text-blue-600 dark:text-blue-400 bg-blue-500/8 dark:bg-blue-400/10',
  },
  {
    icon: Zap,
    number: '04',
    title: 'SEO & Performance',
    description:
      'Scores parfaits, chargement instantané, visibilité maximale. L\'optimisation technique au service de votre croissance.',
    example: 'Optimisation complète pour une clinique dentaire',
    result: 'Page 1 Google en 3 mois',
    resultColor: 'text-amber-600 dark:text-amber-400 bg-amber-500/8 dark:bg-amber-400/10',
  },
  {
    icon: ShoppingBag,
    number: '05',
    title: 'Hébergement',
    description:
      'Hébergement web ultra-rapide optimisé pour les performances. Offrez à vos utilisateurs une navigation fluide grâce à des serveurs de dernière génération.',
    example: 'Hébergement en ligne de site web',
    result: '+ 99% de disponibilité',
    resultColor: 'text-rose-600 dark:text-rose-400 bg-rose-500/8 dark:bg-rose-400/10',
  },
  {
    icon: Wrench,
    number: '06',
    title: 'Support & Évolution',
    description:
      'Maintenance proactive, mises à jour régulières et accompagnement continu. Votre site évolue avec vous.',
    example: 'Accompagnement d\'une startup sur 18 mois',
    result: '0 interruption de service',
    resultColor: 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/8 dark:bg-cyan-400/10',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden pt-20 md:pt-22 pb-10 md:pb-12 px-4 sm:px-6 h-full flex flex-col justify-center">

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.09] dark:opacity-[0.14]"
          style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Violet blob — top right */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-violet-500/20 dark:bg-violet-500/35 blur-3xl"
        />
        {/* Indigo blob — bottom left */}
        <motion.div
          animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-indigo-500/15 dark:bg-indigo-500/28 blur-3xl"
        />
        {/* Horizontal rule accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-foreground/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-xs font-medium text-muted-foreground/60 uppercase tracking-[0.2em] mb-4">
            Services
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight max-w-xl">
            Tout ce qu&apos;il faut pour{' '}
            <span className="text-muted-foreground">briller en ligne.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.number}
                variants={itemVariants}
                className="group relative flex flex-col p-5 sm:p-6 md:p-8 bg-background hover:bg-muted/40 transition-colors duration-300 cursor-default"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-muted border border-border flex items-center justify-center group-hover:bg-muted/80 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-foreground/70" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground/40">{service.number}</span>
                </div>

                {/* Content */}
                <h3 className="text-base font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Concrete example */}
                <div className="mt-6 pt-5 border-t border-border space-y-2">
                  <p className="text-[11px] font-medium text-muted-foreground/50 uppercase tracking-widest">
                    Exemples concret
                  </p>
                  <p className="text-sm text-foreground/70 leading-snug">{service.example}</p>
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${service.resultColor}`}
                  >
                    <span className="w-1 h-1 rounded-full bg-current opacity-70" />
                    {service.result}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

