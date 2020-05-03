import { createSelector } from 'reselect';

import { ISetIconsState } from 'hexproof/redux/setIcons/reducer';

const branchSelector = (state: any): ISetIconsState => state.setIcons;

export const setIconsByUriSelector = createSelector(
	[branchSelector],
	(state: ISetIconsState) => state.setIconsByUri
);
