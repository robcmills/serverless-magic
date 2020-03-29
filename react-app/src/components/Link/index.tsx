import React, { ReactNode } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { useStyles } from './styles';

interface P {
	children: ReactNode;
	to: string;
}

export function Link({ children, to }: P) {
	const s = useStyles();
	return (
		<ReactRouterLink className={s.link} to={to}>
		  {children}
		</ReactRouterLink>
	);
}