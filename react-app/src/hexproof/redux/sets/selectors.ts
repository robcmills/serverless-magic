import { createSelector } from 'reselect';

import { ISet } from 'hexproof/types/ISet';

import { compare } from 'hexproof/util/compare';
import { escapeRegExp } from 'hexproof/util/escapeRegExp';

import { ISetsState } from 'hexproof/redux/sets/reducer';

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

export const setsSearchQuerySelector = createSelector(
	[branchSelector],
	(state: ISetsState) => state.searchQuery
);

export const setsSortDirectionSelector = createSelector(
	[branchSelector],
	(state: ISetsState) => state.sortDirection
);

export const setsSortFieldSelector = createSelector(
	[branchSelector],
	(state: ISetsState) => state.sortField
);

export const setsSearchResultsSelector = createSelector(
  [setsArraySelector, setsSearchQuerySelector],
  (sets: ISet[], query: string) => {
    if (!query) {
      return sets;
    }
    const regex = new RegExp(escapeRegExp(query), 'i');
    return sets.filter(set => regex.test(set.name) || regex.test(set.code));
  }
);

export const setsSortedSelector = createSelector(
	[setsSearchResultsSelector, setsSortDirectionSelector, setsSortFieldSelector],
	(sets, direction, field) => sets.sort(compare(field, 'name', direction === 'ASC'))
);

export const setsSelector = createSelector(
	[setsSortedSelector],
	(sets: ISet[]) => sets
);

export const setsSearchResultsCountSelector = createSelector(
	[setsSearchResultsSelector],
	(results: ISet[]) => results.length
);
