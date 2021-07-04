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
  DOWNLOAD_BULK_DATA_OBJECT,
  DOWNLOAD_BULK_DATA_OBJECT_COMPLETE,
  DOWNLOAD_BULK_DATA_OBJECT_PROGRESS,
  DOWNLOAD_BULK_DATA_OBJECTS,
} from 'hexproof/redux/bulkDataObjects/actionTypes';

export interface IBulkDataObjectsState {
	isDownloadingBulkDataObjects: boolean;
  bulkDataObjectsById: Record<UUID, IScryFallBulkDataObject>;
  bulkDataObjectsDownloadStatusById: Record<UUID, string>;
}
const initialState: IBulkDataObjectsState = {
	isDownloadingBulkDataObjects: false,
  bulkDataObjectsById: {},
  bulkDataObjectsDownloadStatusById: {},
};

const handlers = {
  [DOWNLOAD_BULK_DATA_OBJECT]: (
    state: IBulkDataObjectsState,
    bulkDataObject: IScryFallBulkDataObject,
  ): IBulkDataObjectsState => ({
    ...state,
    bulkDataObjectsDownloadStatusById: {
      ...state.bulkDataObjectsDownloadStatusById,
      [bulkDataObject.id]: 'Downloading...',
    },
  }),
  [DOWNLOAD_BULK_DATA_OBJECT_COMPLETE]: (
    state: IBulkDataObjectsState,
    { bulkDataObject, progress }: { bulkDataObject: IScryFallBulkDataObject, progress: number },
  ): IBulkDataObjectsState => {
    const bulkDataObjectsDownloadStatusById = {
      ...state.bulkDataObjectsDownloadStatusById,
    }
    delete bulkDataObjectsDownloadStatusById[bulkDataObject.id]
    return {
      ...state,
      bulkDataObjectsDownloadStatusById,
    }
  },
  [DOWNLOAD_BULK_DATA_OBJECT_PROGRESS]: (
    state: IBulkDataObjectsState,
    { bulkDataObject, progress }: { bulkDataObject: IScryFallBulkDataObject, progress: number },
  ): IBulkDataObjectsState => ({
    ...state,
    bulkDataObjectsDownloadStatusById: {
      ...state.bulkDataObjectsDownloadStatusById,
      [bulkDataObject.id]: `Downloading: ${progress}%`,
    },
  }),
  [getAsyncActionType(DOWNLOAD_BULK_DATA_OBJECTS)]: (
    state: IBulkDataObjectsState,
  ): IBulkDataObjectsState => ({
    ...state,
    isDownloadingBulkDataObjects: true,
  }),
  [getErrorActionType(DOWNLOAD_BULK_DATA_OBJECTS)]: (
    state: IBulkDataObjectsState,
  ): IBulkDataObjectsState => ({
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
