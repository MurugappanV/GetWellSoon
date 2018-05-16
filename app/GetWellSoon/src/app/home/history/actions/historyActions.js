import * as types from '../../../common/redux/types';
import client, {wsClient} from '../../../common/redux/apollo/client';
import {userPrescriptionsQuery, userPrescriptionsSubscription, updateUserPrescription} from '../graphql/quries';
import { mapPrescriptionRawDetails, addPrescriptionSubstripionDetails, mapPrescriptionToSectionList, updatePrescriptionDetails } from '../../../common/redux/manipulations/prescriptionConvertor';
// import 

export function setPrescriptionList(userId) {
    return (dispatch, getState) => {
        dispatch({type: types.PRESCRIPTION_LIST_LOADING});
        client.query({
            query: userPrescriptionsQuery,
            variables: {id: userId}
        }).then((resp) => {
            if (resp.data != null) {
                dispatch({type: types.SET_PRESCRIPTION_LIST, data: mapPrescriptionToSectionList(mapPrescriptionRawDetails(resp.data))});
                dispatch({type: types.PRESCRIPTION_LIST_LOADED});
            } else {
                dispatch({type: types.PRESCRIPTION_LIST_ERROR});
            }
        }).catch( (exception) => {
            dispatch({ type: types.EXCEPTION, exception: exception});
        });
        subscribe(dispatch, getState, userId)
    }
}

export function subscribe(dispatch, getState, userId) {
    wsClient.unsubscribeAll();
    client.subscribe({
        query: userPrescriptionsSubscription,
        variables: {id: userId}
    }).subscribe({
        next(data) {
            dispatch({type: types.SET_PRESCRIPTION_LIST, data: mapPrescriptionToSectionList(addPrescriptionSubstripionDetails(getState().prescriptionList, data))});
        },
        error(error) {
            console.error('Subscription callback with error: ', error)
        },
    })
}

export function clearPrescriptionList() {
    return (dispatch, getState) => {
        dispatch({type: types.CLEAR_PRESCRIPTION_LIST});
    }
}

export function cancelPrescription(presId) {
    return (dispatch, getState) => {
        console.log("cancel pres - " , presId)
        dispatch({type: types.PRESCRIPTION_LIST_LOADING});
        client.mutate({
            mutation: updateUserPrescription,
            variables: {id: presId}
        }).then((resp) => {
            if (resp.data != null) {
                dispatch({type: types.SET_PRESCRIPTION_LIST, data: mapPrescriptionToSectionList(updatePrescriptionDetails(getState().prescriptionList, resp.data))});
                dispatch({type: types.PRESCRIPTION_LIST_LOADED});
            } else {
                dispatch({type: types.PRESCRIPTION_LIST_ERROR});
            }
        }).catch( (exception) => {
            dispatch({ type: types.EXCEPTION, exception: exception});
        });
    }
}