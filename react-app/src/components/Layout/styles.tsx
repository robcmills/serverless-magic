import { createUseStyles } from 'react-jss';

import { MENU_BAR_HEIGHT } from 'styles/constants';
import { globals, screen } from 'styles/mixins';

export const useStyles = createUseStyles({
	root: {
		...globals,
		...screen,
		display: 'grid',
		gridTemplateRows: `${MENU_BAR_HEIGHT}px 1fr`,
	},
	menuBar: {
		display: 'grid',
	},
	body: {
		display: 'grid',
	},
});