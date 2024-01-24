import { ElementRef } from '@angular/core';
import chroma from 'chroma-js';

export function getContrastingTextColor(element: ElementRef<any>): string {
  const computedStyle = getComputedStyle(element.nativeElement);
  const backgroundColor = computedStyle.backgroundColor;
  const hexadecimalColor = chroma(backgroundColor).hex();
  const luminance = chroma(hexadecimalColor).luminance();
  return luminance > 0.5 ? '#000' : '#fff';
}
