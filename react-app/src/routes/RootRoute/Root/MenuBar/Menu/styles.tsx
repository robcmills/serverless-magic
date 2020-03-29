import { createUseStyles } from 'react-jss';

import { ORANGE, TRANSLUCENT_DARK_GRAY } from 'styles/colors';
import {
	ICON_SIZE,
	MENU_BORDER_WIDTH,
	MENU_ITEM_HEIGHT,
	MENU_WIDTH,
} from 'styles/constants';
import { screen } from 'styles/mixins';

export const useStyles = createUseStyles({
	menuScreen: {
		...screen,
		pointerEvents: 'none',
	},
	menu: {
		alignContent: 'start',
		backgroundColor: TRANSLUCENT_DARK_GRAY,
		bottom: 0,
		borderRight: `${MENU_BORDER_WIDTH}px solid white`,
		color: 'white',
		display: 'grid',
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
		height: MENU_ITEM_HEIGHT,
		justifyContent: 'end',
	},
	closeIcon: {
		cursor: 'pointer',
		padding: ICON_SIZE,
		'&:hover, &:focus': {
			color: ORANGE,
		},
	},
});
