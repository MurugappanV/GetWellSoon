import React, {PureComponent} from "react";
import {View, Image, Text} from 'react-native';
import { basicStyles, basicCompStyles } from "../../../../common/styles/styleSheet";
import *  as generalConstants from '../../../../common/constants/generalConstants';
import colors from "../../../../common/constants/colors";

class PresLogUI extends PureComponent {

    render() {
        const {item} = this.props;
        let date = new Date(item.createdAt).toLocaleDateString('en-IN', {year: 'numeric' , month: 'long', day: 'numeric' })
        date = date.replace(" ", "-");
        return <View style={[basicStyles.presSubItemContainer, basicCompStyles.whiteBgColor, {borderRadius: 5, marginLeft: 30, marginRight: 10, marginBottom: 5, elevation: 5}]}>
            <View style={basicStyles.presSubInfoContainer}>
                <Text style={[basicStyles.textSmallerDark]}>{item.action}</Text>
                {!!item.message && <Text style={[basicStyles.textSmallerDark]}>{ "message : " + item.message}</Text>}
            </View>
            <View style={basicStyles.presSubDateContainer}>
                <Text style={[basicStyles.textSmallerDark]}>{date}</Text>
            </View>
        </View>
    }
}

export default PresLogUI;