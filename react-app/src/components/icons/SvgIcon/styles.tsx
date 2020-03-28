import { createUseStyles } from 'react-jss';

import { ICON_SIZE } from 'styles/constants';

export const useStyles = createUseStyles({
	svgIcon: {
		height: ICON_SIZE,
		width: ICON_SIZE,
	},
	g: {
		fill: 'currentColor',
	}
});
