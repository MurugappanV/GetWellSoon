import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import { basicCompStyles, basicStyles } from "../../../../common/styles/styleSheet";
import { pickImage } from "../utils/imagePicker";

class OrderUI extends PureComponent {

    render() {
        return <View style={basicStyles.tabContainer}>
            <ScrollView style={[basicCompStyles.fullSize]}>
                <View style={[basicStyles.tabContainerInsideView]}>
                    <Text style={[basicStyles.textBig, {textAlign: 'center'}]}>Buying medicine is now easier than ever!!!</Text>
                    <View style={[basicCompStyles.flexColumnCC, basicCompStyles.fullSize]}>
                        <TouchableOpacity onPress={pickImage}>
                            <Image style={[basicStyles.bigImage]} source={require('../../../../../assets/images/photo.png')}/>
                        </TouchableOpacity>
                        {/* <TouchableOpacity>
                            <Text></Text>
                        </TouchableOpacity> */}
                        <Text style={[basicStyles.textSmall]}>Just take a photo of your prescription and send to us</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    }
}

export default OrderUI;