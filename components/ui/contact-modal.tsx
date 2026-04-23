'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const projectTypes = [
  'Site vitrine',
  'E-commerce',
  'Application web',
  'Refonte graphique',
  'Intégration IA',
  'Autre',
];

export function ContactModal({ open, onClose }: ContactModalProps) {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = React.useState('');
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    type: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || 'Une erreur est survenue.');
        setStatus('error');
        return;
      }

      setStatus('success');
      setTimeout(() => {
        onClose();
        setTimeout(() => {
          setStatus('idle');
          setForm({ name: '', email: '', type: '', message: '' });
        }, 400);
      }, 2500);
    } catch {
      setErrorMsg('Impossible d\'envoyer le message. Vérifiez votre connexion.');
      setStatus('error');
    }
  };

  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  // Prevent body scroll when open
  React.useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm"
            onClick={onClose}
          />

          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto relative w-full max-w-lg rounded-2xl bg-[#0d0d0f] border border-white/10 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-lg text-white/30 hover:text-white hover:bg-white/5 transition-colors z-10"
              >
                <X size={16} />
              </button>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center py-20 px-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="w-16 h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-6"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message envoyé !</h3>
                    <p className="text-sm text-white/40">On vous répond dans les 24h. À très vite.</p>
                  </motion.div>
                ) : (
                  <motion.div key="form" exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                    <div className="px-4 sm:px-8 pt-6 sm:pt-8 pb-6 border-b border-white/[0.06]">
                      <h2 className="text-xl font-semibold text-white">Démarrer votre projet</h2>
                      <p className="text-sm text-white/40 mt-1">Décrivez-nous votre projet, on revient sous 24h.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="px-4 sm:px-8 py-6 flex flex-col gap-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                          <label className="text-[11px] font-medium text-white/30 uppercase tracking-widest">Nom</label>
                          <input
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Jean Dupont"
                            className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[11px] font-medium text-white/30 uppercase tracking-widest">Email</label>
                          <input
                            required
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="jean@exemple.fr"
                            className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-medium text-white/30 uppercase tracking-widest">Type de projet</label>
                        <div className="relative">
                          <select
                            value={form.type}
                            onChange={(e) => setForm({ ...form, type: e.target.value })}
                            className="w-full appearance-none bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/20 transition-colors pr-10"
                          >
                            <option value="" disabled className="bg-[#0d0d0f] text-white/40">Sélectionner...</option>
                            {projectTypes.map((t) => (
                              <option key={t} value={t} className="bg-[#0d0d0f] text-white">{t}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-medium text-white/30 uppercase tracking-widest">Description</label>
                        <textarea
                          required
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Décrivez votre projet, vos objectifs, votre délai estimé..."
                          className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-foreground text-background hover:bg-foreground/90 font-semibold py-3 h-auto rounded-xl mt-1 disabled:opacity-60 transition-all"
                      >
                          {status === 'loading' ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-20" />
                              <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                            Envoi en cours...
                          </span>
                        ) : (
                          'Envoyer le message'
                        )}
                      </Button>
                      {status === 'error' && errorMsg && (
                        <p className="text-xs text-red-500 dark:text-red-400 text-center mt-1">
                          {errorMsg}
                        </p>
                      )}
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
