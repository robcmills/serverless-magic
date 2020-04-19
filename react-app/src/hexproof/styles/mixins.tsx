import { BLACK, DEFAULT_TEXT_COLOR } from 'hexproof/styles/colors';
import { baseTypographyStyle } from 'hexproof/components/typography/styles';

export const globals = {
	backgroundColor: BLACK,
  color: DEFAULT_TEXT_COLOR,
  fontFamily: baseTypographyStyle.fontFamily,
  fontWeight: baseTypographyStyle.fontWeight,
  letterSpacing: baseTypographyStyle.letterSpacing,
};

export const disabled = {
	opacity: 0.5,
};

export const ellipsify = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

export const screen = {
	position: 'fixed',
	left: 0	,
	right: 0	,
	top: 0	,
	bottom: 0	,
};

export const absoluteScreen = {
	...screen,
	position: 'absolute',
};