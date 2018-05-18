import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking, Platform, Share  } from "react-native";
import CarouselView from '../../components/CarouselView';
import { basicStyles, fullWidth, fullHeight, contentFullHeight, basicCompStyles } from "../../StyleSheets/styles";
import * as Colors from "../../Constants/Colors";
import * as GeneralConstants from '../../Constants/GeneralConstants';
import * as IconName from '../../Constants/IconName';
import * as Sizes from '../../Constants/Sizes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { makePhoneCall, getDirections } from "../../utility/Communication";
import CustomTouchable from "../../components/CustomTouchable";
import AboutUsCommunication from "./AboutUsCommunication";

const address = `53, Ram Nagar,
Ganapathy,
Coimbatore - 641006.`
class AboutUsDetail extends PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        hotelDetails = this.props.hotelDetailsById
        return <View style={basicCompStyles.fullSize}>
            <CarouselView images={hotelDetails.hotelImageUrls} contentWidth={fullWidth}/>
            <View style={basicCompStyles.fullSize}>
                <View style={basicStyles.aboutUsHeader}>
                    <Text style={basicStyles.darkMediumHeaderText}>{hotelDetails.name}</Text>
                </View>
                <View style={[basicStyles.aboutUsContent, basicCompStyles.defaultPadding]}>
                    <Text style={[basicStyles.darkSmallText, basicCompStyles.defaultDarkBorderBottem, basicCompStyles.defaultPadding]}>{hotelDetails.hotelDetail.description}</Text>
                    <AboutUsCommunication style={basicCompStyles.defaultDarkBorderBottem} hotelDetail={hotelDetails.hotelDetail}/> 
                    <CustomTouchable style={[basicCompStyles.flexRow, basicCompStyles.Padding20, basicCompStyles.defaultDarkBorderBottem]} onPress={() => makePhoneCall(`${hotelDetails.hotelDetail.storePhoneNumber}`, false)}>
                            <Icon style={[basicStyles.darkMediumIcon, basicCompStyles.paddingLR10]} name={IconName.CALL_ICON_NAME}></Icon>
                            <Text style={[basicStyles.darkSmallText, basicCompStyles.paddingLR10]} >{hotelDetails.hotelDetail.storePhoneNumber}</Text>
                    </CustomTouchable>
                    <CustomTouchable style={[basicCompStyles.flexRow, basicCompStyles.Padding20]} onPress={() => getDirections(`Nakshatra+Collection,+Saravanampatty,,+Vinyakapuram,+Saravanampatty,+Coimbatore,+Tamil+Nadu+641035`)}>
                            <Icon style={[basicStyles.darkMediumIcon, basicCompStyles.paddingLR10]} name={IconName.LOCATION_ICON_NAME}></Icon>
                            <Text style={[basicStyles.darkSmallText, basicCompStyles.paddingLR10]} >{ address }</Text>
                    </CustomTouchable>
                </View>
            </View>
        </View>
    }
}

export default AboutUsDetail;