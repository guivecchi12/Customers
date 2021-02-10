import {APIGatewayProxyEvent, APIGatewayProxyResult, Context} from "aws-lambda"

export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
    const customer = JSON.parse(event.body!);

    console.log(customer)

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello world',
            input: event,
        })
    }
}