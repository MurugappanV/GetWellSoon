import React, {PureComponent} from "react";
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { basicStyles , basicCompStyles , width25pc } from "../../../common/styles/styleSheet";
import colors from '../../../common/constants/colors';

const validateEmail = (emailInput) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    return reg.test(emailInput)
}

const today = new Date(); 
const dd = today.getDate(); 
const mm = today.getMonth()+1; //January is 0! 
const yyyy = today.getFullYear(); 
if(dd<10){dd='0'+dd} 
if(mm<10){mm='0'+mm} 
const todayStr = yyyy+"-"+mm+"-"+dd; 


export default class UserDetailUI extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {name: "", email: "", imageUrl: "", date:""};
    }

    saveManualEntry = () => {
        if(this.state.name.length == 0) {
            Toast.show("Please enter your name", Toast.LONG)
            this.refs.nameInput.focus(); 
        } else if (!validateEmail(this.state.email)) {
            Toast.show("Please enter valid email id", Toast.LONG)
            this.refs.emailInput.focus(); 
        } else if (this.state.date.length == 0) {
            Toast.show("Please select your birth date", Toast.LONG)
        } else {
            const dob = new Date(this.state.date);
            const dobStr = dob.toISOString();
            this.props.saveUserDetails(this.state.name, this.state.email, this.state.imageUrl, dobStr);
            // save in db
        }
    }

    setUserDetail = (name, email, photoUrl) => {
        this.setState({
            name: name, 
            email: email, 
            imageUrl: photoUrl
        })
    }

    render() {
        const { signOut, saveUserDetails } = this.props;
        return <ScrollView style={[basicCompStyles.fullSize, basicCompStyles.bgBaseColorLight, basicCompStyles.defaultPadding]}>
            <Text style={[basicStyles.textSmaller, basicCompStyles.alignTextCenter, basicCompStyles.smallSpacingMarginT]}>{"Congrats, Logged in successfully!!!"}</Text>
            <Text style={basicStyles.textBig}>{"User details"}</Text>
            <Image style={[basicStyles.bigImage, basicCompStyles.aliginSelfC, basicCompStyles.smallSpacingMarginT, {borderRadius: width25pc}]} source={require('../../../../assets/images/profile.png')}/>
            <Text style={[basicStyles.textSmaller, basicCompStyles.smallSpacingMarginT]}>{"User name"}</Text>
            <TextInput
                ref="nameInput"
                onSubmitEditing={(event) => { 
                    this.refs.emailInput.focus(); 
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
            <Text style={[basicStyles.textSmaller, basicCompStyles.smallSpacingMarginT]}>{"Email ID"}</Text>
            <TextInput
                ref="emailInput"
                // onSubmitEditing={this.saveManualEntry}
                returnKeyType={"done"}
                autoCorrect={false}
                underlineColorAndroid={colors.UNDERLINE_COLOR} 
                selectionColor={colors.CURSOR_COLOR}
                style={basicStyles.textInputSmall}
                onChangeText={value => this.setState({ email: value })}
                placeholder={"Email"}
                placeholderTextColor={colors.PLACEHOLDER_COLOR} 
                value={this.state.email}
            />
            <Text style={[basicStyles.textSmaller, basicCompStyles.smallSpacingMarginT]}>{"Date of birth"}</Text>
            <DatePicker
                style={[ basicCompStyles.marginBottom15, {borderWidth : 0, alignSelf: 'flex-start'}]}
                date={this.state.date}
                mode="date"
                placeholder="Date of birth"
                format="YYYY-MM-DD"
                maxDate={todayStr}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                // showIcon={false}
                customStyles={{
                    dateInput: {borderWidth: 0, marginLeft: 36, justifyContent: 'center'},
                    dateText: {color : colors.DARK_TEXT_COLOR},
                    placeholderText: {color : colors.PLACEHOLDER_COLOR},
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
            />
            <Text style={[basicStyles.textSmaller, basicCompStyles.smallSpacingMarginT]}>{"Address"}</Text>
            <DatePicker
                style={[ basicCompStyles.marginBottom15, {borderWidth : 0, alignSelf: 'flex-start'}]}
                date={this.state.date}
                mode="date"
                placeholder="Date of birth"
                format="YYYY-MM-DD"
                maxDate={todayStr}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                // showIcon={false}
                customStyles={{
                    dateInput: {borderWidth: 0, marginLeft: 36, justifyContent: 'center'},
                    dateText: {color : colors.DARK_TEXT_COLOR},
                    placeholderText: {color : colors.PLACEHOLDER_COLOR},
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
            />
            <TouchableOpacity style={[basicCompStyles.bgBaseColor, basicCompStyles.defaultPadding, basicCompStyles.defaultMarginTB, basicCompStyles.spacingMarginT, {height: 40, borderRadius: 20 }]} onPress={this.saveManualEntry} >
                <Text style={[basicStyles.textWhiteSmall, basicCompStyles.alignTextCenter]}>{"Save"}</Text>
            </TouchableOpacity> 
            <TouchableOpacity onPress={signOut} > 
                <Text style={[basicStyles.textSmallerLink, basicCompStyles.aliginSelfC, {paddingBottom: 10}]}>{"Sign Out"}</Text>
            </TouchableOpacity> 
        </ScrollView>
    }
}