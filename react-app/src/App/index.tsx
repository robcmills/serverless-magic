import React from 'react';

import { useStyles } from './styles';

import { Splash } from './Splash';

export function App() {
	const s = useStyles();
	return (
		<div className={s.app}>
			<Splash />
		</div>
	);
}
