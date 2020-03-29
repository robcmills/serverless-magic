import { createUseStyles } from 'react-jss';

import { screen } from 'styles/mixins';

export const useStyles = createUseStyles({
	app: {
		...screen,
		background: 'black',
		color: 'white',
		display: 'grid',
	  fontFamily: ['Helvetica Neue', 'sans-serif'],
	},
});
