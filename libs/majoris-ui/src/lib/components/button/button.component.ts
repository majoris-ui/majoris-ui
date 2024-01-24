import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { getContrastingTextColor } from '../../helpers';

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

export type Rounded = 'sm' | 'md' | 'lg';

@Component({
  selector: 'mjs-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements AfterViewInit {
  @Input() theme: Theme = 'primary';

  @Input() set rounded(rounded: Rounded) {
    this._rounded = `rounded-${rounded}`;
  }

  @ViewChild('button') button: ElementRef<HTMLButtonElement>;

  _rounded = 'rounded-sm';

  ngAfterViewInit(): void {
    this.button.nativeElement.style.color = getContrastingTextColor(
      this.button
    );
  }
}
