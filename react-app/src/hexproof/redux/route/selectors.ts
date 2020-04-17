import { createSelector } from 'reselect';

import { IRouteState } from 'hexproof/redux/route/reducer';

const branchSelector = (state: any): IRouteState => state.route;

export const hashSelector = createSelector(
	[branchSelector],
	(state: IRouteState) => state.hash
);
