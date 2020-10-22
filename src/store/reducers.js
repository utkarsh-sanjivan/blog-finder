import { reducer as userReducer } from "./Users/reducers";
import { combineReducers } from 'redux';

export default (history) => combineReducers({
  userReducer: userReducer,
});
