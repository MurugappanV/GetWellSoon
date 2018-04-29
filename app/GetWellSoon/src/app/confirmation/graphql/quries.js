import gql from 'graphql-tag';

export const addPrescription = gql`
    mutation addPrescription($billUrl: String, $isConfirmed: Boolean, $message: String,$deliveryAddress: String,$deliveryName: String,$deliveryPhoneNumber: String) {
        addPrescription(billUrl: $billUrl, isConfirmed: $isConfirmed, message: $message,deliveryAddress: $deliveryAddress,deliveryName: $deliveryName,deliveryPhoneNumber: $deliveryPhoneNumber) {
            id
        }
    }
`