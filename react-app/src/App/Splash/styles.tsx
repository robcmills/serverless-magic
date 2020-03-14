import { createUseStyles } from 'react-jss';

import { screen } from 'styles/mixins';
import swamp from './gn2-59-swamp.jpg';

export const useStyles = createUseStyles({
	container: {
		backgroundImage: `url(${swamp})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		display: 'grid',
		placeItems: 'center',
	},
	screen: {
		...screen,
		background: 'black',
		opacity: 0.5,
	},
	logoContainer: {
		display: 'grid',
		textAlign: 'center',
		zIndex: 1,
	},
});
