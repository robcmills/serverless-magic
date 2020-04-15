import React, { useCallback, ReactNode, SyntheticEvent } from 'react';
import { createUseStyles } from 'react-jss';
import cn from 'classnames';

import { BORDER, BORDER_RADIUS, BUTTON_HEIGHT, SPACING_UNIT } from 'hexproof/styles/constants';
import { DARK_GRAY, DEFAULT_TEXT_COLOR, LIGHT_BLUE } from 'hexproof/styles/colors';
import { disabled } from 'hexproof/styles/mixins';
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
	disabled,
});

interface P {
	children: ReactNode;
	className?: string;
	isDisabled?: boolean;
	onClick?: (event?: SyntheticEvent) => void;
}

export function Button({ className, children, isDisabled, onClick }: P) {
	const s = useStyles();

	const buttonClassName = cn(s.button, className, {
		[s.disabled]: isDisabled,
	});

	const handleClick = useCallback((event) => {
		!isDisabled && onClick && onClick(event);
	}, [isDisabled, onClick]);

	return (
		<button className={buttonClassName} onClick={handleClick}>
		  {children}
		</button>
	);
}
