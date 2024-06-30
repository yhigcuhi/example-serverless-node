# example-serverless-node
Serverless Framework で API Gateway(REST) + Lambda(Nodejs)のDockerローカル開発環境試み

## 環境
- serverless framework v3使う v4は認証がだるそうなので
- [今後はTypescriptに対応できたら...](https://zenn.dev/mistletoe/books/93f5810c20eb9a/viewer/48cd17)
- SAM CLI でリリースするようにできる体制が最後なんだけど buildしてリリースできるようにしたい

## 起動まで
1. docker compose build --no-cache
1. docker compose up -d
1. AWS コンソールログイン ← 必要？
1. .env作成し IAMで作成した AWS_ACCESS_KEY_IDとかを埋める
1. serverless frameworkのダッシュボードにログインして実施してみたらうまく行った