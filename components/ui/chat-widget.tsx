'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bot, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

// ─── Q&A ───────────────────────────────────────────────────────────────────────

const QA = [
  {
    id: 1,
    question: 'Quels sont vos tarifs ?',
    answer:
      'Pour obtenir un tarif précis, envoyez-nous un mail à **contact@aexoweb.com** afin qu\'on vous établisse un **devis personnalisé gratuit**.',
  },
  {
    id: 2,
    question: 'Combien de temps prend la création d\'un site ?',
    answer:
      'La durée varie de **2 jours à 1 semaine** selon les détails et la complexité du projet.',
  },
  {
    id: 3,
    question: 'Quels types de sites créez-vous ?',
    answer:
      'Nous réalisons **tous types de sites web**. Nous travaillons principalement en code, ce qui garantit des sites sur mesure, performants et évolutifs.',
  },
  {
    id: 4,
    question: 'Comment se déroule un projet avec vous ?',
    answer:
      'Nous prenons en compte **tous vos critères**, nous créons votre site, puis nous le modifions si besoin selon vos retours jusqu\'à ce que le résultat vous convienne.',
  },
  {
    id: 5,
    question: 'Proposez-vous de la maintenance après livraison ?',
    answer: 'Oui, nous pouvons assurer la **maintenance de votre site** après livraison.',
  },
  {
    id: 6,
    question: 'Intégrez-vous l\'intelligence artificielle ?',
    answer:
      'Oui, nous pouvons intégrer des **solutions d\'IA** dans votre projet selon vos besoins.',
  },
  {
    id: 7,
    question: 'Faites-vous du référencement SEO ?',
    answer:
      'Oui, nous proposons des services de **référencement SEO** pour améliorer votre visibilité sur Google.',
  },
  {
    id: 8,
    question: 'Travaillez-vous avec des petites entreprises ?',
    answer:
      'Oui, nous travaillons avec **tout type de structure** : TPE, PME, startups, indépendants, artisans...',
  },
  {
    id: 9,
    question: 'Comment vous contacter ?',
    answer:
      'Via le **formulaire de contact** (bouton en haut de page) ou par mail à **contact@aexoweb.com**.',
  },
  {
    id: 10,
    question: 'Comment démarrer un projet ?',
    answer:
      'Cliquez sur le **bouton en haut à droite** du site, ou envoyez-nous un mail à **contact@aexoweb.com**.',
  },
];

// ─── Markdown-lite renderer ────────────────────────────────────────────────────

function BotText({ text }: { text: string }) {
  return (
    <div className="space-y-0.5">
      {text.split('\n').map((line, i) => {
        if (line === '') return <div key={i} className="h-1" />;
        const parts = line.split(/\*\*(.*?)\*\*/g);
        return (
          <p key={i} className="text-sm leading-relaxed">
            {parts.map((p, j) => (j % 2 === 1 ? <strong key={j}>{p}</strong> : p))}
          </p>
        );
      })}
    </div>
  );
}

// ─── Component ─────────────────────────────────────────────────────────────────

export function ChatWidget() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<(typeof QA)[0] | null>(null);
  const [typing, setTyping] = React.useState(false);
  const [showAnswer, setShowAnswer] = React.useState(false);
  const bottomRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [typing, showAnswer, selected]);

  const handleQuestion = async (item: (typeof QA)[0]) => {
    if (typing) return;
    setSelected(item);
    setShowAnswer(false);
    setTyping(true);
    await new Promise((r) => setTimeout(r, 900 + Math.random() * 400));
    setTyping(false);
    setShowAnswer(true);
  };

  const handleReset = () => {
    setSelected(null);
    setShowAnswer(false);
    setTyping(false);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(handleReset, 300);
  };

  return (
    <>
      {/* ── Panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-[76px] right-4 md:right-6 z-[150] w-[calc(100vw-32px)] md:w-[360px] rounded-2xl border border-border bg-card shadow-2xl shadow-black/10 dark:shadow-black/50 overflow-hidden flex flex-col"
            style={{ maxHeight: '540px' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border shrink-0">
              <div className="relative w-9 h-9 rounded-xl bg-foreground flex items-center justify-center shrink-0">
                <Bot className="w-[18px] h-[18px] text-background" />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-card" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground leading-none">Axo</p>
                <p className="text-xs text-emerald-500 mt-0.5 font-medium">En ligne · répond instantanément</p>
              </div>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-lg text-muted-foreground/40 hover:text-foreground hover:bg-muted transition-colors"
              >
                <X size={14} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto min-h-0">
              <AnimatePresence mode="wait">

                {/* ── Question list ── */}
                {!selected && (
                  <motion.div
                    key="questions"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="px-4 py-4 flex flex-col gap-3"
                  >
                    {/* Welcome bubble */}
                    <div className="flex gap-2">
                      <div className="w-7 h-7 rounded-lg bg-foreground flex items-center justify-center shrink-0 mt-0.5">
                        <Bot className="w-3.5 h-3.5 text-background" />
                      </div>
                      <div className="bg-muted text-foreground px-3.5 py-2.5 rounded-2xl rounded-tl-sm max-w-[85%]">
                        <p className="text-sm leading-relaxed">
                          Bonjour ! Je suis <strong>Axo</strong>, l'assistant d'Aexo.<br />
                          Sélectionnez une question pour obtenir une réponse.
                        </p>
                      </div>
                    </div>

                    {/* Question buttons */}
                    <div className="flex flex-col gap-1.5 mt-1">
                      {QA.map((item, i) => (
                        <motion.button
                          key={item.id}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: i * 0.04 }}
                          onClick={() => handleQuestion(item)}
                          className="text-left text-sm px-3.5 py-2.5 rounded-xl border border-border bg-background hover:bg-muted hover:border-foreground/20 text-foreground transition-all group"
                        >
                          <span className="text-muted-foreground/40 text-xs mr-2 font-mono group-hover:text-muted-foreground/60 transition-colors">
                            {String(item.id).padStart(2, '0')}
                          </span>
                          {item.question}
                        </motion.button>
                      ))}
                    </div>
                    <div ref={bottomRef} />
                  </motion.div>
                )}

                {/* ── Answer view ── */}
                {selected && (
                  <motion.div
                    key="answer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="px-4 py-4 flex flex-col gap-3"
                  >
                    {/* User question bubble */}
                    <div className="flex flex-row-reverse gap-2">
                      <div className="bg-foreground text-background px-3.5 py-2.5 rounded-2xl rounded-tr-sm max-w-[82%]">
                        <p className="text-sm leading-relaxed">{selected.question}</p>
                      </div>
                    </div>

                    {/* Typing indicator */}
                    <AnimatePresence>
                      {typing && (
                        <motion.div
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex gap-2"
                        >
                          <div className="w-7 h-7 rounded-lg bg-foreground flex items-center justify-center shrink-0">
                            <Bot className="w-3.5 h-3.5 text-background" />
                          </div>
                          <div className="bg-muted px-3.5 py-3 rounded-2xl rounded-tl-sm flex gap-1 items-center">
                            {[0, 1, 2].map((i) => (
                              <motion.span
                                key={i}
                                className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 block"
                                animate={{ y: [0, -4, 0] }}
                                transition={{ duration: 0.55, repeat: Infinity, delay: i * 0.15 }}
                              />
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Answer bubble */}
                    <AnimatePresence>
                      {showAnswer && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25 }}
                          className="flex gap-2"
                        >
                          <div className="w-7 h-7 rounded-lg bg-foreground flex items-center justify-center shrink-0 mt-0.5">
                            <Bot className="w-3.5 h-3.5 text-background" />
                          </div>
                          <div className="bg-muted text-foreground px-3.5 py-2.5 rounded-2xl rounded-tl-sm max-w-[85%]">
                            <BotText text={selected.answer} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Back button */}
                    <AnimatePresence>
                      {showAnswer && (
                        <motion.button
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 }}
                          onClick={handleReset}
                          className={cn(
                            'self-start flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full',
                            'border border-border text-muted-foreground hover:text-foreground hover:bg-muted',
                            'transition-colors mt-1'
                          )}
                        >
                          <ChevronLeft size={12} />
                          Autre question
                        </motion.button>
                      )}
                    </AnimatePresence>

                    <div ref={bottomRef} />
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Toggle button ── */}
      <motion.button
        onClick={() => setOpen((p) => !p)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={open ? 'Fermer le chat' : 'Ouvrir le support'}
        className="fixed bottom-4 right-4 md:right-6 z-[150] w-14 h-14 rounded-2xl bg-foreground text-background shadow-lg shadow-black/20 dark:shadow-black/50 flex items-center justify-center hover:bg-foreground/90 transition-colors"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="w-5 h-5" />
            </motion.span>
          ) : (
            <motion.span key="bot" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <Bot className="w-5 h-5" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Pulse on first load */}
      {!open && (
        <motion.span
          className="fixed bottom-4 right-4 md:right-6 z-[149] w-14 h-14 rounded-2xl bg-foreground/30 pointer-events-none"
          animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
          transition={{ duration: 1.5, repeat: 2, ease: 'easeOut' }}
        />
      )}
    </>
  );
}
