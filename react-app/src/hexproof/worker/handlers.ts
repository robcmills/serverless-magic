import {
  DOWNLOAD_BULK_DATA_OBJECT,
} from 'hexproof/redux/bulkDataObjects/actionTypes'

import { downloadBulkDataObject } from './downloadBulkDataObject'

const handlers: any = {}

handlers[DOWNLOAD_BULK_DATA_OBJECT] = downloadBulkDataObject

export { handlers }