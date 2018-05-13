import gql from 'graphql-tag';

export const userPrescriptionsQuery = gql`
    query getUserPrescriptions($id : ID!) {
        allPrescriptions(filter: {customer:{id: $id}}) {
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
