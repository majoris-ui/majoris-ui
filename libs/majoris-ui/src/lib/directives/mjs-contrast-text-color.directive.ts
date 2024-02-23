import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { getContrastingTextColor } from '../helpers';

type Theme =
  | 'default'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'light'
  | 'dark';

@Directive({
  selector: '[mjsContrastTextColor]',
  standalone: true,
})
export class MjsContrastTextColorDirective {
  @Input() color: Theme = 'dark';

  previousTextColor: string = '';

  @HostBinding('class')
  get textContrastColor() {
    const backgroundColor = getComputedStyle(
      this.el.nativeElement
    ).backgroundColor;

    if (backgroundColor !== 'rgba(0, 0, 0, 0)') {
      this.previousTextColor = `text-contrast-color--${getContrastingTextColor(
        backgroundColor,
        this.color
      )}`;
    } else {
      this.previousTextColor = `text-contrast-color--${this.color}`;
    }

    return this.previousTextColor;
  }

  constructor(private el: ElementRef<any>) {}
}
