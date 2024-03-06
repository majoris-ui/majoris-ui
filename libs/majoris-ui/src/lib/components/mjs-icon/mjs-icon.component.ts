import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type FontSet = 'outlined' | 'round' | 'sharp';

@Component({
  selector: 'mjs-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mjs-icon.component.html',
  styleUrl: './mjs-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MjsIconComponent {
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
