'use client';

import * as React from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#portfolio' },
  { label: 'À propos', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label="Changer le thème"
      className="p-2 rounded-lg text-foreground/40 hover:text-foreground hover:bg-foreground/5 transition-colors duration-200"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

interface NavbarProps {
  onOpenContact: () => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-baseline gap-0.5 group">
          <span className="text-xl font-bold tracking-tight text-foreground">aexo</span>
          <span className="text-xl font-bold text-foreground/20 group-hover:text-foreground/50 transition-colors">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button
            size="sm"
            onClick={onOpenContact}
            className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-5"
          >
            Démarrer un projet
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={cn('block h-px w-6 bg-foreground transition-all duration-300', menuOpen && 'translate-y-2.5 rotate-45')} />
            <span className={cn('block h-px w-6 bg-foreground transition-all duration-300', menuOpen && 'opacity-0')} />
            <span className={cn('block h-px w-6 bg-foreground transition-all duration-300', menuOpen && '-translate-y-2.5 -rotate-45')} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-xl border-b border-border/50',
          menuOpen ? 'max-h-64' : 'max-h-0'
        )}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            onClick={() => { onOpenContact(); setMenuOpen(false); }}
            className="w-fit bg-foreground text-background hover:bg-foreground/90 font-semibold"
          >
            Démarrer un projet
          </Button>
        </nav>
      </div>
    </header>
  );
}
