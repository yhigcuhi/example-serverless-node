/* import リポジトリ */
import {TestRepository} from '../kintone';
/* import types */
import { APIGatewayProxyResult } from "aws-lambda";
// kintone 接続テスト
// export default async function kintoneTest(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
export default async function kintoneTest(): Promise<APIGatewayProxyResult> {
    // inject
    const repository = new TestRepository();
    // 結果返却
    return {
        statusCode: 200,
        body: JSON.stringify({
            // message: 'TEST'
            message: `find result [${JSON.stringify(await repository.findById(1))}]`
        }),
    };
};