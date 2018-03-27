import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import OrderUI from "../components/OrderUI";

class Order extends PureComponent {

    render() {
        return <OrderUI/>
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps)(Order);