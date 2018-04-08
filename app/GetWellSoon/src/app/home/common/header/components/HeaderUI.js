import React, {PureComponent} from "react";
import {View, TouchableOpacity, Image, Text} from 'react-native';
import { basicStyles, basicCompStyles } from "../../../../../common/styles/styleSheet";

class HeaderUI extends PureComponent {

    render() {
        let {navigate} = this.props.navigation
        return <View style={basicStyles.homeHeaderContainer}>
            <View style={basicStyles.homeHeaderInnerContainer}>
                <TouchableOpacity onPress={() => navigate("AboutUs")}>
                    <Image style={basicStyles.headerImage} source={require('../../../../../../assets/images/logo.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={basicStyles.headerTitle} onPress={() => navigate("AboutUs")}>
                    <Text style={basicStyles.textWhiteBig}>G
                        <Text style={basicStyles.textWhiteSmall}>ET WELL SOON</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    }
}

export default HeaderUI;