/* import types */
import { APIGatewayProxyResult } from "aws-lambda";

// lambda処理お試し
// export const hello = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
export const hello = async (): Promise<APIGatewayProxyResult> => {
    // .envを読み込みの確認
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Test AAA Serverless on! ${(await message({ time: 1, copy: 'Your function executed successfully!'}))}`,
      }),
    };
};

const message = ({ time, ...rest }: { time: number, copy: string}) => new Promise((resolve) =>
  setTimeout(() => {
    resolve(`${rest.copy} (with a delay)`);
  }, time * 1000)
);