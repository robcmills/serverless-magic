import { createReducer } from 'hexproof/redux/createReducer';

import {
	SET_HASH,
} from './actionTypes';

export interface IRouteState {
	hash: string;
}

const initialState: IRouteState = {
	hash: '',
};

const handlers = {
	[SET_HASH]: (state: IRouteState, hash: string): IRouteState => ({
    ...state,
    hash,
  }),
};

export const routeReducer = createReducer(initialState, handlers);
