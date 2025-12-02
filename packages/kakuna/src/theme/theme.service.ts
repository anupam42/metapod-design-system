import { Injectable, signal, computed, effect } from '@angular/core';
import { ThemeMode } from './theme-mode.type';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private storageKey = 'ds-theme-mode';

  // stored mode (light/dark/system)
  mode = signal<ThemeMode>('light');

  // resolved theme (system → actual light/dark)
  resolved = computed(() => {
    const mode = this.mode();
    if (mode !== 'system') return mode;

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  constructor() {
    const saved = (localStorage.getItem(this.storageKey) as ThemeMode) || 'light';
    this.mode.set(saved);

    // React to system changes
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', () => {
        if (this.mode() === 'system') this.applyTheme();
      });

    // Apply theme automatically on any mode change
    effect(() => this.applyTheme());
  }

  toggle() {
    const next = this.resolved() === 'light' ? 'dark' : 'light';
    this.setMode(next);
  }

  setMode(mode: ThemeMode) {
    this.mode.set(mode);
    localStorage.setItem(this.storageKey, mode);
  }

  private applyTheme() {
    const final = this.resolved();

    const root = document.documentElement;

    if (final === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }
}
