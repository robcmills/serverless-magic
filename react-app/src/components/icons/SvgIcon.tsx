import React, { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import cn from 'classnames';

import { ICON_SIZE } from 'styles/constants';

const useStyles = createUseStyles({
	svgIcon: {
		height: ICON_SIZE,
		width: ICON_SIZE,
	},
	g: {
		fill: 'currentColor',
	}
});

interface P {
	children: ReactNode;
	gClassName?: string;
	svgClassName?: string;
}

export function SvgIcon({ children, gClassName, svgClassName }: P) {
	const s = useStyles();
	const gClass = cn(s.g, gClassName);
	const svgClass = cn(s.svgIcon, svgClassName);
	return (
		<svg className={svgClass} viewBox="0 0 16 16">
		  <g className={gClass}>
				{children}
			</g>
		</svg>
	);
}
