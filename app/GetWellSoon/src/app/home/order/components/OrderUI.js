import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import {View, ScrollView, Text, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import { basicCompStyles, basicStyles } from "../../../../common/styles/styleSheet";
import * as generalConstants from "../../../../common/constants/generalConstants";
import { pickImage } from "../../../common/utils/imagePicker";
import colors from "../../../../common/constants/colors";
import ImageView from 'react-native-image-view';

class OrderUI extends PureComponent {

    constructor() {
        super()
        this.state = {isImageViewVisible : false, imageViewSrc: [{source: {uri: "https://firebasestorage.googleapis.com/v0/b/medscan-39c06.appspot.com/o/prescription%2FIMG_20180102_024138_674.jpg2018-04-25T18%3A32%3A35.309Z?alt=media&token=891d3f1a-fc79-43a1-92bd-ce713effabd6"},width: 806,height: 720,}]}
    }
    selectImage = () => {
        pickImage("Select Prescription", "prescription", this.props.setPresUrl, this.props.setUploadStatus);
    }

    viewImage = () => {
        this.setState({
            
            imageViewSrc: [{
                source: {
                    uri: this.props.prescriptionUrl,
                },
                width: 806,
                height: 720,
            }],
            isImageViewVisible : true,
        })
    }

    renderImage = (uploadStatus, prescriptionUrl) => {
        console.log("upload status", uploadStatus);
        if(uploadStatus == 0 || uploadStatus == generalConstants.ERROR) {
            return <TouchableOpacity style={{elevation: 10}} onPress={() => {
                this.props.clearPrescriptionImageUrl()
                this.selectImage()
            }}>
                <Image style={[basicStyles.bigImage]} source={require('../../../../../assets/images/photo.jpg')}/>
            </TouchableOpacity>
        } else if(uploadStatus == generalConstants.LOADED) {
            return <TouchableOpacity style={{elevation: 10}} onPress={this.viewImage}>
                <Image style={[basicStyles.bigImage]} source={{uri : prescriptionUrl}}/>
            </TouchableOpacity>
        } else {
            return <View style={[basicStyles.bigImage, basicCompStyles.flexColumnCC]}>
                <ActivityIndicator size="large" color={colors.PROGRESS_BAR_COLOR} />
                <Text style={[basicStyles.textSmallerLink, basicCompStyles.defaultPadding]}>{"Uploading image ..."}</Text>
            </View>
        }
    }

    renderButton = (uploadStatus) => {
        if(uploadStatus == 0 || uploadStatus == generalConstants.ERROR) {
            return <TouchableOpacity style={[basicCompStyles.bgBaseColor, basicCompStyles.defaultPadding, basicCompStyles.smallSpacingMarginT, {height: 40, borderRadius: 20, elevation: 10 }]} onPress={this.selectImage} >
                <Text style={[basicStyles.textWhiteSmall, basicCompStyles.alignTextCenter]}>{"  Select prescription  "}</Text>
            </TouchableOpacity>
        } else if(uploadStatus == generalConstants.LOADED) {
            return <View>
                <TouchableOpacity style={[basicCompStyles.bgBaseColor, basicCompStyles.defaultPadding, basicCompStyles.smallSpacingMarginT, {height: 40, borderRadius: 20, elevation: 10 }]} onPress={() => {
                        this.props.clearPrescription()
                        this.props.navigation.navigate("Confirmation")
                    }} >
                    <Text style={[basicStyles.textWhiteSmall, basicCompStyles.alignTextCenter]}>{"Order medicine"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={basicCompStyles.defaultPadding} onPress={() => {
                        this.props.clearPrescriptionImageUrl()
                        this.selectImage()
                    }} > 
                    <Text style={[basicStyles.textSmallerLink, basicCompStyles.aliginSelfC]}>{"Change prescription"}</Text>
                </TouchableOpacity>
            </View>
        } else {
            return <TouchableOpacity style={[basicCompStyles.bgBaseColor, basicCompStyles.defaultPadding, basicCompStyles.smallSpacingMarginT, {height: 40, borderRadius: 20 , elevation: 10}]} onPress={() => {}} >
                <Text style={[basicStyles.textWhiteSmall, basicCompStyles.alignTextCenter]}>{"Select prescription"}</Text>
            </TouchableOpacity>
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
                         {this.renderButton(presUploadStatus)}
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
            <ImageView
                images={this.state.imageViewSrc}
                imageIndex={0}
                isVisible={this.state.isImageViewVisible}
                renderFooter={(currentImage) => (<View><Text>Selected Prescription</Text></View>)}
            />
        </View>
    }
}

export default OrderUI;