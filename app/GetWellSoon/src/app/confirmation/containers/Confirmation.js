import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import ConfirmationUI from "../components/ConfirmationUI";
import { cfrPresDataActions } from "../actions";

class Confirmation extends PureComponent {
    static navigationOptions =  { 
        header: null
    }

    // constructor(props) {
    //     super(props)
    //     this.saveUserDetails = this.saveUserDetails.bind(this)
    //     if(!(props.userDetails && props.userDetails.phoneNo != null)) {
    //         props.getUserById(this.props.userId)
    //     } else {
    //         this.props.setProfilePicUrl(props.userDetails.imageUrl)
    //     }
    // }

    // componentWillReceiveProps(props) {
    //     if(props.userDetails && this.props.userDetails && (props.userDetails.imageUrl != this.props.userDetails.imageUrl)) {
    //         this.props.setProfilePicUrl(props.userDetails.imageUrl)
    //     }
    // }

    // saveUserDetails = (name, email, dob, address, lat, long, gender) => {
    //     lat = lat.length > 0 ? lat : null;
    //     long = long.length > 0 ? long : null;
    //     let phoneNo = this.props.userDetails && this.props.userDetails.phoneNo != null ? this.props.userDetails.phoneNo : this.props.phoneNumber;
    //     this.props.saveUserDetails(this.props.userId, name, email, this.props.profilePicUrl, phoneNo, dob, address, lat, long, gender)
    //     this.props.navigation.dispatch({
    //         routeName: 'Home',
    //         type: 'GoToRoute',
    //     })
    // }

    render() {
        // const {profilePicUrl, profilePicStatus, setProfilePicUrl, uploadingImageUrl} = this.props;
        return <ConfirmationUI {...this.props } />
    }
}

function mapStateToProps(state) {
    return {
        prescriptionUrl: state.prescriptionUrl,
        // profilePicStatus: state.profilePicUploadStatus,
        // userId: state.userId,
        // phoneNumber: state.userRegisteredPhoneNumber,
        // userDetailLoadingStatus: state.userProfileDetail.userDetailLoadingStatus,
        userDetails: state.userProfileDetail.userDetails,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(cfrPresDataActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Confirmation);