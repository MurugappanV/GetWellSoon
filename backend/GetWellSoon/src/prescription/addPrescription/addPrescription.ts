import { fromEvent, FunctionEvent } from 'graphcool-lib'
import { GraphQLClient } from 'graphql-request'

interface EventData {
    billUrl: string
    isConfirmed: boolean
    message: string
    deliveryAddress: string
    deliveryName: string
    deliveryPhoneNumber: string
}

interface Pharmacy {
    id: string
    orderLabelPrefix: string
    noOfOrders: number 
}

export default async (event: FunctionEvent<EventData>) => {
    try {
        const graphcool = fromEvent(event)
        const api = graphcool.api('simple/v1')
        let userId = "";
        if(event.context.auth) {
            userId = event.context.auth.nodeId;
        }
        if(!(userId.length > 0)) {
            return { error: `No logged in user - ${event.context.auth}` };
        }
        let orderDate = new Date();
        const orderInfo: Pharmacy = await getPharmacyOrder(api, "cjf7zjue562d40118n0cpj3l0").then(r => r.Pharmacy)
        let orderId: string = orderInfo.noOfOrders+"";
        let nextOrderId: number = orderInfo.noOfOrders+1;
        for(let i = orderId.length; i <= 6; i++) {
            orderId = "0" + orderId;
        }
        orderId = orderInfo.orderLabelPrefix + orderId;
        const result: string = await addPres(api, orderId, orderDate.toISOString(), event.data.billUrl, event.data.message, true, userId, event.data.deliveryAddress,event.data.deliveryPhoneNumber,event.data.deliveryName, "Order placed by customer");
        if(!(result != null && result.length > 0)) {
            return { error: `Prescription save error ` };
        }
        await updateOrderInfo(api, orderInfo.id, nextOrderId);
        return { data: { id: orderId} };
    } catch (e) {
        console.log(e)
        return { error: `An unexpected error occured while adding prescription. ${e}` }
    }
}

async function updateOrderInfo(api: GraphQLClient,id: string, noOfOrders: number): Promise<{ updatePharmacy }> {
    const query = `
        mutation updatePharmacy($id: ID!,$noOfOrders: Int!) {
            updatePharmacy(id: $id, noOfOrders: $noOfOrders) {
                id
            }
        }
    `
  
    const variables = {
        id,
        noOfOrders,
    }
  
    return api.request<{ updatePharmacy }>(query, variables)
}

async function getPharmacyOrder(api: GraphQLClient, id: string): Promise<{ Pharmacy }> {
    const query = `
      query Pharmacy($id: ID!) {
        Pharmacy(id: $id) {
            id
            orderLabelPrefix
            noOfOrders
        }
      }
    `
  
    const variables = {
      id,
    }
    return api.request<{ Pharmacy }>(query, variables)
}

async function addPres(api: GraphQLClient, orderId: string,orderDate: string,billUrl: string,message: string,isConfirmed: boolean,userId: string, deliveryAddress: string,deliveryPhoneNumber: string,deliveryName: string, action: string): Promise<string> {
    const query = `
      mutation createPrescription($orderId: String!,$orderDate: String!,$billUrl: String!,$message: String!,$isConfirmed: Boolean!,$userId: ID!,$deliveryAddress: String!,$deliveryPhoneNumber: String!,$deliveryName: String!, $action: String!) {
        createPrescription(orderId: $orderId, orderDate:$orderDate, billUrl: $billUrl, customerMessage: $message, isConfirmed: $isConfirmed, customerId: $userId, deliveryAddress: $deliveryAddress, deliveryPhoneNumber: $deliveryPhoneNumber, deliveryName: $deliveryName, logs: {message: $message, status: PLACED,action: $action, userId: $userId}) {
            id
        }
      }
    `
  
    const variables = {
        orderId,
        orderDate,
        billUrl,
        message,
        isConfirmed,
        userId,
        deliveryAddress,
        deliveryPhoneNumber,
        deliveryName,
        action
    }

    let result: string = await api.request<{ createPrescription }>(query, variables).then(r => r.createPrescription.id).catch(err => console.log(err))
    return result
}