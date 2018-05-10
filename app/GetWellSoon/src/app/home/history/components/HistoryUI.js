import React, {PureComponent} from "react";
import {View, Image, Text} from 'react-native';
import { basicStyles, basicCompStyles } from "../../../../common/styles/styleSheet";
import *  as generalConstants from '../../../../common/constants/generalConstants';
import HistoryDataUI from "./HistoryDataUI";

class HistoryUI extends PureComponent {

    renderEmpty = (message) => {
        <View style={basicStyles.tabContainer}>
            <Image style={basicStyles.bigImage} source={require('../../../../../assets/images/empty.png')} />
            <Text style={[basicStyles.textSmall]}>{message}</Text>
        </View>
    }

    renderHistory = (props) => {
        const {prescriptionListStatus} = props
        switch(prescriptionListStatus) {
            case generalConstants.LOADED:
            case generalConstants.LOADING:
                <HistoryDataUI {...props}/>
                break
            case 0:
                this.renderEmpty("No orders yet")
                break
            case generalConstants.ERROR:
                this.renderEmpty("Sorry, some problem occured")
                break
        }
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