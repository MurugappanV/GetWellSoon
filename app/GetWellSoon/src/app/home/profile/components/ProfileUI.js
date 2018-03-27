import React, {PureComponent} from "react";
import {View, Image, Text} from 'react-native';
import { basicStyles, basicCompStyles } from "../../../../common/styles/styleSheet";

class ProfileUI extends PureComponent {

    render() {
        return <View style={basicStyles.tabContainer}>
            <Image style={basicStyles.bigImage} source={require('../../../../../assets/images/user.png')} />
            <Text style={[basicStyles.textSmall, {paddingTop: 20}]}>Click here to Login</Text>
        </View>
    }
}

export default ProfileUI;