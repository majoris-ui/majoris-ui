import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconFontSet } from '../../interfaces/icon';

@Component({
  selector: 'mjs-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mjs-icon.component.html',
  styleUrl: './mjs-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MjsIconComponent {
  @Input({ required: true }) icon: string;

  @Input() fontSet: IconFontSet = 'round';

  @Input() class: string;

  @Input() style: string;

  get getFontSetClass(): string {
    return this.fontSet ? `material-icons-${this.fontSet}` : 'material-icons';
  }

  get classes(): string[] {
    return [this.getFontSetClass, this.class];
  }
}
