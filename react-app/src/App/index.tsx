import React from 'react';

import { useStyles } from './styles';

import { Menu } from './Menu';
import { Splash } from './Splash';

export function App() {
	const s = useStyles();
	return (
		<div className={s.app}>
			<Splash />
			<Menu />
		</div>
	);
}
