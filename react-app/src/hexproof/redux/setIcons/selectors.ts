import { createSelector } from 'reselect';

import { ISetIcon } from 'hexproof/types/ISetIcon';

import { ISetIconsState } from 'hexproof/redux/setIcons/reducer';

const branchSelector = (state: any): ISetIconsState => state.setIcons;


export const isDownloadingSetIconsSelector = createSelector(
	[branchSelector],
	(state: ISetIconsState) => state.isDownloadingSetIcons
);

export const setIconsByUriSelector = createSelector(
	[branchSelector],
	(state: ISetIconsState) => state.setIconsByUri
);

export const setIconsArraySelector = createSelector(
	[setIconsByUriSelector],
	Object.values
);

export const setIconsCountSelector = createSelector(
	[setIconsArraySelector],
	(setIcons: ISetIcon[]) => setIcons.length
);
