import React, { ReactNode } from 'react';
import cn from 'classnames';

import { useStyles } from './styles';

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
