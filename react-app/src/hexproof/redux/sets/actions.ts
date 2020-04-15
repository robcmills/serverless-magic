import { store } from 'hexproof/redux/store';
import { ISet } from 'hexproof/types/ISet';

import {
  DOWNLOAD_SETS,
  HYDRATE_SETS,
} from 'hexproof/redux/sets/actionTypes';

import { asyncAction } from 'hexproof/redux/asyncAction';
import { data } from 'hexproof/data';

export const downloadSetsAsyncAction = () =>
  asyncAction({
    action: { type: DOWNLOAD_SETS },
    dispatch: store.dispatch,
    promise: data.downloadSets,
  });

export const hydrateSetsAction = (payload: ISet[]) => {
  store.dispatch({ type: HYDRATE_SETS, payload });
}