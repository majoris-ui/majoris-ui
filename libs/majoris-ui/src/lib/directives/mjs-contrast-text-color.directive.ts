import { Directive, ElementRef, HostBinding } from '@angular/core';
import { getContrastingTextColor } from '../helpers';

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
    const textColor = getContrastingTextColor(backgroundColor);
    console.log(backgroundColor);
    return `text-contrast-color--${textColor}`;
  }

  constructor(private el: ElementRef<any>) {}
}
