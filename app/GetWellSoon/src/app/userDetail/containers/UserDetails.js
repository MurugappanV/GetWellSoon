import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import UserDetailUI from "../components/UserDetailUI";
import { userDetDataActions } from "../actions";

class UserDetails extends PureComponent {
    static navigationOptions =  { 
        header: null
    }

    render() {
        // const {profilePicUrl, profilePicStatus, setProfilePicUrl, uploadingImageUrl} = this.props;
        return <UserDetailUI {...this.props} />
    }
}

function mapStateToProps(state) {
    return {
        profilePicUrl: state.profilePicUrl,
        profilePicStatus: state.profilePicUploadStatus
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(userDetDataActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);