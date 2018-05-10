import React, {PureComponent} from "react";
import {View, Image, Text} from 'react-native';
import { basicStyles, basicCompStyles } from "../../../../common/styles/styleSheet";
import *  as generalConstants from '../../../../common/constants/generalConstants';

class HistoryDataUI extends PureComponent {

    render() {
        return <View style={basicStyles.tabContainer}>
            <Image style={basicStyles.bigImage} source={require('../../../../../assets/images/empty.png')} />
            <Text style={[basicStyles.textSmall]}>No orders yet</Text>
        </View>
    }
}

export default HistoryDataUI;