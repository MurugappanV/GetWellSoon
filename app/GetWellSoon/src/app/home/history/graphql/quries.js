import gql from 'graphql-tag';

export const userPrescriptionsQuery = gql`
    query getUserPrescriptions($id : ID!) {
        allPrescriptions(filter: {customer:{id: $id}}, orderBy: orderDate_DESC) {
            id
            amount
            billUrl
            billNo
            customerMessage
            deliveryName
            deliveryAddress
            deliveryPhoneNumber
            isConfirmed
            orderDate
            orderId
            createdAt
            prescriptionUrl
            status
            logs {
                id
                createdAt
                action
                message
                url
                status
                user {
                    name
                }
            }
        }
    }
`

export const updateUserPrescription = gql`
    mutation updatePrescriptions($id : ID!) {
        updatePrescription(id: $id, status: CANCELLED) {
            id
            amount
            billUrl
            billNo
            customerMessage
            deliveryName
            deliveryAddress
            deliveryPhoneNumber
            isConfirmed
            orderDate
            orderId
            createdAt
            prescriptionUrl
            status
            logs {
                id
                createdAt
                action
                message
                url
                status
                user {
                    name
                }
            }
        }
    }
`

export const userPrescriptionsSubscription = gql`
    subscription subscribeUserPrescriptions($id : ID!) {
        Prescription(filter: {node: {customer:{id: $id}}}) {
            mutation
            node {
                id
                amount
                billUrl
                billNo
                customerMessage
                deliveryName
                deliveryAddress
                deliveryPhoneNumber
                isConfirmed
                orderDate
                orderId
                createdAt
                prescriptionUrl
                status
                logs {
                    id
                    createdAt
                    action
                    message
                    url
                    status
                    user {
                        name
                    }
                }
            }
        }
    }
`

export const devileredPrescriptionsQuery = gql`
    query getUserPrescriptions($id : ID!) {
        _allPrescriptionsMeta(filter: { AND: [{customer:{id: $id}}, {status_in: [DELIVERED]}]}) {
            count
        }
    }
`

export const orderedPrescriptionsQuery = gql`
    query getUserPrescriptions($id : ID!) {
        _allPrescriptionsMeta(filter: {customer:{id: $id}}) {
            count
        }
    }
`

export const inProcessPrescriptionsQuery = gql`
    query getUserPrescriptions($id : ID!) {
        _allPrescriptionsMeta(filter: { AND: [{customer:{id: $id}}, {status_in: [PLACED, BILLED, SHIPPED]}]}) {
            count
        }
    }
`