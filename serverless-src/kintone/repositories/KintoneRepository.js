/* import kintone SDK */
import { KintoneRestAPIClient } from '@kintone/rest-api-client';

// kintone API リポジトリ 共通クラス
export default class KintoneRepository {
    /* @var {KintoneRestAPIClient} */
    // client;

    /**
     * デフォルトコンストラクタ
     * @param {string|undefined} token API利用トークン
     */
    constructor(token = '') {
        this.client = this.buildClient(token);
    }

    /* ドメイン 関数 */
    /**
     * Kintone API接続 クライアント作成
     * @param {string|undefined} token API利用トークン
     * @returns {KintoneRestAPIClient} Kintone API接続 クライアント
     */
    buildClient(token = '') {
        // クライアントの作成
        return new KintoneRestAPIClient(this.buildClientConfig(token));
    }
    /**
     * Kintone API接続 クライアント設定値
     * @param {string|undefined} token API利用トークン
     * @returns {Options} Kintone API接続クライアント
     */
    buildClientConfig(token = '') {
        // 入力補完 認証
        const auth = {};
        if (token) auth.apiToken = token;
console.log(process.env.KINTONE_BASE_URL);
        // KintoneRestAPIClient コンストラクタ引数のオプションの値
        return {
            // 基本接続先
            baseUrl: process.env.KINTONE_BASE_URL,
            // 認証
            auth,
            // // クライアント証明書
            // clientCertAuth: {
            //     pfxFilePath: process.env.KINTONE_CERT_FILE_PATH,
            //     password: process.env.KINTONE_CERT_FILE_PASSWORD,
            // }
        };
    }
    /* getter */
    /**
     * @returns {KintoneRestAPIClient} Kintone API接続 クライアント
     */
    getClient() { return this.client; }
}