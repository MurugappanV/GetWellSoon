import * as types from '../../../common/redux/types';

export function setPrescriptionList(prescriptionList) {
    return (dispatch, getState) => {
        if(prescriptionList != null) {
            dispatch({type: types.SET_PRESCRIPTION_LIST, data: prescriptionList});
        } else {
            dispatch({type: types.CLEAR_PRESCRIPTION_LIST});
        }
    }
}

export function clearPrescriptionList() {
    return (dispatch, getState) => {
        dispatch({type: types.CLEAR_PRESCRIPTION_LIST});
    }
}