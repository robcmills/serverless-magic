import { createReducer } from 'hexproof/redux/createReducer';
import { ISet } from 'hexproof/types/ISet';
import { UUID } from 'hexproof/types/UUID';
import { indexBy } from 'hexproof/util/indexBy';

import { HYDRATE_SETS } from './actionTypes';

interface S {
  setsById: Record<UUID, ISet>;
}

const initialState: S = {
  setsById: {},
};

const handlers = {
  [HYDRATE_SETS]: (state: S, sets: ISet[]): S => ({
    ...state,
    setsById: indexBy(sets, 'id'),
  }),
};

export const setsReducer = createReducer(initialState, handlers);
