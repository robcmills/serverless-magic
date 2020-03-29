import { createUseStyles } from 'react-jss';

import { ORANGE } from 'styles/colors';
import { ICON_SIZE, SPACING_UNIT } from 'styles/constants';
import { screen } from 'styles/mixins';

export const useStyles = createUseStyles({
	menuBar: {
		...screen,
		bottom: 'auto',
		color: 'white',
		display: 'grid',
		height: SPACING_UNIT * 4,
		justifyContent: 'start',
	},
	menuIcon: {
		cursor: 'pointer',
		padding: ICON_SIZE,
		'&:hover, &:focus': {
			color: ORANGE,
		},
	},
});
