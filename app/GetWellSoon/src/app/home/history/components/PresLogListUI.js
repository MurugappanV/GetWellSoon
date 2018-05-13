import React, {PureComponent} from "react";
import {View, Image, Text, SectionList} from 'react-native';
import { basicStyles, basicCompStyles } from "../../../../common/styles/styleSheet";
import PresLogUI from "./PresLogUI";

class PresLogListUI extends PureComponent {

    render() {
        return <FlatList 
            data={this.props.list}
            keyExtractor={(item, index) => item.id}
            renderItem={({item}) => <PresLogUI item={item}/>}
            horizontal={false}
            style={basicStyles.sectionContainer}
        />
    }
}

export default PresLogListUI;



        // renderHeader = (data, isCollapsed) => 