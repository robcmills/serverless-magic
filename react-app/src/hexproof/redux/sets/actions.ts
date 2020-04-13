import { store } from 'hexproof/redux/store';
import { ISet } from 'hexproof/types/ISet';

import { HYDRATE_SETS } from 'hexproof/redux/sets/actionTypes';

export const hydrateSetsAction = (payload: ISet[]) => {
  store.dispatch({ type: HYDRATE_SETS, payload });
}