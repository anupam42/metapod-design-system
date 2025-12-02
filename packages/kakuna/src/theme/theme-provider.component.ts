import { Component, Input, computed, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { ThemeService } from './theme.service';
import { ThemeMode } from './theme-mode.type';

@Component({
  selector: 'ds-theme-provider',
  standalone: true,
  imports: [NgIf],
  template: `
    <ng-content></ng-content>
  `
})
export class ThemeProviderComponent {
  private theme = inject(ThemeService);

  @Input()
  set mode(value: ThemeMode) {
    if (value) this.theme.setMode(value);
  }

  resolved = computed(() => this.theme.resolved());
}
