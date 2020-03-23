import { createUseStyles } from 'react-jss';

import { SPACING_UNIT } from 'styles/constants';

export const useStyles = createUseStyles({
	svgIcon: {
		height: SPACING_UNIT * 2,
		width: SPACING_UNIT * 2,
	},
	g: {
		fill: 'currentColor',
	}
});
