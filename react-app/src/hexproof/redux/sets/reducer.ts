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
  SET_SEARCH_QUERY,
  SET_SORT_DIRECTION,
  SET_SORT_FIELD,
} from './actionTypes';

export interface ISetsState {
  columnFields: Array<keyof ISet>;
  columnWidths: number[];
	isDownloadingSets: boolean;
  searchQuery: string;
  setsById: Record<UUID, ISet>;
  sortDirection: 'ASC' | 'DESC';
  sortField: keyof ISet;
}
const initialState: ISetsState = {
  columnFields: ['released_at', 'code', 'icon_svg_uri', 'name', 'card_count'],
  columnWidths: [128, 64, 70, 256, 128],
	isDownloadingSets: false,
  searchQuery: '',
  setsById: {},
  sortDirection: 'DESC',
  sortField: 'released_at',
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
  [SET_SEARCH_QUERY]: (state: ISetsState, searchQuery: string): ISetsState => ({
    ...state,
    searchQuery,
  }),
  [SET_SORT_DIRECTION]: (state: ISetsState, sortDirection: 'ASC' | 'DESC'): ISetsState => ({
    ...state,
    sortDirection,
  }),
  [SET_SORT_FIELD]: (state: ISetsState, sortField: keyof ISet): ISetsState => ({
    ...state,
    sortField,
  }),
};

export const setsReducer = createReducer(initialState, handlers);
