import React, { useState, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

import { MenuIcon } from 'hexproof/components/icons/MenuIcon';

import { Menu } from './Menu';

import { DARK_GRAY, ORANGE } from 'hexproof/styles/colors';
import { MENU_BAR_HEIGHT } from 'hexproof/styles/constants';

const useStyles = createUseStyles({
	menuBar: {
		backgroundColor: DARK_GRAY,
		borderBottom: '1px solid gray',
		display: 'grid',
		gridAutoFlow: 'column',
		gridTemplateColumns: `${MENU_BAR_HEIGHT}px 1fr`,
	},
	menuIcon: {
		cursor: 'pointer',
		display: 'grid',
		placeItems: 'center',
		'&:hover, &:focus': {
			color: ORANGE,
		},
	},
});

interface P {
	children?: ReactNode;
}

export function MenuBar({ children }: P) {
	const s = useStyles();

	const [isOpen, setIsOpen] = useState(false);
	const close = () => {
		setIsOpen(false);
	};
	const open = () => {
		setIsOpen(true);
	};

	return (
		<div className={s.menuBar}>
			<div className={s.menuIcon} onClick={open}>
				<MenuIcon />
			</div>
			{children}
			<Menu close={close} isOpen={isOpen} />
		</div>
	);
}