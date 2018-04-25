import React, { PureComponent } from "react";
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import { StatusBar, View } from "react-native";
import { basicStyles } from "../../../common/styles/styleSheet";
import BaseNavigator from "../components/BaseNavigator";
import { startUpDataActions } from "../actions";

class AppContainer extends PureComponent {
    constructor(props) {
        super(props);
        props.setUserIdStartUp();
    }

    render() {
        return <View style={basicStyles.deviceFullView}>
            <StatusBar
                backgroundColor="rgba(0, 0, 0, 0.2)"
                barStyle="light-content"
                translucent={true}
            />
            <BaseNavigator/>
        </View>        
    }    
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(startUpDataActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);