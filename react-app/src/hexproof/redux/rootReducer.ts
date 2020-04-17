import { combineReducers } from 'redux';

import { routeReducer } from 'hexproof/redux/route/reducer';
import { setsReducer } from 'hexproof/redux/sets/reducer';

export default combineReducers({
  route: routeReducer,
  sets: setsReducer,
});