import { combineReducers } from 'redux';
import userReducer from './user-reducer';

//make root reducer
export default combineReducers({
    user: userReducer
});