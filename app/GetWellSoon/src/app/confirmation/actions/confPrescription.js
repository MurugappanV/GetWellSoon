import * as types from '../../common/redux/types';
import { savePrescription } from '../graphql/quries';
import client from '../../common/redux/apollo/client';

export function saveUserDetails(userId, name, email, photoUrl, phoneNumber, dob, address, lat, long, gender) {
    return (dispatch, getState) => {
        // console.log(`${userId}----${name}----${email}----${photoUrl}----${phoneNumber}----${dob}`)
        dispatch({type: types.USER_DETAILS_LOADING});
        client.mutate({
            mutation: savePrescription,
            variables: {id: userId, name: name, email: email, phoneNo: phoneNumber, imageUrl: photoUrl, dateOfBirth: dob, address: address, addressLat: lat, addressLong: long, gender: gender}
        }).then((resp) => {
            if (resp.data) {
                dispatch({type: types.USER_DETAILS_LOADED, data: resp.data.updateUser});
            }
            if(resp.errors) {
                 dispatch({ type: types.USER_DETAILS_ERROR, errors: resp.errors});
            }
        }).catch( (exception) => {
            dispatch({ type: types.EXCEPTION, exception: exception});
        });
    }
}