import { fromEvent, FunctionEvent } from 'graphcool-lib'
import { GraphQLClient } from 'graphql-request'

interface EventData {
    billUrl: string
    isConfirmed: boolean
    message: string
}

interface Order {
    id: string
    noOfOrders: number 
    orderLabelPrefix: string
}

interface Orders {
    list: Order[]
}

interface Result {
    id: string
}

export default async (event: FunctionEvent<EventData>) => {
    console.log(event)
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
        let orderInfo: Orders = await getOrderInfo(api).then(r => r.Orders);
        let orderId: string = orderInfo.list[0].noOfOrders+"";
        let nextOrderId: number = orderInfo.list[0].noOfOrders+1;
        for(let i = orderId.length; i <= 6; i++) {
            orderId = "0" + orderId;
        }
        orderId = orderInfo.list[0].orderLabelPrefix + orderId;
        let orderDate = new Date();
        let result: Result = await savePrescription(api, orderId, orderDate.toISOString(), event.data.billUrl, event.data.message, event.data.isConfirmed, userId).then(r => r.Result);
        if(!(result.id != null && result.id.length > 0)) {
            return { error: `Prescription save error - ${event.context.auth}` };
        }
        await updateOrderInfo(api, orderInfo.list[0].id, nextOrderId);
        //let userId: string | null = null

        return { data: { id: userId} };
    } catch (e) {
        console.log(e)
        return { error: `An unexpected error occured while adding prescription. ${e}` }
    }
}


async function getOrderInfo(api: GraphQLClient): Promise<{ Orders }> {
    const query = `
      query allPharmacies {
        allPharmacies {
            id
            orderLabelPrefix
            noOfOrders
        }
      }
    `
  
    const variables = {
        
    }
  
    return api.request<{ Orders }>(query, variables)
}

async function savePrescription(api: GraphQLClient,orderId: string,orderDate: string,billUrl: string,message: string,isConfirmed: boolean,userId: string): Promise<{ Result }> {
    const query = `
      mutation createPrescription($orderId: String!,$orderDate: DateTime!,$billUrl: String!,$message: String!,$isConfirmed: Boolean!,$userId: ID!) {
        createPrescription(orderId: $orderId, 
            orderDate:$orderDate,
            billUrl: $billUrl,
            customerMessage: $message,
            isConfirmed: $isConfirmed,
            customerId: $userId,
            logs:[{message: $message, status: "PLACED", action: "Order placed by customer", userId: $userId}]) {
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
        userId
    }
  
    return api.request<{ Result }>(query, variables)
}

async function updateOrderInfo(api: GraphQLClient,id: string, noOfOrders: number): Promise<{ Result }> {
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
  
    return api.request<{ Result }>(query, variables)
}



// async function getGraphcoolUser(api: GraphQLClient, id: string): Promise<{ User }> {
//     const query = `
//       query getUser($id: String!) {
//         User(id: $id) {
//           id
//         }
//       }
//     `
  
//     const variables = {
//         id,
//     }
  
//     return api.request<{ User }>(query, variables)
//   }