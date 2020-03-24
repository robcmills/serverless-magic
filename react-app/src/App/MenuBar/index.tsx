import React, { useState } from 'react';

import { MenuIcon } from 'components/icons/MenuIcon';

import { Menu } from './Menu';

import { useStyles } from './styles';

export function MenuBar() {
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
			<Menu close={close} isOpen={isOpen} />
		</div>
	);
}