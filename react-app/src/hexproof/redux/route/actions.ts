import { store } from 'hexproof/redux/store';

import {
  SET_HASH,
} from 'hexproof/redux/route/actionTypes';

export const setHashAction = (payload: string) => {
  store.dispatch({ type: SET_HASH, payload });
}