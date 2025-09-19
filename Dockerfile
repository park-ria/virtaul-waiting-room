# 1단계: 빌드
FROM node:18-alpine AS builder
WORKDIR /app

# pnpm 설치
RUN npm install -g pnpm

# package.json, pnpm-lock.yaml 복사 후 설치
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

# 2단계: 실행
FROM node:18-alpine
WORKDIR /app

RUN npm install -g pnpm

COPY --from=builder /app ./

EXPOSE 3000
CMD ["pnpm", "start"]
