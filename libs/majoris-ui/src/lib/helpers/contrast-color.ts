import chroma from 'chroma-js';

export function getContrastingTextColor(color: string): string {
  const hexadecimalColor = chroma(color).hex();
  const luminance = chroma(hexadecimalColor).luminance();
  return luminance > 0.5 ? '#000' : '#fff';
}
