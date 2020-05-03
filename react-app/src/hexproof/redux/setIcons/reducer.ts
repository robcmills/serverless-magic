import { createReducer } from 'hexproof/redux/createReducer';
import { ISetIcon } from 'hexproof/types/ISetIcon';
import { URI } from 'hexproof/types/URI';
import { indexBy } from 'hexproof/util/indexBy';

import {
  getAsyncActionType,
  getErrorActionType,
  getSuccessActionType,
} from 'hexproof/redux/asyncAction';

import {
  DOWNLOAD_SET_ICONS,
	HYDRATE_SET_ICON,
  HYDRATE_SET_ICONS,
} from './actionTypes';

export interface ISetIconsState {
	isDownloadingSetIcons: boolean;
  setIconsByUri: Record<URI, ISetIcon>;
}
const initialState: ISetIconsState = {
	isDownloadingSetIcons: false,
  setIconsByUri: {},
};

const handlers = {
  [getAsyncActionType(DOWNLOAD_SET_ICONS)]: (state: ISetIconsState): ISetIconsState => ({
    ...state,
    isDownloadingSetIcons: true,
  }),
  [getErrorActionType(DOWNLOAD_SET_ICONS)]: (state: ISetIconsState): ISetIconsState => ({
    ...state,
    isDownloadingSetIcons: false,
  }),
  [getSuccessActionType(DOWNLOAD_SET_ICONS)]: (state: ISetIconsState): ISetIconsState => ({
    ...state,
    isDownloadingSetIcons: false,
  }),
  [HYDRATE_SET_ICON]: (state: ISetIconsState, setIcon: ISetIcon): ISetIconsState => ({
    ...state,
    setIconsByUri: {
      ...state.setIconsByUri,
      [setIcon.uri]: setIcon,
    },
  }),
  [HYDRATE_SET_ICONS]: (state: ISetIconsState, setIcons: ISetIcon[]): ISetIconsState => ({
    ...state,
    setIconsByUri: {
      ...state.setIconsByUri,
      ...indexBy(setIcons, 'uri'),
    },
  }),
};

export const setIconsReducer = createReducer(initialState, handlers);
