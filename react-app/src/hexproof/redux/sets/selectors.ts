import { createSelector } from 'reselect';

import { ISetsState } from 'hexproof/redux/sets/reducer';
import { ISet } from 'hexproof/types/ISet';

const branchSelector = (state: any): ISetsState => state.sets;

export const isDownloadingSetsSelector = createSelector(
	[branchSelector],
	(state: ISetsState) => state.isDownloadingSets
);

export const setsByIdSelector = createSelector(
	[branchSelector],
	(state: ISetsState) => state.setsById
);

export const setsArraySelector = createSelector(
	[setsByIdSelector],
	Object.values
);

export const setsCountSelector = createSelector(
	[setsArraySelector],
	(sets: ISet[]) => sets.length
);
