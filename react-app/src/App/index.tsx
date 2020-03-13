import React from 'react';

import 'styles/global.module.css';
import s from './styles.module.css';

import { Splash } from './Splash';

export function App() {
	return (
		<div className={s.App}>
			<Splash />
		</div>
	);
}
