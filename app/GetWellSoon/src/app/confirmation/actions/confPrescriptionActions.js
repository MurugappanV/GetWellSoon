import * as types from '../../common/redux/types';
import { savePrescription } from '../graphql/quries';
import client from '../../common/redux/apollo/client';

export function savePrescription( billUrl, isConfirmed,message,deliveryAddress,deliveryName,deliveryPhoneNumber) {
    return (dispatch, getState) => {
        // console.log(`${userId}----${name}----${email}----${photoUrl}----${phoneNumber}----${dob}`)
        dispatch({type: types.SAVE_PRESCP_LOADING});
        client.mutate({
            mutation: savePrescription,
            variables: {billUrl, isConfirmed,message,deliveryAddress,deliveryName,deliveryPhoneNumber}
        }).then((resp) => {
            if (resp.data != null) {
                dispatch({type: types.SAVE_PRESCP_LOADED});
            }
            if(resp.errors) {
                 dispatch({type: types.SAVE_PRESCP_ERROR});
            }
        }).catch( (exception) => {
            dispatch({ type: types.EXCEPTION, exception: exception});
        });
    }
}

export function clearPrescription() {
    return (dispatch, getState) => {
        dispatch({type: types.CLEAR_PRESCP});
        dispatch({type: types.CLEAR_PRESCRIPTION_URL});
    }
}