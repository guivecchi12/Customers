import {APIGatewayProxyEvent, APIGatewayProxyResult, Context} from "aws-lambda"

export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
    // const customer = JSON.parse(event.body!);
    // console.log(customer)
    
    const customer = event.pathParameters?.id;

    if(!customer || !customerData[customer]){
        return apiResponses._400({message: 'No customer or no data for the customer'})
    }
    return apiResponses._200(customerData[customer]);
}

const apiResponses = {
    _200: (body: {[key: string]: any}) => {
        return {
            statusCode: 200,
            body: JSON.stringify(body, null, 2)
        }
    },
    _400: (body: {[key: string]: any}) => {
        return {
            statusCode: 200,
            body: JSON.stringify(body, null, 2)
        }
    }
}

interface CustomerData{
    id: number;
    name: string;
    email: string;
    about?: string;
}

const customerData: {[key: string]: CustomerData} = {
    customer1: {
        id: 1,
        name: 'Gui Vecchi',
        email: 'email@a.com',
        about: 'I have an about section'
    },
    customer2: {
        id: 2,
        name: 'John Smith',
        email: 'email@b.com'
    },
    customer3: {
        id: 3,
        name: 'Jane Doe',
        email: 'email@c.com'
    },
}