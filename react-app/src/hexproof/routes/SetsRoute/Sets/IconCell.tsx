import React from 'react';
import { createUseStyles } from 'react-jss';

import { ISet } from 'hexproof/types/ISet';

import { SetIcon } from 'hexproof/components/SetIcon';

const useStyles = createUseStyles({
	iconCell: {
		display: 'grid',
	},
});

interface P {
	set: ISet;
}

export function IconCell({ set }: P) {
	const s = useStyles();
	return (
    <div className={s.iconCell}>
    	<SetIcon set={set} />
	  </div>
	);
}
