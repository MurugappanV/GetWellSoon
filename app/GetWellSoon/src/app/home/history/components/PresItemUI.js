import React, {PureComponent} from "react";
import {View, Image, Text} from 'react-native';
import { basicStyles, basicCompStyles } from "../../../../common/styles/styleSheet";
import *  as generalConstants from '../../../../common/constants/generalConstants';
import { getDay, getMonth, getYear} from '../../../../common/utils/dateConvertor';
import colors from "../../../../common/constants/colors";

class PresItemUI extends PureComponent {
    renderStatusImage = (status) => {
        var icon = require('../../../../../assets/images/unknown.png');
        var message = "unknown";
        switch(status) {
            case "PLACED":
                icon = require('../../../../../assets/images/watch.png');
                message = " placed  ";
                break;
            case "BILLED":
                icon = require('../../../../../assets/images/bill.png');
                message = " billed  ";
                break;
            case "SHIPPED":
                icon = require('../../../../../assets/images/bike.png');
                message = "shipping ";
                break;
            case "DELIVERED":
                icon = require('../../../../../assets/images/wright.png');
                message = "delivered";
                break;
            case "CANCELLED":
                icon = require('../../../../../assets/images/wrong.png');
                message = "cancelled";
                break;
            case "REJECTED":
                icon = require('../../../../../assets/images/warning.png');
                message = "rejected ";
                break;
        }
        return <View style={basicStyles.prescriptionStatusContainer}>
            <Image style={[basicStyles.tabImage]} source={icon}/>
            <Text style={[basicStyles.textSmallerDark, basicCompStyles.defaultPaddingTop]}>{message}</Text>
        </View>
    }

    render() {
        const {title} = this.props;
        const orderDate = new Date(title.createdAt);
        const amount = title.amount == -1 ? "Not yet updated" : title.amount;
        const billNo = title.billNo == null ? "Not yet updated" : title.billNo;
        return <View style={[basicStyles.listSectionContainer, {margin: 10, borderRadius: 10, elevation: 10}]}>
            <View style={[basicStyles.prescriptionDateContainer, {backgroundColor: colors.BG_BASE_COLOR, borderBottomLeftRadius: 10, borderTopLeftRadius: 10}]}>
                <Text style={[basicStyles.textWhiteSmaller]}>{getDay(orderDate.getDay())}</Text>
                <Text style={[basicStyles.textWhiteBig, {fontWeight: 'bold'}]}>{orderDate.getDate()}</Text>
                <Text style={[basicStyles.textWhiteSmaller]}>{getMonth(orderDate.getMonth()) + " " + getYear(orderDate.getYear())}</Text>
            </View>
            <View style={[basicStyles.prescriptionInfoContainer, {flex: 1}]}>
                <Text style={[basicStyles.textSmallDark, {fontWeight: 'bold'}]}>{ title.orderId}</Text>
                <Text style={[basicStyles.textSmallerDark]}>{"Bill no.   : " + billNo}</Text>
                <Text style={[basicStyles.textSmallerDark]}>{"Amount  : " + amount}</Text>
            </View>
            {this.renderStatusImage(title.status)}
        </View>
    }
}

export default PresItemUI;