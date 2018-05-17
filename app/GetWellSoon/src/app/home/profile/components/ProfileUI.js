import React, {PureComponent} from "react";
import {View, Image, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';
import { basicStyles, basicCompStyles, width20pc, width40pc } from "../../../../common/styles/styleSheet";

function getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}



class ProfileUI extends PureComponent {

    renderUserImage = (imageUrl) => {
        if(imageUrl && imageUrl.length > 0) {
            return <Image style={[ basicCompStyles.defaultPadding, {borderRadius: 55, width: 110, height: 110}]} source={{uri : imageUrl}}/>
        } else {
            return <Image style={[ basicCompStyles.defaultPadding, {borderRadius: 55, width: 110, height: 110}]} source={require('../../../../../assets/images/profile.png')}/>
        }
    }

    renderGenderImage = (gender) => {
        // if(gender == "FEMALE") {
        //     return <Image style={[basicStyles.mediumImage, basicCompStyles.defaultMarginSmall]} source={require('../../../../../assets/images/female.png')}/>
        // } else if(gender == "MALE") {
        //     return <Image style={[basicStyles.mediumImage, basicCompStyles.defaultMarginTB]} source={require('../../../../../assets/images/male.png')}/>
        // } else {
            return <Image style={[basicStyles.mediumImage, basicCompStyles.defaultMarginSmall]} source={require('../../../../../assets/images/gender.png')}/>
        // }
    }

    signOut = () => {
        Alert.alert(
            'Confirmation',
            `Do you want to Sign out ?`,
            [
              {text: 'No', onPress: () => {}},
              {text: 'Yes', onPress: () => {this.props.navigation.navigate("Login", {isSignOut: true})}},
            ],
            { cancelable: true }
        )
    }
    //userDetails.dateOfBirth userDetails.gender elevation: 10,
    render() {
        let {navigation, userDetails} = this.props
        return <View style={basicStyles.tabContainer}>
            <ScrollView  contentContainerStyle={basicStyles.scrollTabContainer}>

                <View style={[basicStyles.deviceFullWidth, basicCompStyles.flexColumnCN, {height: 110, marginBottom: 20}]}>
                    <View style={[basicCompStyles.flexColumnCC, {backgroundColor: 'white', borderRadius: 10, elevation: 10, marginLeft: 60, paddingLeft: 50, paddingTop: 10, paddingBottom: 10, marginRight:10,  alignSelf: 'stretch'}]}>
                        <Text ellipsizeMode={'tail'} numberOfLines={1} style={[basicStyles.textBigSimple]}>{userDetails.name.toLowerCase().replace(/(^|\s)\S/g, l => l.toUpperCase())}</Text>
                        <Text ellipsizeMode={'tail'} numberOfLines={1} style={[basicStyles.textSmallerLink]}>{userDetails.email.toLowerCase()}</Text>
                        <Text ellipsizeMode={'tail'} numberOfLines={1} style={[basicStyles.textSmallerLink]}>{userDetails.phoneNo}</Text>
                    </View>
                    <View style={{position: 'absolute',elevation: 20, marginLeft: 10}}>
                        {this.renderUserImage(userDetails.imageUrl)}
                    </View>
                </View>
                <View style={[basicCompStyles.flexRowNC, basicCompStyles.aliginSelfS, basicCompStyles.defaultPadding]}>
                    {this.renderGenderImage(userDetails.gender)}
                    <View style={[basicCompStyles.flexColumnNC, {paddingLeft: 10}]}>
                        <Text style={[basicStyles.textSmallSimple, basicCompStyles.aliginSelfS]}>{"Gender"}</Text>
                        <Text style={[basicStyles.textSmallDark, basicCompStyles.aliginSelfS]}>{userDetails.gender}</Text>
                    </View>
                </View>
                <View style={[basicCompStyles.flexRowNC, basicCompStyles.aliginSelfS, basicCompStyles.defaultPadding]}>
                    <Image style={[basicStyles.mediumImage, basicCompStyles.defaultMarginSmall]} source={require('../../../../../assets/images/age.png')}/>
                    <View style={[basicCompStyles.flexColumnNC, {paddingLeft: 10}]}>
                        <Text style={[basicStyles.textSmallSimple, basicCompStyles.aliginSelfS]}>{"Age"}</Text>
                        <Text style={[basicStyles.textSmallDark, basicCompStyles.aliginSelfS]}>{getAge(userDetails.dateOfBirth)}</Text>
                    </View>
                </View>
                <View style={[basicCompStyles.flexRowNC, basicCompStyles.aliginSelfS, basicCompStyles.defaultPadding]}>
                    <Image style={[basicStyles.mediumImage, basicCompStyles.defaultMarginSmall]} source={require('../../../../../assets/images/place.png')}/>
                    <View style={[basicCompStyles.flexColumnNC, {paddingLeft: 10}]}>
                        <Text style={[basicStyles.textSmallSimple, basicCompStyles.aliginSelfS]}>{"Delivery Address"}</Text>
                        <Text style={[basicStyles.textSmallDark, basicCompStyles.aliginSelfS]}>{userDetails.address}</Text>
                    </View>
                </View>
                <TouchableOpacity style={[basicCompStyles.bgBaseColor, basicCompStyles.aliginSelfS, basicCompStyles.defaultPadding, basicCompStyles.smallSpacingMarginT, {height: 40, borderRadius: 20 }]} onPress={() => {navigation.navigate("Details")}} >
                    <Text style={[basicStyles.textWhiteSmall, basicCompStyles.alignTextCenter]}>{"Edit"}</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={this.signOut} style={{paddingTop: 10}}> 
                    <Text style={[basicStyles.textSmallerLink, basicCompStyles.aliginSelfC]}>{"Sign Out"}</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    }
}

export default ProfileUI;

                // {/* <ScrollView> */}
                //                 {/* <View style={[basicCompStyles.flexRowSaN, basicCompStyles.aliginSelfS]}>
                //     <View style={basicCompStyles.flexColumnNC}>
                        
                //     </View>
                //     <View style={basicCompStyles.flexColumnNC}>
                //     </View>
                // </View> */}
                // {/* </ScrollView> */}