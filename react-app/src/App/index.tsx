import React from 'react';

import { useStyles } from './styles';

import { MenuBar } from './MenuBar';
import { Splash } from './Splash';

export function App() {
	const s = useStyles();
	return (
		<div className={s.app}>
			<Splash />
			<MenuBar />
		</div>
	);
}
