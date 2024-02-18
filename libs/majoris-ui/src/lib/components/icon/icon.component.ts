import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type FontSet = 'outlined' | 'round' | 'sharp';

type Color = 'default' | 'danger' | 'success' | 'warning' | 'info';

type Size = 'sm' | 'md' | 'lg';

@Component({
  selector: 'mjs-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input() fontSet: FontSet = 'round';

  @Input() icon: string = '';

  @Input() size: Size = 'md';

  get getFontSetClass(): string {
    return this.fontSet ? `material-icons-${this.fontSet}` : 'material-icons';
  }

  get sizeClass(): string {
    return `icon-size--${this.size}`;
  }

  get classes(): string[] {
    return [this.getFontSetClass, this.sizeClass];
  }
}
