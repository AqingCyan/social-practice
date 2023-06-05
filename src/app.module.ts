import { join } from 'path'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
// import { TypeOrmModule } from '@nestjs/typeorm'
import { ServeStaticModule } from '@nestjs/serve-static'
import { ChatGptModule } from './module/chat-gpt/chat-gpt.module'
// import { handleDBConfig } from './helper'
import { WeatherModule } from './module/weather/weather.module'
import { ExpressageModule } from './module/expressage/expressage.module'
import { NewsModule } from './module/news/news.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // TypeOrmModule.forRoot({ ...handleDBConfig(), synchronize: true, entities: [`${__dirname}/**/*.entity{.ts,.js}`] }),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, 'static') }),
    WeatherModule,
    ExpressageModule,
    ChatGptModule,
    NewsModule,
  ],
  providers: [],
})
export class AppModule {}

