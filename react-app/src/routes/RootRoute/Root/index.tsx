import React from 'react';

import { useStyles } from './styles';

import { MenuBar } from './MenuBar';
import { Splash } from './Splash';

export default function Root() {
	const s = useStyles();
	return (
		<div className={s.app}>
			<Splash />
			<MenuBar />
		</div>
	);
}
