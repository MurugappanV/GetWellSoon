import * as types from '../../../common/redux/types';

export function setPrescriptionImageUrl(prescriptionUrl) {
    return (dispatch, getState) => {
        if(prescriptionUrl != null) {
            dispatch({type: types.SET_PRESCRIPTION_URL, data: prescriptionUrl});
            dispatch({type: types.UPLOADED_PRESCRIPTION});
        } else {
            dispatch({type: types.CLEAR_PRESCRIPTION_URL});
        }
    }
}

export function clearPrescriptionImageUrl() {
    return (dispatch, getState) => {
        dispatch({type: types.CLEAR_PRESCRIPTION_URL});
    }
}

export function uploadingImageUrl() {
    return (dispatch, getState) => {
        dispatch({type: types.UPLOADING_PRESCRIPTION});
    }
}