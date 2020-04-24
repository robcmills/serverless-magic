import React from 'react';
import { createUseStyles } from 'react-jss';

import { H2 } from 'hexproof/components/typography/H2';
import { MenuBar } from 'hexproof/components/MenuBar';

import { SPACING_UNIT } from 'hexproof/styles/constants';

const useStyles = createUseStyles({
	menuBar: {
		alignContent: 'center',
		display: 'grid',
		paddingLeft: SPACING_UNIT,
	},
});

export function SetsMenuBar() {
	const s = useStyles();
	return (
	  <MenuBar>
	    <div className={s.menuBar}>
		    <H2>SETS</H2>
		  </div>
	  </MenuBar>
	);
}
