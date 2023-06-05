import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common'
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger'
import { NewsService } from './news.service'

@Controller('news')
@ApiTags('新闻查询')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  /**
   * 加载宠物新闻
   * @param page
   * @param size
   * @param keyword
   */
  @Get('/pet')
  @ApiOperation({ summary: '加载宠物新闻' })
  @ApiQuery({ name: 'page', description: '页码', example: 1 })
  @ApiQuery({ name: 'size', description: '每页条数', example: 10 })
  @ApiQuery({ name: 'keyword', description: '关键词（非必须）', example: '狗', required: false })
  async loadPetNews(@Query('page', ParseIntPipe) page: number, @Query('size', ParseIntPipe) size: number, @Query('keyword') keyword: string) {
    return this.newsService.loadPetNews(page, size, keyword)
  }

  /**
   * 加载电竞新闻
   * @param page
   * @param size
   * @param keyword
   */
  @Get('/game')
  @ApiOperation({ summary: '加载电竞新闻' })
  @ApiQuery({ name: 'page', description: '页码', example: 1 })
  @ApiQuery({ name: 'size', description: '每页条数', example: 10 })
  @ApiQuery({ name: 'keyword', description: '关键词（非必须）', example: '英雄联盟', required: false })
  async loadGameNews(@Query('page', ParseIntPipe) page: number, @Query('size', ParseIntPipe) size: number, @Query('keyword') keyword: string) {
    return this.newsService.loadESportsNews(page, size, keyword)
  }

  /**
   * 加载影视新闻
   * @param page
   * @param size
   * @param keyword
   */
  @Get('/film')
  @ApiOperation({ summary: '加载影视新闻' })
  @ApiQuery({ name: 'page', description: '页码', example: 1 })
  @ApiQuery({ name: 'size', description: '每页条数', example: 10 })
  @ApiQuery({ name: 'keyword', description: '关键词（非必须）', example: '电影', required: false })
  async loadFilmNews(@Query('page', ParseIntPipe) page: number, @Query('size', ParseIntPipe) size: number, @Query('keyword') keyword: string) {
    return this.newsService.loadFilmNews(page, size, keyword)
  }

  /**
   * 获取科学探索新闻
   * @param page
   * @param size
   * @param keyword
   */
  @Get('/science')
  @ApiOperation({ summary: '获取科学探索新闻' })
  @ApiQuery({ name: 'page', description: '页码', example: 1 })
  @ApiQuery({ name: 'size', description: '每页条数', example: 10 })
  @ApiQuery({ name: 'keyword', description: '关键词（非必须）', example: '物理', required: false })
  async loadScienceNews(@Query('page', ParseIntPipe) page: number, @Query('size', ParseIntPipe) size: number, @Query('keyword') keyword: string) {
    return this.newsService.loadScienceNews(page, size, keyword)
  }
}
