import { DARK_GRAY } from 'hexproof/styles/colors';

export const H2_FONT_SIZE = '26px';
export const H3_FONT_SIZE = '24px';
export const BASE_FONT_SIZE = '16px';
export const FONT_FAMILY = ['Helvetica Neue', 'sans-serif'];

export const base = {
  fontFamily: FONT_FAMILY,
  fontWeight: 300,
  letterSpacing: '1px',
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
};

export const h3 = {
  ...base,
};
