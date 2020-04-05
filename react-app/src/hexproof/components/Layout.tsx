import React, { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

import { MENU_BAR_HEIGHT } from 'hexproof/styles/constants';
import { globals, screen } from 'hexproof/styles/mixins';

const useStyles = createUseStyles({
	root: {
		...globals,
		...screen,
		display: 'grid',
		gridTemplateRows: `${MENU_BAR_HEIGHT}px 1fr`,
	},
	menuBar: {
		display: 'grid',
	},
	body: {
		display: 'grid',
	},
});

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
