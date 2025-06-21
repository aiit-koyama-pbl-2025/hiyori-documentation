FROM node:20-alpine AS builder

WORKDIR /app

# package.jsonとlockファイルをコピーして依存関係をインストール
COPY package*.json ./
RUN npm ci

# プロジェクト全体をコピーしてビルド
COPY . .
RUN npm run build

# Serve stage
FROM nginx:alpine

# ビルド成果物をNginxの公開ディレクトリにコピー
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

