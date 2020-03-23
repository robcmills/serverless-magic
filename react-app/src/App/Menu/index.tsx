import React from 'react';

import { MenuIcon } from 'components/icons/MenuIcon';

import { useStyles } from './styles';

export function Menu() {
	const s = useStyles();
	return (
		<div className={s.menuBar}>
			<div className={s.menuIcon}>
				<MenuIcon />
			</div>
		</div>
	);
}