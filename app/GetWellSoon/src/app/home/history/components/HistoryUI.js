import React, {PureComponent} from "react";
import {View, Image, Text, ActivityIndicator} from 'react-native';
import { basicStyles, basicCompStyles } from "../../../../common/styles/styleSheet";
import *  as generalConstants from '../../../../common/constants/generalConstants';
import colors from "../../../../common/constants/colors";
import HistoryDataUI from "./HistoryDataUI";

class HistoryUI extends PureComponent {

    renderEmpty = (message) => {
        return <View style={basicStyles.tabContainer}>
            <Image style={basicStyles.bigImage} source={require('../../../../../assets/images/empty.png')} />
            <Text style={[basicStyles.textSmall]}>{message}</Text>
        </View>
    }

    renderLoading = (message) => {
        return <View style={basicStyles.tabContainer}>
            <ActivityIndicator size="large" color={colors.PROGRESS_BAR_COLOR} />
            <Text style={[basicStyles.textSmallerLink, basicCompStyles.defaultPadding]}>{message}</Text>
        </View>
    }

    renderHistory = (props) => {
        const {prescriptionListStatus, prescriptionData} = props
        switch(prescriptionListStatus) {
            case generalConstants.LOADED:
                if(prescriptionData.prescriptionList != null && prescriptionData.prescriptionList.length > 0) {
                    return <HistoryDataUI {...props}/>
                } else {
                    return this.renderEmpty("No orders yet")
                }
            case generalConstants.LOADING:
                return this.renderLoading("Your prescriptions loading...")
            case 0:
                return this.renderEmpty("No orders yet")
            case generalConstants.ERROR:
                return this.renderEmpty("Sorry, some problem occured")
        }
        // return <View></View>
    }

    render() {
        return this.renderHistory(this.props)
    }
}

export default HistoryUI;


        // if(prescriptionListStatus == ) {
        //     this.renderEmpty("Sorry, some problem occured")
        // } else if(prescriptionListStatus == generalConstants.LOADING) {
        //     this.renderEmpty("Sorry, some problem occured")
        // } else if(prescriptionListStatus == 0) {
        // } else if(prescriptionListStatus == generalConstants.ERROR) {
        // }