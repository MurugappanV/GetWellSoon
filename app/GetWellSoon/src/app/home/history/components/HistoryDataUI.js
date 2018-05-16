import React, {PureComponent} from "react";
import {View, Image, Text, SectionList} from 'react-native';
import { basicStyles, basicCompStyles } from "../../../../common/styles/styleSheet";
import *  as generalConstants from '../../../../common/constants/generalConstants';
// import PresLogUI from "./PresLogUI";
import PresItemUI from "./PresItemUI";
import Accordion from '../../../../common/components/accordion';
import PresLogListUI from "./PresLogListUI";

class HistoryDataUI extends PureComponent {
    renderHeader = (data, isCollapsed) => <PresItemUI title={data.title}/>
        
    renderContent = (data, isCollapsed) => <PresLogListUI list={data.data} title={data.title} cancelPres={this.props.cancelPrescription}/>
    
    render() {
        return <View style={basicStyles.tabContainer}>
            <Accordion style={[basicStyles.sectionContainer, basicCompStyles.fullSize]} data={this.props.prescriptionData.prescriptionList}  itemHeader={this.renderHeader.bind(this)} itemContent={this.renderContent.bind(this)} refresh={this.props.refresh}/>
        </View>
    }
}

export default HistoryDataUI;


{/* <SectionList   extraData={this.state.isCardView}
                renderItem={({item, index, section}) => <PresLogUI item={item} index={index} section={section}/>}
                renderSectionHeader={({section: {title}}) => <PresItemUI title={title}/>}
                sections={this.props.prescriptionData.prescriptionList}
                keyExtractor={(item, index) => item + index}
                style={basicStyles.sectionContainer}


                <PresItemUI title={data.title}/>
                <PresLogListUI list={data.data}/>
            /> */}