import * as types from '../../common/redux/types';

export function setProfilePicUrl(profilePicUrl) {
    return (dispatch, getState) => {
        if(profilePicUrl != null) {
            dispatch({type: types.SET_PROFILE_URL, data: profilePicUrl});
            dispatch({type: types.UPLOADED_PROFILE_PIC});
        } else {
            dispatch({type: types.CLEAR_PROFILE_URL});
        }
    }
}

export function clearProfilePicUrl() {
    return (dispatch, getState) => {
        dispatch({type: types.CLEAR_PROFILE_URL});
    }
}

export function uploadingImageUrl() {
    return (dispatch, getState) => {
        dispatch({type: types.UPLOADING_PROFILE_PIC});
    }
}