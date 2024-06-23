# slim系のnodeから構築することを定義
FROM node:20-bullseye-slim

# コンテナ内(Ubuntu)のOSにインストールしておくやつ
RUN apt-get update && \
    apt-get -y install \
    curl \
    wget \
    zip \
    unzip \
    vim

# npm global install
RUN npm install -g serverless

# 作業ディレクトリ
WORKDIR /app/app
# 利用ポート
EXPOSE 3000
