import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import {View} from 'react-native';

class Login extends PureComponent {

    render() {
        return <View></View>
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps)(Login);