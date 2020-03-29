import React from 'react';

import { H2 } from 'components/typography/H2';
import { useStyles } from './styles';

interface P {
	label: string;
}

export function MenuItem({ label }: P) {
	const s = useStyles();

	return (
		<div className={s.menuItem}>
			<H2>{label}</H2>
		</div>
	);
}