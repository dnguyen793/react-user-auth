import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import formReducer from './form_reducer';

//make root reducer where it comebines all other reducers into ONE
export default combineReducers({
    user: userReducer,
    form: formReducer,
});