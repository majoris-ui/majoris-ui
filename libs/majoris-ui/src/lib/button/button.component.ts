import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type Theme =
  | 'primary'
  | 'accent'
  | 'highlight'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'dark'
  | 'light';

@Component({
  selector: 'mjs-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() set theme(theme: Theme) {
    this._theme = theme;
  }

  _theme: Theme = 'primary';
}
