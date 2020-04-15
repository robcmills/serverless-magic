import { createReducer } from 'hexproof/redux/createReducer';
import { ISet } from 'hexproof/types/ISet';
import { UUID } from 'hexproof/types/UUID';
import { indexBy } from 'hexproof/util/indexBy';

import {
	getAsyncActionType,
	getErrorActionType,
	getSuccessActionType,
} from 'hexproof/redux/asyncAction';

import {
	DOWNLOAD_SETS,
	HYDRATE_SETS,
} from './actionTypes';

export interface ISetsState {
	isDownloadingSets: boolean;
  setsById: Record<UUID, ISet>;
}

const initialState: ISetsState = {
	isDownloadingSets: false,
  setsById: {},
};

const handlers = {
	[getAsyncActionType(DOWNLOAD_SETS)]: (state: ISetsState): ISetsState => ({
    ...state,
    isDownloadingSets: true,
  }),
  [getErrorActionType(DOWNLOAD_SETS)]: (state: ISetsState): ISetsState => ({
    ...state,
    isDownloadingSets: false,
  }),
  [getSuccessActionType(DOWNLOAD_SETS)]: (state: ISetsState, {
  	response,
  }: { response: ISet[] }): ISetsState => ({
    ...state,
    isDownloadingSets: false,
    setsById: indexBy(response, 'id'),
  }),
  [HYDRATE_SETS]: (state: ISetsState, sets: ISet[]): ISetsState => ({
    ...state,
    setsById: indexBy(sets, 'id'),
  }),
};

export const setsReducer = createReducer(initialState, handlers);
