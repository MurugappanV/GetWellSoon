import * as types from '../../common/redux/types';
import { AsyncStorage } from 'react-native'

export function setUserIdStartUp() {
    return (dispatch, getState) => {
        console.log("async user id ")
        AsyncStorage.getItem('userId').then(userId => {
            console.log("user id --", userId);
            dispatch({ type: types.SET_USER_ID, data: userId});
        })
    }
}