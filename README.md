# example-serverless-node
Serverless Framework で API Gateway(REST) + Lambda(Nodejs)のDockerローカル開発環境試み

## 起動まで
1. docker compose build --no-cache
1. docker compose up -d
1. AWS コンソールログイン ← 必要？
1. .env作成し IAMで作成した AWS_ACCESS_KEY_IDとかを埋める
1. serverless frameworkのダッシュボードにログインして実施してみたらうまく行った