'use client';

import { useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

// Module-level store so all hook instances stay in sync without a Context
let listeners: Array<(t: Theme) => void> = [];
let currentTheme: Theme = 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(currentTheme);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    const initial: Theme = isDark ? 'dark' : 'light';
    currentTheme = initial;
    setTheme(initial);

    listeners.push(setTheme);
    return () => {
      listeners = listeners.filter((l) => l !== setTheme);
    };
  }, []);

  const toggleTheme = () => {
    const next: Theme = currentTheme === 'dark' ? 'light' : 'dark';
    currentTheme = next;
    document.documentElement.classList.toggle('dark', next === 'dark');
    try {
      localStorage.setItem('theme', next);
    } catch (_) {}
    listeners.forEach((l) => l(next));
  };

  return { theme, toggleTheme };
}
