import { combineReducers } from 'redux';
import userReducer from './user-reducer';

//make root reducer where it comebines all other reducers into ONE
export default combineReducers({
    user: userReducer
});