import React, {PureComponent} from "react";
import {View, Image, Text} from 'react-native';
import CheckBox from 'react-native-check-box';
import colors from "../../../common/constants/colors";
import { basicStyles, basicCompStyles } from "../../../common/styles/styleSheet";

export default class ConfirmationUI extends PureComponent {

    constructor(props) {
        super(props);
        let userDetails = props.userDetails;
        if(userDetails && userDetails.phoneNo != null) {
            this.state = {
                name: userDetails.name,  
                phoneNo: userDetails.phoneNo,
                deliveryPhoneNo: userDetails.phoneNo, 
                address: userDetails.address,
                needPriceConfirmation: true,
                message: ""
            }
        } else {
            this.state = {name: "", phoneNo: "",deliveryPhoneNo: "", address: "", needPriceConfirmation: true, message: ""}
        }
    }

    savePrescription = () => {
        if(this.state.name.length == 0) {
            Toast.show("Please enter delivery name", Toast.LONG)
            this.refs.nameInput.focus(); 
        } else if(this.state.deliveryPhoneNo.length == 0) {
            Toast.show("Please enter delivery phone number", Toast.LONG)
            this.refs.nameInput.focus(); 
        } else if (this.state.address.length == 0) {
            Toast.show("Please enter delivery address", Toast.LONG)
            this.refs.addressInput.focus()
        } else {
            this.props.saveUserDetails(this.state.name, this.state.email, dobStr, this.state.address, this.state.lat, this.state.long, gender);
            // save in db
        }
    }

    render() {
        const { prescriptionUrl} = this.props;
        return <View style={[basicCompStyles.fullSize, basicCompStyles.bgBaseColorLight, basicCompStyles.defaultPadding]}>
            <Text style={basicStyles.textBig}>{"User details"}</Text>
            <ScrollView style={basicCompStyles.fullSize} ref="scroll">
                <Image style={[basicStyles.bigImage, basicCompStyles.aliginSelfC, basicCompStyles.smallSpacingMarginT]} source={{uri : prescriptionUrl}}/>
                <Text style={[basicStyles.textSmaller, basicCompStyles.smallSpacingMarginT]}>{"Name"}</Text>
                <TextInput
                    ref="nameInput"
                    onSubmitEditing={(event) => { 
                        this.refs.phoneInput.focus(); 
                    }}
                    returnKeyType={"next"}
                    autoCorrect={false}
                    underlineColorAndroid={colors.UNDERLINE_COLOR} 
                    selectionColor={colors.CURSOR_COLOR}
                    style={basicStyles.textInputSmall}
                    onChangeText={value => this.setState({ name : value })}
                    placeholder={"Name"}
                    placeholderTextColor={colors.PLACEHOLDER_COLOR} 
                    value={this.state.name}
                />
                <Text style={[basicStyles.textSmaller, basicCompStyles.smallSpacingMarginT]}>{`User phone number : ${this.state.phoneNo}`}</Text>
                <Text style={[basicStyles.textSmaller, basicCompStyles.smallSpacingMarginT]}>{"Delivery phone number"}</Text>
                <TextInput
                    ref="phoneInput"
                    onSubmitEditing={(event) => { 
                        this.refs.addressInput.focus(); 
                    }}
                    returnKeyType={"next"}
                    autoCorrect={false}
                    underlineColorAndroid={colors.UNDERLINE_COLOR} 
                    selectionColor={colors.CURSOR_COLOR}
                    style={basicStyles.textInputSmall}
                    onChangeText={value => this.setState({ deliveryPhoneNo : value })}
                    placeholder={"Name"}
                    placeholderTextColor={colors.PLACEHOLDER_COLOR} 
                    value={this.state.deliveryPhoneNo}
                />
                <Text style={[basicStyles.textSmaller, basicCompStyles.smallSpacingMarginT]}>{"Delivery address"}</Text>
                <TextInput 
                    style={[basicStyles.textAreaSmall, {textAlignVertical: 'top', borderWidth: 1, borderColor: colors.UNDERLINE_COLOR, marginTop: 5}]} 
                    multiline={true} 
                    numberOfLines={4} 
                    onChangeText={(address) => this.setState({address})} 
                    value={this.state.address}
                    ref="addressInput"
                    onSubmitEditing={(event) => { 
                        this.refs.messageInput.focus(); 
                    }}
                    returnKeyType={"done"}
                    autoCorrect={false}
                    underlineColorAndroid={'transparent'} 
                    selectionColor={colors.CURSOR_COLOR}
                    placeholder={"Delivery address..."}
                    placeholderTextColor={colors.PLACEHOLDER_COLOR} 
                />
                <Text style={[basicStyles.textSmaller, basicCompStyles.smallSpacingMarginT]}>{"Delivery message note"}</Text>
                <TextInput 
                    style={[basicStyles.textAreaSmall, {textAlignVertical: 'top', borderWidth: 1, borderColor: colors.UNDERLINE_COLOR, marginTop: 5}]} 
                    multiline={true} 
                    numberOfLines={4} 
                    onChangeText={(message) => this.setState({message})} 
                    value={this.state.message}
                    ref="messageInput"
                    returnKeyType={"done"}
                    autoCorrect={false}
                    underlineColorAndroid={'transparent'} 
                    selectionColor={colors.CURSOR_COLOR}
                    placeholder={"Additional message for delivery..."}
                    placeholderTextColor={colors.PLACEHOLDER_COLOR} 
                />
                <CheckBox style={{flex: 1, padding: 10}} onClick={()=> {this.setState({needPriceConfirmation: !this.state.needPriceConfirmation})}} isChecked={this.state.needPriceConfirmation} leftText={"Need price confirmation through call"} checkBoxColor={colors.UNDERLINE_COLOR}/>;
            </ScrollView>
            <TouchableOpacity style={[basicCompStyles.bgBaseColor, basicCompStyles.defaultPadding, basicCompStyles.defaultMarginTB, basicCompStyles.spacingMarginT, {height: 40, borderRadius: 20 }]} onPress={this.savePrescription} >
                <Text style={[basicStyles.textWhiteSmall, basicCompStyles.alignTextCenter]}>{"Confirm Order"}</Text>
            </TouchableOpacity> 
        </View>
    }
}