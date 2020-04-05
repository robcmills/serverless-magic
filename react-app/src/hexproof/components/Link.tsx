import React, { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import { Link as ReactRouterLink } from 'react-router-dom';

const useStyles = createUseStyles({
	link: {
		color: 'inherit',
		textDecoration: 'inherit',
	},
});

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