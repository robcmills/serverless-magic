import { BLACK, DEFAULT_TEXT_COLOR } from 'styles/colors';
import { base } from 'components/typography/styles';

export const globals = {
	backgroundColor: BLACK,
  color: DEFAULT_TEXT_COLOR,
  fontFamily: base.fontFamily,
  fontWeight: base.fontWeight,
  letterSpacing: base.letterSpacing,
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