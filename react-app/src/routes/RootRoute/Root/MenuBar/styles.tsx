import { createUseStyles } from 'react-jss';

import { DARK_GRAY, ORANGE } from 'styles/colors';
import { MENU_BAR_HEIGHT } from 'styles/constants';

export const useStyles = createUseStyles({
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
