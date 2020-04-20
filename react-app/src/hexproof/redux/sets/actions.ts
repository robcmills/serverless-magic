import { store } from 'hexproof/redux/store';
import { ISet } from 'hexproof/types/ISet';

import {
  DOWNLOAD_SETS,
  HYDRATE_SETS,
  SET_SORT_DIRECTION,
  SET_SORT_FIELD,
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

export const setSortDirection = (payload: 'ASC' | 'DESC') => {
  store.dispatch({ type: SET_SORT_DIRECTION, payload });
}

export const setSortField = (payload: keyof ISet) => {
  store.dispatch({ type: SET_SORT_FIELD, payload });
}