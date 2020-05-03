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
	cursor: 'not-allowed',
	opacity: 0.5,
};

export const ellipsify = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

export const screen = {
	bottom: 0	,
	height: '100%',
	left: 0	,
	position: 'fixed',
	right: 0	,
	top: 0	,
	width: '100%',
};

export const absoluteScreen = {
	...screen,
	position: 'absolute',
};