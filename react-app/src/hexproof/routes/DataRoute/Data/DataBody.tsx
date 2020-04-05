import React from 'react';
import { createUseStyles } from 'react-jss';

import { db } from 'hexproof/db';

import { SPACING_UNIT } from 'hexproof/styles/constants';

const useStyles = createUseStyles({
	body: {
		padding: SPACING_UNIT,
	},
});

export function DataBody() {
	const s = useStyles();
	return (
		<div className={s.body}>DataBody</div>
	);
}
