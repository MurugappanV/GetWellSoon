import React, {PureComponent} from "react";
import {connect} from "react-redux";
import HeaderUI from '../components/HeaderUI';

class Header extends PureComponent {
    
    render() {
        return <HeaderUI navigation={this.props.navigation}/>
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps)(Header)