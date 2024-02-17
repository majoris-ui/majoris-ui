import chroma from 'chroma-js';

export function getContrastingTextColor(color: string): 'light' | 'dark' {
  const hexColor = chroma(color).hex();
  const luminance = chroma(hexColor).luminance();
  return luminance > 0.5 ? 'dark' : 'light';
}
