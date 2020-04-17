import React, { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	link: {
		color: 'inherit',
		textDecoration: 'inherit',
	},
});

interface P {
	children: ReactNode;
	href: string;
}

export function Anchor({ children, href }: P) {
	const s = useStyles();
	return (
		<a className={s.link} href={href}>
		  {children}
		</a>
	);
}