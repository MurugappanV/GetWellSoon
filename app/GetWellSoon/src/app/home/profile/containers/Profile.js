import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import ProfileUI from "../components/ProfileUI";

class Profile extends PureComponent {

    render() {
        return <ProfileUI/>
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps)(Profile);