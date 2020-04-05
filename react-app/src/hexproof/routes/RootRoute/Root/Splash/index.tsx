import React from 'react';
import { createUseStyles } from 'react-jss';

import { Logo } from 'hexproof/components/Logo';

import swamp from './gn2-59-swamp.jpg';

import { absoluteScreen } from 'hexproof/styles/mixins';

export const useStyles = createUseStyles({
	container: {
		backgroundImage: `url(${swamp})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		display: 'grid',
		placeItems: 'center',
		position: 'relative',
	},
	screen: {
		...absoluteScreen,
		background: 'black',
		opacity: 0.5,
	},
	logoContainer: {
		display: 'grid',
		textAlign: 'center',
		zIndex: 1,
	},
});

const VERSION = 'v0.0.1';

export function Splash() {
	const s = useStyles();
	return (
		<div className={s.container}>
			<div className={s.screen} />
			<div className={s.logoContainer}>
				<Logo />
				<p>{VERSION}</p>
			</div>
		</div>
	);
}
