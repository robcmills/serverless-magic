import { DARK_GRAY } from 'styles/colors';

export const H2_FONT_SIZE = '26px';
export const BASE_FONT_SIZE = '16px';

export const base = {
  fontFamily: ['Helvetica Neue', 'sans-serif'],
  fontSize: BASE_FONT_SIZE,
  fontWeight: 'normal',
  letterSpacing: '3px',
  lineHeight: BASE_FONT_SIZE,
  margin: 0,
  wordBreak: 'break-word',
};

export const bold = {
  color: DARK_GRAY,
  fontWeight: 'bold',
};

export const p = base;

export const h2 = {
  ...base,
  fontSize: H2_FONT_SIZE,
  lineHeight: H2_FONT_SIZE,
};
