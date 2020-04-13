import { combineReducers } from 'redux';

import { setsReducer } from 'hexproof/redux/sets/reducer';

export default combineReducers({
  sets: setsReducer,
});