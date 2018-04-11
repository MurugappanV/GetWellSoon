import createReducer from '../../../common/lib/createReducer';
import *  as types from '../../../common/redux/types';
import *  as generalConstants from '../../../../common/constants/generalConstants';

export const prescriptionUrl = createReducer(null, {
    [types.SET_PRESCRIPTION_URL](state, action) {
         return action.data;
    },
    [types.CLEAR_PRESCRIPTION_URL](state, action) {
        return null;
   },
});

export const prescriptionUploadStatus = createReducer(0, {
    [types.UPLOADING_PRESCRIPTION](state, action) {
         return generalConstants.LOADING;
    },
    [types.UPLOADED_PRESCRIPTION](state, action) {
        return generalConstants.LOADED;
    },[types.ERROR_UPLOADING_PRESCRIPTION](state, action) {
        return generalConstants.ERROR;
    },[types.CLEAR_PRESCRIPTION_URL](state, action) {
        return 0;
    },
});