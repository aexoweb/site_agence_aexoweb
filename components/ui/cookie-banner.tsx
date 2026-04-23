'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

type CookieConsent = 'accepted' | 'refused' | null;

export function CookieBanner() {
  const [consent, setConsent] = React.useState<CookieConsent>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem('cookie-consent') as CookieConsent;
      if (!stored) {
        // Slight delay so the page renders first
        const t = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(t);
      }
      setConsent(stored);
    } catch (_) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try { localStorage.setItem('cookie-consent', 'accepted'); } catch (_) {}
    setConsent('accepted');
    setVisible(false);
  };

  const handleRefuse = () => {
    try { localStorage.setItem('cookie-consent', 'refused'); } catch (_) {}
    setConsent('refused');
    setVisible(false);
  };

  // Expose a way to reopen the banner (used by footer "Gérer les cookies")
  React.useEffect(() => {
    const handler = () => setVisible(true);
    window.addEventListener('open-cookie-banner', handler);
    return () => window.removeEventListener('open-cookie-banner', handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-label="Gestion des cookies"
          aria-live="polite"
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-[200] rounded-2xl bg-card border border-border shadow-2xl shadow-black/10 dark:shadow-black/40 p-5"
        >
          {/* Close */}
          <button
            onClick={handleRefuse}
            aria-label="Fermer"
            className="absolute top-3 right-3 p-1.5 rounded-lg text-muted-foreground/50 hover:text-foreground hover:bg-muted transition-colors"
          >
            <X size={14} />
          </button>

          {/* Icon */}
          <div className="text-xl mb-3">🍪</div>

          <h3 className="text-sm font-semibold text-foreground mb-1.5">
            Ce site utilise des cookies
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed mb-4">
            Nous utilisons des cookies techniques (nécessaires) et d'analyse (optionnels) pour
            améliorer votre expérience. Vous pouvez accepter ou refuser les cookies non essentiels.{' '}
            <Link
              href="/politique-de-confidentialite#cookies"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              En savoir plus
            </Link>
          </p>

          {/* Actions — refuser doit être aussi visible qu'accepter (CNIL) */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefuse}
              className="flex-1 text-xs h-9"
            >
              Refuser
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              className="flex-1 text-xs h-9 bg-foreground text-background hover:bg-foreground/90"
            >
              Accepter
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
