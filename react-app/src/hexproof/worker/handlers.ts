// interfaces
import { IScryFallBulkDataObject } from 'hexproof/types/IScryFallBulkDataObject'

import {
  DOWNLOAD_BULK_DATA_OBJECT,
} from 'hexproof/redux/bulkDataObjects/actionTypes'

const handlers: any = {}

handlers[DOWNLOAD_BULK_DATA_OBJECT] = (bulkDataObject: IScryFallBulkDataObject) => {
	console.log('download bulk data object', bulkDataObject)
}

export { handlers }