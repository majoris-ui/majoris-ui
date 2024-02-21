import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type FontSet = 'outlined' | 'round' | 'sharp';

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

  @Input() class: string = '';

  get getFontSetClass(): string {
    return this.fontSet ? `material-icons-${this.fontSet}` : 'material-icons';
  }

  get classes(): string[] {
    return [this.getFontSetClass, this.class];
  }
}
