import React, { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

import { screen } from 'styles/mixins';

const useStyles = createUseStyles({
	viewport: {
		...screen,
		backgroundColor: 'black',
	},
});

interface P {
	children: ReactNode;
}

export function Viewport({ children }: P) {
	const s = useStyles();
	return (
	  <div className={s.viewport}>
	    {children}
	  </div>
	);
}