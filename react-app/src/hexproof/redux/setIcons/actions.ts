import { store } from 'hexproof/redux/store';
import { ISetIcon } from 'hexproof/types/ISetIcon';

import {
  HYDRATE_SET_ICON,
  HYDRATE_SET_ICONS,
} from 'hexproof/redux/setIcons/actionTypes';

export const hydrateSetIconAction = (payload: ISetIcon) => {
  store.dispatch({ type: HYDRATE_SET_ICON, payload });
}

export const hydrateSetIconsAction = (payload: ISetIcon[]) => {
  store.dispatch({ type: HYDRATE_SET_ICONS, payload });
}
