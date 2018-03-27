import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import HistoryUI from "../components/HistoryUI";

class History extends PureComponent {

    render() {
        return <HistoryUI/>
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps)(History);