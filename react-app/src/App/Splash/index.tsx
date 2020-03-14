import React from 'react';

import { Logo } from 'components/Logo';

import { useStyles } from './styles';

const VERSION = 'v0.0.1';

export function Splash() {
	const s = useStyles();
	return (
		<div className={s.container}>
			<div className={s.screen} />
			<div className={s.logoContainer}>
				<Logo />
				<p>{VERSION}</p>
			</div>
		</div>
	);
}
