import React, { ReactNode } from 'react';

import { useStyles } from './styles';

interface P {
	body: ReactNode;
	menuBar: ReactNode;
}

export function Layout({ body, menuBar }: P) {
	const s = useStyles();
	return (
		<div className={s.root}>
		  <div className={s.menuBar}>{menuBar}</div>
		  <div className={s.body}>{body}</div>
		</div>
	);
}
