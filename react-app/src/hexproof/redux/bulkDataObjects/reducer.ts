import { createReducer } from 'hexproof/redux/createReducer';

import { UUID } from 'hexproof/types/UUID';
import { IScryFallBulkDataObject } from 'hexproof/types/IScryFallBulkDataObject';

import { indexBy } from 'hexproof/util/indexBy';

import {
  getAsyncActionType,
  getErrorActionType,
  getSuccessActionType,
} from 'hexproof/redux/asyncAction';

import {
  // DOWNLOAD_BULK_DATA_OBJECT,
  DOWNLOAD_BULK_DATA_OBJECTS,
} from 'hexproof/redux/bulkDataObjects/actionTypes';

export interface IBulkDataObjectsState {
	isDownloadingBulkDataObjects: boolean;
  bulkDataObjectsById: Record<UUID, IScryFallBulkDataObject>;
}
const initialState: IBulkDataObjectsState = {
	isDownloadingBulkDataObjects: false,
  bulkDataObjectsById: {},
};

const handlers = {
  [getAsyncActionType(DOWNLOAD_BULK_DATA_OBJECTS)]: (state: IBulkDataObjectsState): IBulkDataObjectsState => ({
    ...state,
    isDownloadingBulkDataObjects: true,
  }),
  [getErrorActionType(DOWNLOAD_BULK_DATA_OBJECTS)]: (state: IBulkDataObjectsState): IBulkDataObjectsState => ({
    ...state,
    isDownloadingBulkDataObjects: false,
  }),
  [getSuccessActionType(DOWNLOAD_BULK_DATA_OBJECTS)]: (
    state: IBulkDataObjectsState,
    { response }: { response: IScryFallBulkDataObject[] },
  ): IBulkDataObjectsState => ({
    ...state,
    isDownloadingBulkDataObjects: false,
    bulkDataObjectsById: indexBy(response, 'id'),
  }),
};

export const bulkDataObjectsReducer = createReducer(initialState, handlers);
