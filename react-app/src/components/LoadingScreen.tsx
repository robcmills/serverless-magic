import React from 'react';
import { createUseStyles } from 'react-jss';

import { screen } from 'styles/mixins';

const useStyles = createUseStyles({
	loadingScreen: {
		...screen,
		backgroundColor: 'black',
	},
});

export function LoadingScreen() {
	const s = useStyles();
	return (
	  <div className={s.loadingScreen} />
	);
}