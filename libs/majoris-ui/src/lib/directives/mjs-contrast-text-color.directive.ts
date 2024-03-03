import { Directive, ElementRef, HostBinding } from '@angular/core';
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
  @HostBinding('class')
  get textContrastColor() {
    const backgroundColor = getComputedStyle(
      this.el.nativeElement
    ).backgroundColor;

    if (backgroundColor !== 'rgba(0, 0, 0, 0)') {
      return `text-contrast-color--${getContrastingTextColor(backgroundColor)}`;
    } else {
      return `text-contrast-color--dark`;
    }
  }

  constructor(private el: ElementRef<any>) {}
}
