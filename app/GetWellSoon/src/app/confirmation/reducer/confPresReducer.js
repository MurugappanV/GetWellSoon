import createReducer from '../../common/lib/createReducer';
import *  as types from '../../common/redux/types';
import *  as generalConstants from '../../../common/constants/generalConstants';

export const savePresStatus = createReducer(0, {
    [types.SAVE_PRESCP_LOADING](state, action) {
         return generalConstants.LOADING;
    },[types.SAVE_PRESCP_LOADED](state, action) {
        return generalConstants.LOADED;
    },[types.SAVE_PRESCP_ERROR](state, action) {
        return generalConstants.ERROR;
    },[types.CLEAR_PRESCP](state, action) {
        return 0;
    },
});