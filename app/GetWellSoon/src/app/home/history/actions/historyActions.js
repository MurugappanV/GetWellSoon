import * as types from '../../../common/redux/types';
import client from '../../../common/redux/apollo/client';
import {userPrescriptionsQuery, userPrescriptionsSubscription} from '../graphql/quries';
import { mapPrescriptionRawDetails, addPrescriptionSubstripionDetails, mapPrescriptionToSectionList } from '../../../common/redux/manipulations/prescriptionConvertor';
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
}

export function clearPrescriptionList() {
    return (dispatch, getState) => {
        dispatch({type: types.CLEAR_PRESCRIPTION_LIST});
    }
}