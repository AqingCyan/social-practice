FROM node:16.15.0 as build

ARG NODE_ENV=prod
ARG WEATHER_PRIVATE_KEY=SWT5ZlQQBSMZyX0bN
ARG EXPRESS_CUSTOMER={$EXPRESS_CUSTOMER}
ARG EXPRESS_PRIVATE_KEY={$EXPRESS_PRIVATE_KEY}

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

ENV NODE_ENV=$NODE_ENV
ENV WEATHER_PRIVATE_KEY=$WEATHER_PRIVATE_KEY
ENV EXPRESS_CUSTOMER=$EXPRESS_CUSTOMER
ENV EXPRESS_PRIVATE_KEY=$EXPRESS_PRIVATE_KEY

RUN pnpm install
RUN pnpm build

EXPOSE 3000

RUN chmod -R 777 /app

ENTRYPOINT ["./entrypoint.sh"]

