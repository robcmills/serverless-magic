import { store } from 'hexproof/redux/store';

import {
  DOWNLOAD_BULK_DATA_OBJECTS,
} from 'hexproof/redux/bulkDataObjects/actionTypes';

import { asyncAction } from 'hexproof/redux/asyncAction';
import { data } from 'hexproof/data';

export const downloadBulkDataObjectsAsyncAction = () =>
  asyncAction({
    action: { type: DOWNLOAD_BULK_DATA_OBJECTS },
    dispatch: store.dispatch,
    promise: data.downloadBulkDataObjects,
  });
