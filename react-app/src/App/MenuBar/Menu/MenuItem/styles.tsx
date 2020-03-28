import { createUseStyles } from 'react-jss';

import { ORANGE } from 'styles/colors';
import { MENU_ITEM_HEIGHT, SPACING_UNIT } from 'styles/constants';

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
