import { combineReducers } from 'redux';

import { routeReducer } from 'hexproof/redux/route/reducer';
import { setsReducer } from 'hexproof/redux/sets/reducer';
import { setIconsReducer } from 'hexproof/redux/setIcons/reducer';

export default combineReducers({
  route: routeReducer,
  setIcons: setIconsReducer,
  sets: setsReducer,
});