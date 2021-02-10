import {APIGatewayProxyEvent, APIGatewayProxyResult, Context} from "aws-lambda"

export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
    const customer = JSON.parse(event.body!);

    if(!customer){
        return apiResponses._400({message: "You did not create a new customer"})
    }

    const customerData: {[key: string]: CustomerData} = {
        customer1: {
            id: customer.id,
            name: customer.name,
            email: customer.email,
            about: customer.about
        },
    }
    return apiResponses._200(customerData)
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