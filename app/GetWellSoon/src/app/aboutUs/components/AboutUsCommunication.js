import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking, Platform, Share  } from "react-native";
import { basicStyles, fullWidth, fullHeight, contentFullHeight, basicCompStyles } from "../../StyleSheets/styles";
import * as Colors from "../../Constants/Colors";
import * as GeneralConstants from '../../Constants/GeneralConstants';
import * as IconName from '../../Constants/IconName';
import * as Sizes from '../../Constants/Sizes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { makePhoneCall , getDirections } from "../../utility/Communication";
import CustomTouchable from "../../components/CustomTouchable";

class AboutUsCommunication extends PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        hotelDetail = this.props.hotelDetail
        return <View style={[basicCompStyles.flexRow, this.props.style]}>
            <CustomTouchable style={[basicStyles.fullFlexColumnCCPad10]} onPress={() => makePhoneCall(`${hotelDetail.storePhoneNumber}`, false)}>
                    <Icon style={basicStyles.darkDefaultIcon} name={IconName.CALL_ICON_NAME}></Icon>
                    <Text style={basicStyles.darkSmallText}>{'CALL'}</Text>
            </CustomTouchable>
            <CustomTouchable style={[basicStyles.fullFlexColumnCCPad10]} onPress={() => getDirections(`Nakshatra+Collection,+Saravanampatty,,+Vinyakapuram,+Saravanampatty,+Coimbatore,+Tamil+Nadu+641035`)}>
                    <Icon style={basicStyles.darkDefaultIcon} name={IconName.NAVIGATE_ICON_NAME}></Icon>
                    <Text style={basicStyles.darkSmallText}>{'DIRECTIONS'}</Text>
            </CustomTouchable>
            <CustomTouchable style={[basicStyles.fullFlexColumnCCPad10]} onPress={() => Share.share( { message : 'Checkout TasteE app on playstore, Click on the following link..', title : 'Share your TasteE'})}>
                    <Icon style={basicStyles.darkDefaultIcon} name={IconName.SHARE_ICON_NAME}></Icon>
                    <Text style={basicStyles.darkSmallText}>{'SHARE'}</Text>
            </CustomTouchable>
        </View>
    }
}

export default AboutUsCommunication;