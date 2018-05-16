import React, {PureComponent} from "react";
import { FlatList} from "react-native";
import Collapsible from 'react-native-collapsible';
import CollapseViewWithHeader from './CollapseViewWithHeader';
import { basicStyles, basicCompStyles } from "../../styles/styleSheet";

class Accordion extends PureComponent {
    constructor(props) {
        super(props);
        this.renderItemCollapsible = this.renderItemCollapsible.bind(this);
    }

    renderItemCollapsible = ({item})  => {return <CollapseViewWithHeader data={item} header={this.props.itemHeader} content={this.props.itemContent}/>};

    render() {
        return <FlatList 
            data={this.props.data}
            keyExtractor={(item, index) => item.title.id}
            renderItem={this.renderItemCollapsible}
            style={this.props.style}
            onRefresh={this.props.refresh}
            refreshing={false}
        />
    }
}

export default Accordion;




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


            // constructor () {
    //     super()
    //     this.state = { isCollapsed: false, }
    // }

    // onHeaderPress = () => {
    //     this.setState({ isCollapsed: !this.state.isCollapsed })
    // }

    // // _renderContent = (section) => {
    // //     return <View style={{height: 40}}>
    // //         <Text>{section.member[0].title}</Text>
    // //     </View>
    // // };
    // renderHeader = (data)  => {return <TouchableOpacity onPress={this.onHeaderPress}>
    //         <Text>{data.headerText}</Text>
    //     </TouchableOpacity>
    // };

    // renderContent = (data) => {return <Collapsible collapsed={this.state.isCollapsed}>
    //         <Text>hot and sour</Text>
    //         <Text>manchow</Text>
    //         <Text>sweetcorn</Text>
    //     </Collapsible>
    // <CollapseViewWithHeader data={this.props.data}/>
    // }


        //return <CollapseViewWithHeader content={this.props.itemContent}/>