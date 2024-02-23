import chroma from 'chroma-js';

type Theme =
  | 'default'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'light'
  | 'dark';

export function getContrastingTextColor(
  backgroundColor: string,
  textColor: Theme = 'dark'
): Theme {
  const hexColor = chroma(backgroundColor).hex();
  const luminance = chroma(hexColor).luminance();
  return luminance > 0.5 ? textColor : 'light';
}
