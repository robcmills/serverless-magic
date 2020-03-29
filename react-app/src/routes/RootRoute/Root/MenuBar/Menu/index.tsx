import React from 'react';
import cn from 'classnames';

import { CloseIcon } from 'components/icons/CloseIcon';
import { Portal } from 'components/Portal';

import { MenuItem } from './MenuItem';

import { useStyles } from './styles';

interface P {
	close: () => void;
	isOpen: boolean;
}

export function Menu({ close, isOpen }: P) {
	const s = useStyles();
	const menuClass = cn(s.menu, { [s.open]: isOpen });
	const menuScreenClass = cn(s.menuScreen, { [s.open]: isOpen });

	return (
		<Portal>
			<div className={menuScreenClass} onClick={close}>
				<div className={menuClass}>
					<div className={s.menuHeader}>
						<div className={s.closeIcon} onClick={close}>
							<CloseIcon />
						</div>
					</div>
					<MenuItem label='DATA' />
					<MenuItem label='CARDS' />
					<MenuItem label='DECKS' />
				</div>
			</div>
		</Portal>
	);
}