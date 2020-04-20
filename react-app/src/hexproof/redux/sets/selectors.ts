import { createSelector } from 'reselect';

import { compare } from 'hexproof/util/compare';
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

export const setsColumnFieldsSelector = createSelector(
	[branchSelector],
	(state: ISetsState) => state.columnFields
);

export const setsColumnWidthsSelector = createSelector(
	[branchSelector],
	(state: ISetsState) => state.columnWidths
);

export const setsCountSelector = createSelector(
	[setsArraySelector],
	(sets: ISet[]) => sets.length
);

export const setsSortDirectionSelector = createSelector(
	[branchSelector],
	(state: ISetsState) => state.sortDirection
);

export const setsSortFieldSelector = createSelector(
	[branchSelector],
	(state: ISetsState) => state.sortField
);

export const setsSortedArraySelector = createSelector(
	[setsArraySelector, setsSortDirectionSelector, setsSortFieldSelector],
	(sets, direction, field) => sets.sort(compare(field, 'name', direction === 'ASC'))
);
