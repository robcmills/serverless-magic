import { createUseStyles } from 'react-jss';

import { ORANGE } from 'styles/colors';
import { SPACING_UNIT } from 'styles/constants';
import { screen } from 'styles/mixins';

export const useStyles = createUseStyles({
	menuBar: {
		...screen,
		bottom: 'auto',
		color: 'white',
		display: 'grid',
		height: SPACING_UNIT * 4,
	},
	menuIcon: {
		cursor: 'pointer',
		padding: SPACING_UNIT * 2,
		'&:hover, &:focus': {
			color: ORANGE,
		},
	},
});
