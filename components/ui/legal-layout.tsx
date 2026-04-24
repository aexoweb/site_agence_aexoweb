import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface Section {
  title: string;
  content: React.ReactNode;
}

interface LegalLayoutProps {
  title: string;
  subtitle?: string;
  updatedAt: string;
  sections: Section[];
}

export function LegalLayout({ title, subtitle, updatedAt, sections }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-baseline gap-0.5 group">
            <span className="text-lg font-bold text-foreground">aexo</span>
            <span className="text-lg font-bold text-foreground/20 group-hover:text-foreground/50 transition-colors">.</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} />
            Retour au site
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 pb-24">
        {/* Page title */}
        <div className="mb-12 pb-8 border-b border-border">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{title}</h1>
          {subtitle && <p className="text-muted-foreground mt-2">{subtitle}</p>}
          <p className="text-sm text-muted-foreground/60 mt-4">
            Dernière mise à jour : <span className="font-medium text-muted-foreground">{updatedAt}</span>
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-10">
          {sections.map((section, i) => (
            <section key={i} className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-3">
                <span className="text-xs font-mono text-muted-foreground/40 w-7 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {section.title}
              </h2>
              <div className="pl-10 text-sm text-muted-foreground leading-relaxed space-y-3">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/50">
          <p>© <span suppressHydrationWarning>{new Date().getFullYear()}</span> Aexo. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-foreground transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="hover:text-foreground transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
