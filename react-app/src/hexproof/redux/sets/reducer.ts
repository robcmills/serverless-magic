import { createReducer } from 'hexproof/redux/createReducer';
import { ISet } from 'hexproof/types/ISet';
import { UUID } from 'hexproof/types/UUID';
import { indexBy } from 'hexproof/util/indexBy';

import { HYDRATE_SETS } from './actionTypes';

export interface ISetsState {
  setsById: Record<UUID, ISet>;
}

const initialState: ISetsState = {
  setsById: {},
};

const handlers = {
  [HYDRATE_SETS]: (state: ISetsState, sets: ISet[]): ISetsState => ({
    ...state,
    setsById: indexBy(sets, 'id'),
  }),
};

export const setsReducer = createReducer(initialState, handlers);
