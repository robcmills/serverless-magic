import React, { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import cn from 'classnames';

import { BORDER, BORDER_RADIUS, BUTTON_HEIGHT, SPACING_UNIT } from 'hexproof/styles/constants';
import { DARK_GRAY, DEFAULT_TEXT_COLOR, LIGHT_BLUE } from 'hexproof/styles/colors';
import { baseTypographyStyle } from 'hexproof/components/typography/styles';

export const baseButtonStyle = {
	...baseTypographyStyle,
	alignItems: 'center',
	background: DARK_GRAY,
	border: BORDER,
	borderRadius: BORDER_RADIUS,
	color: DEFAULT_TEXT_COLOR,
	cursor: 'pointer',
	display: 'grid',
	fontSize: '16px',
	height: BUTTON_HEIGHT,
	gridAutoFlow: 'column',
	gridGap: SPACING_UNIT,
	padding: [0, SPACING_UNIT],
	'&:hover, &:focus': {
		border: `1px solid ${LIGHT_BLUE}`,
		color: LIGHT_BLUE,
		outline: 'none',
	},
}

const useStyles = createUseStyles({
	button: baseButtonStyle,
});

interface P {
	children: ReactNode;
	className?: string;
}

export function Button({ className, children }: P) {
	const s = useStyles();
	return (
		<button className={cn(s.button, className)}>
		  {children}
		</button>
	);
}
