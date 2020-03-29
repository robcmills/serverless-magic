import { createUseStyles } from 'react-jss';

import { screen } from 'styles/mixins';

export const useStyles = createUseStyles({
	viewport: {
		...screen,
		backgroundColor: 'black',
	},
});
