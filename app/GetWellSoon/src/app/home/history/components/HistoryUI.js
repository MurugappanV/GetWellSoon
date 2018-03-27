import React, {PureComponent} from "react";
import {View, Image, Text} from 'react-native';
import { basicStyles, basicCompStyles } from "../../../../common/styles/styleSheet";

class HistoryUI extends PureComponent {

    render() {
        return <View style={basicStyles.tabContainer}>
            <Image style={basicStyles.bigImage} source={require('../../../../../assets/images/empty.png')} />
            <Text style={[basicStyles.textSmall, {paddingTop: 20}]}>No orders yet</Text>
        </View>
    }
}

export default HistoryUI;