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
      className="py-16 md:py-28 lg:py-36 px-4 sm:px-6 relative overflow-hidden bg-muted/20"
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-[600px] h-[300px] sm:h-[400px] rounded-full bg-foreground/[0.03] blur-3xl" />
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
