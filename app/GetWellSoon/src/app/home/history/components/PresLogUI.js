import React, {PureComponent} from "react";
import {View, Image, Text} from 'react-native';
import { basicStyles, basicCompStyles } from "../../../../common/styles/styleSheet";
import *  as generalConstants from '../../../../common/constants/generalConstants';

class PresLogUI extends PureComponent {

    render() {
        const {item} = this.props;
        let date = new Date(item.createdAt).toLocaleDateString('en-IN', {year: 'numeric' , month: 'long', day: 'numeric' })
        date = date.replace(" ", "-");
        return <View style={basicStyles.presSubItemContainer}>
            <View style={basicStyles.presSubImageContainer}>
                <Image style={[basicStyles.mediumImage]} source={{uri : item.url}}/>
            </View>
            <View style={basicStyles.presSubInfoContainer}>
                <Text style={[basicStyles.textSmallDark, basicCompStyles.defaultPadding]}>{item.action}</Text>
                <Text style={[basicStyles.textSmallDark, basicCompStyles.defaultPadding]}>{item.message == null ? "" : item.message}</Text>
            </View>
            <View style={basicStyles.presSubDateContainer}>
                <Text style={[basicStyles.textSmallDark, basicCompStyles.defaultPadding]}>{date}</Text>
            </View>
        </View>
    }
}

export default PresLogUI;