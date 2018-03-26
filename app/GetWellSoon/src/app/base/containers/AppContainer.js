import React, { PureComponent } from "react";
import { StatusBar, View } from "react-native";
import { basicStyles } from "../../../common/styles/styleSheet";
import BaseNavigator from "../components/BaseNavigator";

class AppContainer extends PureComponent {

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

export default AppContainer;