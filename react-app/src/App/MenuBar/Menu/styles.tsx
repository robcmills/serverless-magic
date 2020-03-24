import { createUseStyles } from 'react-jss';

import { DARK_GRAY, ORANGE } from 'styles/colors';
import { MENU_BORDER_WIDTH, MENU_WIDTH, SPACING_UNIT } from 'styles/constants';
import { screen } from 'styles/mixins';

export const useStyles = createUseStyles({
	menuScreen: {
		...screen,
		pointerEvents: 'none',
	},
	menu: {
		backgroundColor: DARK_GRAY,
		bottom: 0,
		borderRight: `${MENU_BORDER_WIDTH}px solid white`,
		color: 'white',
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
	closeIcon: {
		cursor: 'pointer',
		padding: SPACING_UNIT * 2,
		'&:hover, &:focus': {
			color: ORANGE,
		},
	},
});
