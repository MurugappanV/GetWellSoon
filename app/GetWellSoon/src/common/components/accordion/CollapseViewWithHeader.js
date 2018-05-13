import React, {PureComponent} from "react";
import { FlatList, ScrollView, View, TextInput, Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity} from "react-native";
import {connect} from 'react-redux';
import Collapsible from 'react-native-collapsible';

class CollapseViewWithHeader extends PureComponent {
    constructor () {
        super()
        this.onHeaderPress = this.onHeaderPress.bind(this)
        this.state = { isCollapsed: false, }
    }

    onHeaderPress = () => {
        this.setState({ isCollapsed: !this.state.isCollapsed })
    }

    render() {
        return <View >
            <TouchableOpacity onPress={this.onHeaderPress} >  {/* underlayColor={Colors.DARK_HIGHLIGHT_COLOR} */}
                {/* {this.props.header(this.props.data, this.state.isCollapsed)} */}
            </TouchableOpacity>
            <Collapsible collapsed={this.state.isCollapsed}>
                {/* {this.props.content(this.props.data, this.state.isCollapsed)} */}
            </Collapsible>
        </View> 
        
    }
}

export default CollapseViewWithHeader;




        // <ExpanableList style={{paddingLeft: 5, paddingTop: 5, paddingRight: 5, paddingBottom: 5, backgroundColor: 'white'}}
        //     dataSource={this.MockData}
        //     headerKey="header"
        //     memberKey="member"
        //     renderRow={this._renderRow}
        //     renderSectionHeaderX={this._renderSection}
        //     // openOptions={[1,2,]}
        // />
        // <View style={{paddingLeft: 5, paddingTop: 5, paddingRight: 5, paddingBottom: 5, backgroundColor: 'white'}}>
        //     <Accordion 
        //         sections={this.MockData}
        //         renderHeader={this._renderHeader}
        //         renderContent={this._renderContent}
        //         initiallyActiveSection={1}
        //     />
            
        // </View>
        // <FlatList style={{paddingLeft: 5, paddingTop: 5, paddingRight: 5, paddingBottom: 5, backgroundColor: 'white'}}
        //     data={this.MockData}
        //     // extraData={this.state}
        //     keyExtractor={(item, index) => item.header}
        //     renderItem={this._renderHeader}
        // />