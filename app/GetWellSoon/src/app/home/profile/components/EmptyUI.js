import React, {PureComponent} from "react";
import {View, Image, Text, TouchableOpacity} from 'react-native';
import { basicStyles, basicCompStyles } from "../../../../common/styles/styleSheet";

class EmptyUI extends PureComponent {

    render() {
        let {navigate} = this.props.navigation
        return <View style={basicStyles.tabContainer}>
            <TouchableOpacity onPress={() => navigate("Login")} style={basicStyles.tabContainer}>
                <Image style={basicStyles.bigImage} source={require('../../../../../assets/images/user.png')} />
                <Text style={[basicStyles.textSmall]}>Click here to Login</Text>
            </TouchableOpacity>
        </View>
    }
}

export default EmptyUI;