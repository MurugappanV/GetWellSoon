import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import OrderUI from "../components/OrderUI";
import {orderDataActions} from "../actions";

class Order extends PureComponent {

    render() {
        const {prescriptionUrl, presUploadStatus, setPrescriptionImageUrl, uploadingImageUrl} = this.props;
        return <OrderUI 
            prescriptionUrl={prescriptionUrl} 
            presUploadStatus={presUploadStatus} 
            setPresUrl={setPrescriptionImageUrl} 
            setUploadStatus={uploadingImageUrl}
        />
    }
}

function mapStateToProps(state) {
    return {
        prescriptionUrl: state.prescriptionUrl,
        presUploadStatus: state.prescriptionUploadStatus
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(orderDataActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);