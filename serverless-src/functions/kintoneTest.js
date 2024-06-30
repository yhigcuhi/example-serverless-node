/* import リポジトリ */
import {TestRepository} from '../kintone';

export default async function kintoneTest(event, context) {
    // inject
    const repository = new TestRepository();
    // 結果返却
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `find result [${JSON.stringify(await repository.findById(1))}]`
        }),
    };
};