import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { NewsService } from './news.service'
import { NewsController } from './news.controller'

@Module({
  imports: [HttpModule],
  providers: [NewsService],
  controllers: [NewsController],
})
export class NewsModule {}
