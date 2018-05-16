import React, {PureComponent} from "react";
import {View, Image, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';
import { basicStyles, basicCompStyles, width20pc } from "../../../../common/styles/styleSheet";

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
            return <Image style={[basicStyles.profImage, basicCompStyles.defaultPadding, {borderRadius: width20pc}]} source={{uri : imageUrl}}/>
        } else {
            return <Image style={[basicStyles.profImage, basicCompStyles.defaultPadding, {borderRadius: width20pc}]} source={require('../../../../../assets/images/profile.png')}/>
        }
    }

    renderGenderImage = (gender) => {
        if(gender == "FEMALE") {
            return <Image style={[basicStyles.mediumImage, basicCompStyles.defaultMarginSmall]} source={require('../../../../../assets/images/female.png')}/>
        } else if(gender == "MALE") {
            return <Image style={[basicStyles.mediumImage, basicCompStyles.defaultMarginTB]} source={require('../../../../../assets/images/male.png')}/>
        } else {
            return <Image style={[basicStyles.mediumImage, basicCompStyles.defaultMarginSmall]} source={require('../../../../../assets/images/others.png')}/>
        }
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
    //userDetails.dateOfBirth userDetails.gender
    render() {
        let {navigation, userDetails} = this.props
        return <ScrollView  contentContainerStyle={basicStyles.scrollTabContainer}>
            {/* <ScrollView> */}
            {this.renderUserImage(userDetails.imageUrl)}
            <Text style={[basicStyles.textBig]}>{userDetails.name.toLowerCase().replace(/(^|\s)\S/g, l => l.toUpperCase())}</Text>
            <Text style={[basicStyles.textSmallerLink]}>{userDetails.email.toLowerCase()}</Text>
            <Text style={[basicStyles.textSmallerLink]}>{userDetails.phoneNo}</Text>
            <View style={[basicCompStyles.flexRowSaN, basicCompStyles.aliginSelfS]}>
                <View style={basicCompStyles.flexColumnNC}>
                    <Text style={[basicStyles.textSmall]}>{"Gender"}</Text>
                    {this.renderGenderImage(userDetails.gender)}
                </View>
                <View style={basicCompStyles.flexColumnNC}>
                    <Text style={[basicStyles.textSmall]}>{"Age"}</Text>
                    <Text style={[basicStyles.textBigger]}>{getAge(userDetails.dateOfBirth)}</Text>
                </View>
            </View>
            <Text style={[basicStyles.textSmall, basicCompStyles.aliginSelfS]}>{"Delivery Address"}</Text>
            <Text style={[basicStyles.textSmallDark, basicCompStyles.aliginSelfS]}>{userDetails.address}</Text>
            <TouchableOpacity style={[basicCompStyles.bgBaseColor, basicCompStyles.aliginSelfS, basicCompStyles.defaultPadding, basicCompStyles.smallSpacingMarginT, {height: 40, borderRadius: 20 }]} onPress={() => {navigation.navigate("Details")}} >
                <Text style={[basicStyles.textWhiteSmall, basicCompStyles.alignTextCenter]}>{"Edit"}</Text>
            </TouchableOpacity> 
            <TouchableOpacity onPress={this.signOut} > 
                <Text style={[basicStyles.textSmallerLink, basicCompStyles.aliginSelfC]}>{"Sign Out"}</Text>
            </TouchableOpacity>
            {/* <View style={[basicCompStyles.flexRowSaN, basicCompStyles.aliginSelfS]}>
                <View style={basicCompStyles.flexColumnNC}>
                    
                </View>
                <View style={basicCompStyles.flexColumnNC}>
                </View>
            </View> */}
            {/* </ScrollView> */}
        </ScrollView>
    }
}

export default ProfileUI;