import React, {PureComponent} from "react";
import {View, Image, Text} from 'react-native';
import { basicStyles, basicCompStyles } from "../../../../common/styles/styleSheet";
import *  as generalConstants from '../../../../common/constants/generalConstants';
import HistoryDataUI from "./HistoryDataUI";

class HistoryUI extends PureComponent {

    renderEmpty = (message) => {
        return <View style={basicStyles.tabContainer}>
            <Image style={basicStyles.bigImage} source={require('../../../../../assets/images/empty.png')} />
            <Text style={[basicStyles.textSmall]}>{message}</Text>
        </View>
    }

    renderHistory = (props) => {
        const {prescriptionListStatus} = props
        switch(prescriptionListStatus) {
            case generalConstants.LOADED:
            case generalConstants.LOADING:
                return <HistoryDataUI {...props}/>
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