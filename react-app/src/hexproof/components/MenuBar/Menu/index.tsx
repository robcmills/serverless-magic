import React, { SyntheticEvent } from 'react';
import { createUseStyles } from 'react-jss';
import cn from 'classnames';

import { CloseIcon } from 'hexproof/components/icons/CloseIcon';
import { Portal } from 'hexproof/components/Portal';

import { MenuItem } from './MenuItem';


import { base } from 'hexproof/components/typography/styles';
import { DEFAULT_TEXT_COLOR, ORANGE, DARK_GRAY } from 'hexproof/styles/colors';
import {
	MENU_BORDER_WIDTH,
	MENU_BAR_HEIGHT,
	MENU_WIDTH,
} from 'hexproof/styles/constants';
import { screen } from 'hexproof/styles/mixins';

const useStyles = createUseStyles({
	menuScreen: {
		...screen,
		pointerEvents: 'none',
	},
	menu: {
		alignContent: 'start',
		backgroundColor: DARK_GRAY,
		bottom: 0,
		borderRight: `${MENU_BORDER_WIDTH}px solid gray`,
	  color: DEFAULT_TEXT_COLOR,
		display: 'grid',
  	fontFamily: base.fontFamily,
		left: -MENU_WIDTH - MENU_BORDER_WIDTH,
		position: 'absolute',
		top: 0,
		transition: 'left 256ms',
		width: MENU_WIDTH,
	},
	open: {
		left: 0,
		pointerEvents: 'all',
	},
	menuHeader: {
		display: 'grid',
		height: MENU_BAR_HEIGHT,
		justifyContent: 'end',
	},
	closeIcon: {
		cursor: 'pointer',
		display: 'grid',
		placeItems: 'center',
		width: MENU_BAR_HEIGHT,
		'&:hover, &:focus': {
			color: ORANGE,
		},
	},
});

interface P {
	close: () => void;
	isOpen: boolean;
}

const handleClick = (event: SyntheticEvent) => {
	event.stopPropagation();
};

export function Menu({ close, isOpen }: P) {
	const s = useStyles();
	const menuClass = cn(s.menu, { [s.open]: isOpen });
	const menuScreenClass = cn(s.menuScreen, { [s.open]: isOpen });


	return (
		<Portal>
			<div className={menuScreenClass} onClick={close}>
				<div className={menuClass} onClick={handleClick}>
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