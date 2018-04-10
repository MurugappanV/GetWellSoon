import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import UserDetailUI from "../components/UserDetailUI";

class UserDetails extends PureComponent {
    static navigationOptions =  { 
        header: null
    }

    render() {
        return <UserDetailUI/>
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps)(UserDetails);