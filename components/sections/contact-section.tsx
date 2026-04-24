'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  onOpenContact: () => void;
}

export function ContactSection({ onOpenContact }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="pt-20 md:pt-16 pb-10 px-4 sm:px-6 relative overflow-hidden bg-muted/20 h-full flex flex-col justify-center"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {/* Central glow */}
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-full max-w-[700px] h-[350px] rounded-full bg-violet-500/18 dark:bg-violet-500/30 blur-3xl"
        />
        {/* Amber accent */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute left-1/4 w-72 h-72 rounded-full bg-amber-500/14 dark:bg-amber-500/22 blur-3xl"
        />
        {/* Animated concentric rings */}
        <svg className="absolute w-[600px] h-[600px] opacity-[0.12] dark:opacity-[0.18]" viewBox="0 0 600 600" fill="none">
          {[60, 110, 165, 225, 290].map((r, i) => (
            <motion.circle
              key={r}
              cx="300" cy="300" r={r}
              stroke="currentColor" strokeWidth="0.7"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
            />
          ))}
        </svg>
        {/* Corner dots — top left */}
        <svg className="absolute top-0 left-0 w-40 h-40 opacity-[0.12] dark:opacity-[0.18]" viewBox="0 0 160 160" fill="none">
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 5 }).map((_, col) => (
              <circle key={`${row}-${col}`} cx={col * 32 + 8} cy={row * 32 + 8} r="1.5" fill="currentColor" />
            ))
          )}
        </svg>
        {/* Corner dots — bottom right */}
        <svg className="absolute bottom-0 right-0 w-40 h-40 opacity-[0.12] dark:opacity-[0.18]" viewBox="0 0 160 160" fill="none">
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 5 }).map((_, col) => (
              <circle key={`${row}-${col}`} cx={col * 32 + 8} cy={row * 32 + 8} r="1.5" fill="currentColor" />
            ))
          )}
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium text-muted-foreground/60 uppercase tracking-[0.2em] mb-6"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl sm:text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-6"
        >
          Une idée en tête ?
          <br />
          <span className="text-muted-foreground">Parlons-en.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed mb-12"
        >
          Partagez-nous votre idée. On la transforme en réalité digitale en quelques semaines.
          Réponse garantie sous 24h.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-6 mb-16"
        >
          <button
            onClick={onOpenContact}
            className="group flex items-center gap-4 cursor-pointer"
          >
            <span className="text-lg sm:text-2xl md:text-3xl font-semibold text-foreground group-hover:text-foreground/70 transition-colors duration-300">
              On démarre quand vous voulez.
            </span>
            <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border-2 border-foreground/20 bg-foreground/5 group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
              <ArrowRight className="w-4 h-4 text-foreground group-hover:text-background group-hover:translate-x-0.5 transition-all duration-300" />
            </span>
          </button>
          <a
            href="mailto:contact@aexoweb.com"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Mail className="w-4 h-4" />
            contact@aexoweb.com
          </a>
        </motion.div>

        {/* Info chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {[
            { icon: MapPin, text: 'Paris, France' },
            { icon: Mail, text: 'Réponse sous 24h' },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground"
            >
              <Icon className="w-3.5 h-3.5" />
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
