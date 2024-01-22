import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import chroma from 'chroma-js';
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

@Component({
  selector: 'mjs-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements AfterViewInit {
  @Input() set theme(theme: Theme) {
    this._theme = theme;
  }

  @ViewChild('button') button: ElementRef<HTMLButtonElement>;

  _theme: Theme = 'primary';

  ngAfterViewInit(): void {
    const computedStyle = getComputedStyle(this.button.nativeElement);
    const backgroundColor = computedStyle.backgroundColor;
    const hexadecimalColor = chroma(backgroundColor).hex();
    this.button.nativeElement.style.color =
      getContrastingTextColor(hexadecimalColor);
  }
}
