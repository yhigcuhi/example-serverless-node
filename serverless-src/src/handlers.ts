/* import lambda 関数 */
import { hello } from './functions/hello';
import kintoneTest from './functions/kintoneTest'

/* export lambda関数 */
export {
  hello,
  kintoneTest, // TODO:tsconfigの設定の問題か、lambdaのts上の問題か kintone api 接続しようとするとエラーになってうまくいかない...
};
