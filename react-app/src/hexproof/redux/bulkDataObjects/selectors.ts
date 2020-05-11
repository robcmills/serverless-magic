import { createSelector } from 'reselect';

import { sortBy } from 'hexproof/util/sortBy';

import { IBulkDataObjectsState } from 'hexproof/redux/bulkDataObjects/reducer';

const branchSelector = (state: any): IBulkDataObjectsState => state.bulkDataObjects;


export const isDownloadingBulkDataSelector = createSelector(
  [branchSelector],
  (state: IBulkDataObjectsState) => state.isDownloadingBulkDataObjects
);

export const bulkDataObjectsByIdSelector = createSelector(
  [branchSelector],
  (state: IBulkDataObjectsState) => state.bulkDataObjectsById
);

export const bulkDataObjectsArraySelector = createSelector(
  [bulkDataObjectsByIdSelector],
  Object.values
);

export const bulkDataObjectsSelector = createSelector(
  [bulkDataObjectsArraySelector],
  sortBy('compressed_size')
);
