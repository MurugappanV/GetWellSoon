import createReducer from '../../../common/lib/createReducer';
import *  as types from '../../../common/redux/types';
import *  as generalConstants from '../../../../common/constants/generalConstants';

export const prescriptionList = createReducer(null, {
    [types.SET_PRESCRIPTION_LIST](state, action) {
         return action.data;
    },
    [types.CLEAR_PRESCRIPTION_LIST](state, action) {
        return null;
   },
});

export const prescriptionListStatus = createReducer(0, {
    [types.PRESCRIPTION_LIST_LOADING](state, action) {
         return generalConstants.LOADING;
    },[types.PRESCRIPTION_LIST_LOADED](state, action) {
        return generalConstants.LOADED;
    },[types.PRESCRIPTION_LIST_ERROR](state, action) {
        return generalConstants.ERROR;
    },[types.CLEAR_PRESCRIPTION_LIST](state, action) {
        return 0;
    },
});