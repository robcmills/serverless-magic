import { combineReducers } from 'redux';

import { bulkDataObjectsReducer } from 'hexproof/redux/bulkDataObjects/reducer';
import { routeReducer } from 'hexproof/redux/route/reducer';
import { setsReducer } from 'hexproof/redux/sets/reducer';
import { setIconsReducer } from 'hexproof/redux/setIcons/reducer';

export default combineReducers({
	bulkDataObjects: bulkDataObjectsReducer,
  route: routeReducer,
  setIcons: setIconsReducer,
  sets: setsReducer,
});