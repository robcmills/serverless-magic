import { createReducer } from 'hexproof/redux/createReducer';
import { ISetIcon } from 'hexproof/types/ISetIcon';
import { URI } from 'hexproof/types/URI';
import { indexBy } from 'hexproof/util/indexBy';

import {
	HYDRATE_SET_ICON,
  HYDRATE_SET_ICONS,
} from './actionTypes';

export interface ISetIconsState {
	isDownloadingSets: boolean;
  setIconsByUri: Record<URI, ISetIcon>;
}
const initialState: ISetIconsState = {
	isDownloadingSets: false,
  setIconsByUri: {},
};

const handlers = {
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
