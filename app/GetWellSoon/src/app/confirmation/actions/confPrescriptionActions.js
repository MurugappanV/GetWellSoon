import * as types from '../../common/redux/types';
import { addPrescription } from '../graphql/quries';
import client from '../../common/redux/apollo/client';

export function savePrescription( billUrl, isConfirmed,message,deliveryAddress,deliveryName,deliveryPhoneNumber) {
    return (dispatch, getState) => {
        console.log(`${billUrl}----${isConfirmed}----${message}----${deliveryAddress}----${deliveryName}----${deliveryPhoneNumber}`)
        dispatch({type: types.SAVE_PRESCP_LOADING});
        client.mutate({
            mutation: addPrescription,
            variables: {billUrl: billUrl, isConfirmed: isConfirmed,message: message,deliveryAddress: deliveryAddress,deliveryName: deliveryName,deliveryPhoneNumber: deliveryPhoneNumber}
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

export function clearPrescriptionUrl() {
    return (dispatch, getState) => {
        dispatch({type: types.CLEAR_PRESCRIPTION_URL});
    }
}

export function clearPrescription() {
    return (dispatch, getState) => {
        dispatch({type: types.CLEAR_PRESCP});
    }
}