import React from 'react';

import { useStyles } from './styles';

export function LoadingScreen() {
	const s = useStyles();
	return (
	  <div className={s.loadingScreen} />
	);
}