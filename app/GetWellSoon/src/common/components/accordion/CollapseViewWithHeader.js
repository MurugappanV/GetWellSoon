import React, {PureComponent} from "react";
import { FlatList, ScrollView, View, TextInput, Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import {connect} from 'react-redux';
import Collapsible from 'react-native-collapsible';
import colors from "../../constants/colors";

class CollapseViewWithHeader extends PureComponent {
    constructor () {
        super()
        this.onHeaderPress = this.onHeaderPress.bind(this)
        this.state = { isCollapsed: true, }
    }

    onHeaderPress = () => {
        this.setState({ isCollapsed: !this.state.isCollapsed })
    }

    render() {
        return <View >
            <TouchableHighlight onPress={this.onHeaderPress} underlayColor={colors.HIGHLIGHT_COLOR}>  
                {this.props.header(this.props.data, this.state.isCollapsed)}
            </TouchableHighlight>
            <Collapsible collapsed={this.state.isCollapsed}>
                {this.props.content(this.props.data, this.state.isCollapsed)}
            </Collapsible>
        </View> 
        
    }
}

export default CollapseViewWithHeader;

{/* underlayColor={Colors.DARK_HIGHLIGHT_COLOR} */}
{/* {this.props.header(this.props.data, this.state.isCollapsed)} */}
{/* {this.props.content(this.props.data, this.state.isCollapsed)} */}

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