import { store } from 'hexproof/redux/store'
import { worker } from 'hexproof/worker'

// interfaces
import { IScryFallBulkDataObject } from 'hexproof/types/IScryFallBulkDataObject'

import {
  DOWNLOAD_BULK_DATA_OBJECT,
  DOWNLOAD_BULK_DATA_OBJECTS,
} from 'hexproof/redux/bulkDataObjects/actionTypes'

import { asyncAction } from 'hexproof/redux/asyncAction'
import { data } from 'hexproof/data'

export const downloadBulkDataObjectsAsyncAction = () =>
  asyncAction({
    action: { type: DOWNLOAD_BULK_DATA_OBJECTS },
    dispatch: store.dispatch,
    promise: data.downloadBulkDataObjects,
  })

export const downloadBulkDataObjectWorkerAction = (bulkDataObject: IScryFallBulkDataObject) => {
	const action = {
		type: DOWNLOAD_BULK_DATA_OBJECT,
		payload: bulkDataObject,
	}
	store.dispatch(action)
	worker.postMessage(action)
}