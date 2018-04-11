import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import {View, ScrollView, Text, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import { basicCompStyles, basicStyles } from "../../../../common/styles/styleSheet";
import * as generalConstants from "../../../../common/constants/generalConstants";
import { pickImage } from "../../../common/utils/imagePicker";
import colors from "../../../../common/constants/colors";

class OrderUI extends PureComponent {
    selectImage = () => {
        pickImage("Select Prescription", "prescription", this.props.setPresUrl, this.props.setUploadStatus);
    }

    renderImage = (uploadStatus, prescriptionUrl) => {
        console.log("upload status", uploadStatus);
        if(uploadStatus == 0 || uploadStatus == generalConstants.ERROR) {
            return <TouchableOpacity onPress={this.selectImage}>
                <Image style={[basicStyles.bigImage]} source={require('../../../../../assets/images/photo.png')}/>
            </TouchableOpacity>
        } else if(uploadStatus == generalConstants.LOADED) {
            return <TouchableOpacity onPress={this.selectImage}>
                <Image style={[basicStyles.bigImage]} source={{uri : prescriptionUrl}}/>
            </TouchableOpacity>
        } else {
            return <View style={[basicStyles.bigImage, basicCompStyles.flexColumnCC]}>
                <ActivityIndicator size="large" color={colors.PROGRESS_BAR_COLOR} />
                <Text style={[basicStyles.textSmallerLink, basicCompStyles.defaultPadding]}>{"Uploading image ..."}</Text>
            </View>
        }
    }

    render() {
        const {prescriptionUrl, presUploadStatus} = this.props;
        return <View style={basicStyles.tabContainer}>
            <ScrollView style={[basicCompStyles.fullSize]}>
                <View style={[basicStyles.tabContainerInsideView]}>
                    <Text style={basicStyles.textBig}>Buying medicine is now easier than ever!!!</Text>
                    <View style={[basicCompStyles.flexColumnCC, basicCompStyles.fullSize]}>
                        {this.renderImage(presUploadStatus, prescriptionUrl)}
                        {/* <TouchableOpacity onPress={this.selectImage}>
                            <Image style={[basicStyles.bigImage]} source={require('../../../../../assets/images/photo.png')}/>
                        </TouchableOpacity> */}
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