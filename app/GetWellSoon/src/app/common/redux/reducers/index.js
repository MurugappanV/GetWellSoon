import { combineReducers } from 'redux';
import * as handleException from './handleException';
import * as LoginReducer from '../../../login/reducer/LoginReducer';
import * as userDetReducer from '../../../userDetail/reducer/userDetReducer';
import * as confPresReducer from '../../../confirmation/reducer/confPresReducer';
import * as OrderReducer from '../../../home/order/reducer/OrderReducer';

export default combineReducers(Object.assign(
    handleException,
    LoginReducer,
    OrderReducer,
    userDetReducer,
    confPresReducer
));