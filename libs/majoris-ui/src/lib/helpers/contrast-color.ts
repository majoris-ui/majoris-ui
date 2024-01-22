import chroma from 'chroma-js';

export function getContrastingTextColor(backgroundColor: string): string {
  const luminance = chroma(backgroundColor).luminance();
  return luminance > 0.5 ? '#000' : '#fff';
}
