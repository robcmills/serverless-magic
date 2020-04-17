import React from 'react';
import { createUseStyles } from 'react-jss';

import { Anchor } from 'hexproof/components/Anchor';
import { H2 } from 'hexproof/components/typography/H2';

import { ORANGE } from 'hexproof/styles/colors';
import { MENU_ITEM_HEIGHT, SPACING_UNIT } from 'hexproof/styles/constants';

export const useStyles = createUseStyles({
	menuItem: {
		alignItems: 'center',
		cursor: 'pointer',
		display: 'grid',
		height: MENU_ITEM_HEIGHT,
		padding: [0, SPACING_UNIT * 2],
		'&:hover, &:focus': {
			color: ORANGE,
		},
	},
});

interface P {
	label: string;
}

export function MenuItem({ label }: P) {
	const s = useStyles();
	const href = `#${label.toLowerCase()}`;

	return (
		<div className={s.menuItem}>
			<Anchor href={href}>
				<H2>{label}</H2>
			</Anchor>
		</div>
	);
}