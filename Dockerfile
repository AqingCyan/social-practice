FROM node:16.15.0 as build

WORKDIR /app

RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN echo 'Asia/Shanghai' >/etc/timezone

RUN npm i -g pnpm

COPY package.json .
COPY nest-cli.json .
COPY pnpm-lock.yaml .
COPY tsconfig.json .
COPY tsconfig.build.json .
COPY entrypoint.sh .
COPY src ./src

RUN pnpm install
RUN pnpm build

EXPOSE 3000

RUN chmod -R 777 /app

ENTRYPOINT ["./entrypoint.sh"]

