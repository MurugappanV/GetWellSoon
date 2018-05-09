import createReducer from '../../../common/lib/createReducer';
import *  as types from '../../../common/redux/types';
import *  as generalConstants from '../../../../common/constants/generalConstants';

export const prescriptionList = createReducer(null, {
    [types.SET_PRESCRIPTION_LIST](state, action) {
         return action.data;
    },
    [types.SET_PRESCRIPTION_LIST](state, action) {
        return null;
   },
});