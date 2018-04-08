import { combineReducers } from 'redux';
import * as handleException from './handleException';
import * as LoginReducer from '../../../login/reducer/LoginReducer';

export default combineReducers(Object.assign(
    handleException,
    LoginReducer
));