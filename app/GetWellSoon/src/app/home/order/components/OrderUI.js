import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import { basicCompStyles, basicStyles } from "../../../../common/styles/styleSheet";

class OrderUI extends PureComponent {

    render() {
        return <View style={basicStyles.tabContainer}>
            <ScrollView style={[basicCompStyles.fullSize]}>
                <View style={[basicCompStyles.flexColumnNC, {padding: 20}]}>
                    <Text style={[basicStyles.textBig, {textAlign: 'center'}]}>Buying medicine is now easier than ever!!!</Text>
                    <Image style={basicStyles.bigImage} source={require('../../../../../assets/images/photo.png')}/>
                    <TouchableOpacity>
                        <Text></Text>
                    </TouchableOpacity>
                    <Text style={basicStyles.textSmall}>Just take photo of prescription and send to us</Text>
                </View>
            </ScrollView>
        </View>
    }
}

export default OrderUI;