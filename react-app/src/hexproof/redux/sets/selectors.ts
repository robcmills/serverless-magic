import { createSelector } from 'reselect';

import { ISetsState } from 'hexproof/redux/sets/reducer';

const branchSelector = (state: any): ISetsState => state.sets;

export const setsByIdSelector = createSelector(
	[branchSelector],
	(state: ISetsState) => state.setsById
);

export const setsArraySelector = createSelector(
	[setsByIdSelector],
	Object.values
);
