import React, {PureComponent} from "react";
import {View, Image, Text, FlatList, TouchableOpacity} from 'react-native';
import { basicStyles, basicCompStyles } from "../../../../common/styles/styleSheet";
import PresLogUI from "./PresLogUI";

class PresLogListUI extends PureComponent {

    renderBill = (imageUrl) => {
        if(imageUrl != null) {
            return <Image style={[basicStyles.displayImage]} source={{uri : data.imageUrl}}/>
        } else {
            return <Image style={[basicStyles.displayImage]} source={require('../../../../../assets/images/billPlaceHolder.png')}/>
        }
    }

    // renderCancel = (status) => {

    // }

    render() {
        const data = this.props.title;
        return <View>
            <View style={[basicStyles.presSubItemContainer, basicCompStyles.whiteBgColor, {borderRadius: 5, marginLeft: 30, marginRight: 10, marginBottom: 5, elevation: 5}]}>
                <View style={[basicStyles.presSubInfoContainer, {flex: 1}]}>
                    <Text style={[basicStyles.textSmallerDark]}>{"Delivery details"}</Text>
                    <Text style={[basicStyles.textSmaller]}>{data.deliveryName}</Text>
                    <Text style={[basicStyles.textSmaller]}>{data.deliveryAddress}</Text>
                    <Text style={[basicStyles.textSmaller]}>{data.deliveryPhoneNumber}</Text>
                </View>
                <View style={[basicStyles.presSubDateContainer, {flex: 1}]}>
                    <View style={basicCompStyles.flexRowSaN}>
                        <Image style={[basicStyles.displayImage]} source={{uri : data.prescriptionUrl}}/>
                        {this.renderBill(data.billUrl)}
                    </View>
                    <View style={[basicCompStyles.flexRowNC, {flex: 1}]}>
                        <TouchableOpacity style={[basicCompStyles.bgBaseColor, {margin: 5, marginLeft: 20, marginRight: 20, padding: 5, height: 30, borderRadius: 20, elevation: 10, flex: 1}]} onPress={() => {}} >
                            <Text style={[basicStyles.textWhiteSmaller, basicCompStyles.alignTextCenter]}>{"  Cancel  "}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <FlatList 
                key={data.billUrl}
                listKey={data.billUrl}
                data={this.props.list}
                keyExtractor={(item, index) => item.id}
                renderItem={({item}) => <PresLogUI item={item}/>}
                horizontal={false}
                style={basicStyles.sectionContainer}
            />
        </View>
    }
}

export default PresLogListUI;



        // renderHeader = (data, isCollapsed) => 


    //     <View style={basicStyles.presSubImageContainer}>
    //     <Image style={[basicStyles.mediumImage]} source={{uri : item.url}}/>
    // </View>

    //  {/* <Text style={[basicStyles.textSmallerDark]}>{date}</Text> */}