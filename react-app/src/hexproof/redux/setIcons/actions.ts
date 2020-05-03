import { store } from 'hexproof/redux/store';
import { ISetIcon } from 'hexproof/types/ISetIcon';

import {
  DOWNLOAD_SET_ICONS,
  HYDRATE_SET_ICON,
  HYDRATE_SET_ICONS,
} from 'hexproof/redux/setIcons/actionTypes';

import { asyncAction } from 'hexproof/redux/asyncAction';
import { data } from 'hexproof/data';

export const downloadSetIconsAsyncAction = () =>
  asyncAction({
    action: { type: DOWNLOAD_SET_ICONS },
    dispatch: store.dispatch,
    promise: data.downloadSetIcons,
  });

export const hydrateSetIconAction = (payload: ISetIcon) => {
  store.dispatch({ type: HYDRATE_SET_ICON, payload });
}

export const hydrateSetIconsAction = (payload: ISetIcon[]) => {
  store.dispatch({ type: HYDRATE_SET_ICONS, payload });
}
