import React, { ReactNode } from 'react';

import { useStyles } from './styles';

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