import React, {PureComponent} from "react";
import {View, Image, Text, TouchableOpacity} from 'react-native';
import { basicStyles, basicCompStyles } from "../../../common/styles/styleSheet";
import *  as generalConstants from '../../../common/constants/generalConstants';

class SuccesErr extends PureComponent {

    constructor(props) {
        super(props);
        if(props.savePresStatus == generalConstants.LOADED) {
            props.clearPrescriptionUrl()
        }
    }

    renderImage = (status) => {
        if(status == generalConstants.LOADED) {
            return <Image style={basicStyles.bigImage} source={require('../../../../assets/images/empty.png')} />
        } else {
            return <Image style={basicStyles.bigImage} source={require('../../../../assets/images/empty.png')} />
        }
    }

    renderLabel = (status) => {
        if(status == generalConstants.LOADED) {
            return <Text style={[basicStyles.textSmall]}>Order placed successfully</Text>
        } else {
            return <Text style={[basicStyles.textSmall]}>Some problem occured, contact pharmacy</Text>
        }
    }

    render() {
        const {savePresStatus} = this.props
        return <View style={basicStyles.tabContainer}>
            {this.renderImage(savePresStatus)}
            {this.renderLabel(savePresStatus)}
            <TouchableOpacity style={[basicCompStyles.bgBaseColor, basicCompStyles.defaultPadding, basicCompStyles.defaultMarginTB, basicCompStyles.spacingMarginT, {height: 40, borderRadius: 20 }]} onPress={() => this.props.navigation.goBack()} >
                <Text style={[basicStyles.textWhiteSmall, basicCompStyles.alignTextCenter]}>{"Go back"}</Text>
            </TouchableOpacity> 
        </View>
    }
}

export default SuccesErr;