import React from 'react';

import { Logo } from 'components/Logo';

import s from './styles.module.css';

const version = 'v0.0.1';

export function Splash() {
	return (
		<div className={s.Background}>
			<div className={s.Screen} />
			<div className={s.LogoContainer}>
				<Logo />
				<p>{version}</p>
			</div>
		</div>
	);
}
