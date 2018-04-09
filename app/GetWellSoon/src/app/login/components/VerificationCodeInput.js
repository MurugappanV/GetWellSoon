import React, { PureComponent } from 'react';
import { View, Button, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { basicCompStyles, basicStyles } from '../../../common/styles/styleSheet';
import colors from '../../../common/constants/colors';

export default class VerificationCodeInput extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {codeInput: ''};
    }

    render() {
        return (
            <KeyboardAvoidingView style={[basicCompStyles.fullSize, basicCompStyles.bgBaseColorLight, basicCompStyles.defaultPadding]} behavior="padding" >
                <Text style={basicStyles.textBig}>OTP verification</Text>
                <View style={[basicCompStyles.fullSize, basicCompStyles.flexColumnCN]}>
                    <Image style={[basicStyles.bigImage, basicCompStyles.aliginSelfC]} source={require('../../../../assets/images/send.png')}/>
                    <Text style={[basicStyles.textSmall, {paddingLeft: 5}]}>Please enter your received OTP number</Text>
                    <TextInput
                        onSubmitEditing={() => this.props.confirmCode(this.state.codeInput)}
                        underlineColorAndroid={colors.UNDERLINE_COLOR} 
                        selectionColor={colors.CURSOR_COLOR}
                        style={basicStyles.textInputSmall}
                        onChangeText={value => this.setState({ codeInput: value })}
                        placeholder={"OTP NUMBER"}
                        placeholderTextColor={colors.PLACEHOLDER_COLOR} 
                        value={this.state.codeInput}
                    />
                    <TouchableOpacity onPress={this.props.resendCode} >
                        <Text style={[basicStyles.textSmaller, basicCompStyles.alignTextRight]}>Resend OTP</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={[basicCompStyles.bgBaseColor, basicCompStyles.defaultPadding, basicCompStyles.defaultMarginTB, {height: 40, borderRadius: 20 }]} onPress={() => this.props.confirmCode(this.state.codeInput)} >
                    <Text style={[basicStyles.textWhiteSmall, basicCompStyles.alignTextCenter]}>Confirm OTP</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.changeNumber} >
                    <Text style={[basicStyles.textSmaller, basicCompStyles.aliginSelfC]}>Need to change phone number?</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
     
}