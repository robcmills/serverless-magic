import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

import { ISet } from 'hexproof/types/ISet';

import { data } from 'hexproof/data';

import { SET_ICON_SIZE } from 'hexproof/styles/constants';

const useStyles = createUseStyles({
	setIcon: {
		display: 'grid',
		'& svg': {
			height: SET_ICON_SIZE,
			width: SET_ICON_SIZE,
		},
		'& svg *': {
			fill: 'currentColor',
		},
	},
});

interface P {
	set: ISet;
}

export function SetIcon({ set }: P) {
	const s = useStyles();

	const [iconSvg, setIconSvg] = useState(set.icon_svg || '');

	useEffect(() => {
		if (set.icon_svg) {
			return;
		}
		let isMounted = true;
		data.getSetIcon(set.icon_svg_uri).then((svg) => {
			if (isMounted) {
				setIconSvg(svg);
			}
		});
		return () => {
			isMounted = false;
		};
	}, [set, setIconSvg]);

	return (
    <div className={s.setIcon} dangerouslySetInnerHTML={{ __html: iconSvg }} />
	);
}
