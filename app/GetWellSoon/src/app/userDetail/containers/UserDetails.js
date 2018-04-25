import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import firebase from 'react-native-firebase';
import UserDetailUI from "../components/UserDetailUI";
import { userDetDataActions } from "../actions";

class UserDetails extends PureComponent {
    static navigationOptions =  { 
        header: null
    }

    constructor(props) {
        super(props)
        this.saveUserDetails = this.saveUserDetails.bind(this)
        if(!(props.userDetails && props.userDetails.phoneNo != null)) {
            props.getUserById(this.props.userId)
        }
    }

    // componentWillReceiveProps(props) {
    //     if(props.userDetails.phoneNo != null) {
    //         props.navigation.dispatch({
    //             routeName: 'Home',
    //             type: 'GoToRoute',
    //         })
    //     }
    // }

    saveUserDetails = (name, email, photoUrl, dob, address, lat, long, gender) => {
        lat = lat.length > 0 ? lat : null;
        long = long.length > 0 ? long : null;
        photoUrl = photoUrl.length > 0 ? photoUrl : null;
        this.props.saveUserDetails(this.props.userId, name, email, photoUrl, this.props.phoneNumber, dob, address, lat, long, gender)
        this.props.navigation.dispatch({
            routeName: 'Home',
            type: 'GoToRoute',
        })
    }

    render() {
        // const {profilePicUrl, profilePicStatus, setProfilePicUrl, uploadingImageUrl} = this.props;
        return <UserDetailUI {...this.props } saveUserDetails={this.saveUserDetails}/>
    }
}

function mapStateToProps(state) {
    return {
        profilePicUrl: state.profilePicUrl,
        profilePicStatus: state.profilePicUploadStatus,
        userId: state.userId,
        phoneNumber: state.userRegisteredPhoneNumber,
        userDetailLoadingStatus: state.userProfileDetail.userDetailLoadingStatus,
        userDetails: state.userProfileDetail.userDetails,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(userDetDataActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);