import React from 'react';

import { Link } from 'components/Link';
import { H2 } from 'components/typography/H2';
import { useStyles } from './styles';

interface P {
	label: string;
}

export function MenuItem({ label }: P) {
	const s = useStyles();
	const to = `/${label.toLowerCase()}`;

	return (
		<div className={s.menuItem}>
			<Link to={to}>
				<H2>{label}</H2>
			</Link>
		</div>
	);
}