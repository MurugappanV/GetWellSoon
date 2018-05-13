import React, {PureComponent} from "react";
import {View, Image, Text, SectionList} from 'react-native';
import { basicStyles, basicCompStyles } from "../../../../common/styles/styleSheet";
import *  as generalConstants from '../../../../common/constants/generalConstants';
// import PresLogUI from "./PresLogUI";
import PresItemUI from "./PresItemUI";
import Accordion from '../../../../common/components/accordion';
import PresLogListUI from "./PresLogListUI";

class HistoryDataUI extends PureComponent {
    renderHeader = (data, isCollapsed) => <View></View>
        
    renderContent = (data, isCollapsed) => <View></View>
    
    render() {
        
        

        return <View style={{height: 200, width: 200}}>
            <Accordion style={{height: 200, width: 200}} data={this.props.prescriptionData.prescriptionList}  itemHeader={this.renderHeader} itemContent={this.renderContent} />
            {/* <SectionList   extraData={this.state.isCardView}
                renderItem={({item, index, section}) => <PresLogUI item={item} index={index} section={section}/>}
                renderSectionHeader={({section: {title}}) => <PresItemUI title={title}/>}
                sections={this.props.prescriptionData.prescriptionList}
                keyExtractor={(item, index) => item + index}
                style={basicStyles.sectionContainer}


                <PresItemUI title={data.title}/>
                <PresLogListUI list={data.data}/>
            /> */}
        </View>
    }
}

export default HistoryDataUI;