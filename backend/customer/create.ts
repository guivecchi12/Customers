import {APIGatewayProxyEvent, APIGatewayProxyResult, Context} from "aws-lambda"

export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
    const customer = JSON.parse(event.body!);
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message:'Hello from Lambda!', input:event
        }),
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Methods": "OPTIONS,POST"
        }
    };
    return response

}