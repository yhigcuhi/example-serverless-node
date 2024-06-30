/* import 親 */
import KintoneRepository from './KintoneRepository';

// kintone レコード操作 API リポジトリ 共通クラス
export default class KintoneRecordRepository extends KintoneRepository {
    /* @var {number} Kintone アプリID */
    // app;

    /**
     * デフォルトコンストラクタ
     * @param {number} app 接続する Kintone アプリID
     * @param {string|undefined} token API利用トークン
     */
    constructor(app, token = '') {
        super(token);
        this.app = app;
    }

    /**
     * 検索 by ID
     * @param {number} id レコード 番号 (Kintone アプリのレコードのPK)
     * @returns {Promise<Record<string, any>>} 検索結果
     * @throws KintoneAPIException TODO:共通 KintoneAPIエラー今後
     */
    async findById(id)
    {
        try {
            // Kintone検索 実行
            const { record } = await this.getRecordClient().getRecord({app: this.app, id});
            // 検索結果返却
            return record;
        } catch (e) {
            console.error('TODO: KintoneAPI通信エラー 今後');
        }
    }
    /* getter */
    /**
     * @returns {RecordClient} Kintone Record API接続 クライアント
     */
    getRecordClient() { return this.getClient().record; }
}