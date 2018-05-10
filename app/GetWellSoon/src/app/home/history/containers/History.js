import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import HistoryUI from "../components/HistoryUI";
import { historyDataActions } from "../actions";
import *  as generalConstants from '../../../../common/constants/generalConstants';

class History extends PureComponent {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        if(this.props.userId != null && prescriptionListStatus != generalConstants.LOADED) {
            this.props.setPrescriptionList(nextProps.userId)
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.userId != null && prescriptionListStatus != generalConstants.LOADED) {
            nextProps.setPrescriptionList(nextProps.userId)
        }
    }

    // componentWillUnmount() {

    // }

    render() {
        return <HistoryUI {...this.props}/>
    }
}

function mapStateToProps(state) {
    return {
        userId: state.userId,
        prescriptionData: state.prescriptionList,
        prescriptionListStatus: state.prescriptionListStatus
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(historyDataActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(History);