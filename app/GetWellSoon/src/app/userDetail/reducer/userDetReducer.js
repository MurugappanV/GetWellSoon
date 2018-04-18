import createReducer from '../../common/lib/createReducer';
import *  as types from '../../common/redux/types';
import *  as generalConstants from '../../../common/constants/generalConstants';
import { mapUserDetails } from '../../common/redux/manipulations/userDetailDataConvertor';

const initialUserDetail = {
    userDetailLoadingStatus: 0,
    userDetails: {}
}

export const profilePicUrl = createReducer(null, {
    [types.SET_PROFILE_URL](state, action) {
         return action.data;
    },
    [types.CLEAR_PROFILE_URL](state, action) {
        return null;
   },
});

export const profilePicUploadStatus = createReducer(0, {
    [types.UPLOADING_PROFILE_PIC](state, action) {
         return generalConstants.LOADING;
    },[types.UPLOADED_PROFILE_PIC](state, action) {
        return generalConstants.LOADED;
    },[types.ERROR_UPLOADING_PROFILE_PIC](state, action) {
        return generalConstants.ERROR;
    },[types.CLEAR_PROFILE_URL](state, action) {
        return 0;
    },
});

export const userProfileDetail = createReducer(initialUserDetail, {
    [types.USER_DETAILS_LOADING](state, action) {
         return {
             ...state,
             userDetailLoadingStatus: generalConstants.LOADING,
         }
    },
    [types.USER_DETAILS_LOADED](state, action) {
        return {
            ...state,
            userDetails: mapUserDetails(action.data),
            userDetailLoadingStatus: generalConstants.LOADED,
        };
    },
    [types.USER_DETAILS_ERROR](state, action) {
        return {
            ...state,
            userDetailLoadingStatus: generalConstants.ERROR,
        };
    },
    [types.CLEAR_USER_DETAILS](state, action) {
        return initialUserDetail;
    },
});