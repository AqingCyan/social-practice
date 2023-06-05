import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { firstValueFrom } from 'rxjs'

interface NewsSchame {
  code: number
  msg: string
  result: {
    curpage: number
    allnum: number
    list: {
      id: string
      ctime: string
      title: string
      description: string
      source: string
      picUrl: string
      url: string
    }[]
  }
}

@Injectable()
export class NewsService {
  private commonApiKey: string

  constructor(private readonly configService: ConfigService, private readonly httpService: HttpService) {
    this.commonApiKey = this.configService.get<string>('COMMON_API_KEY')
  }

  /**
   * 获取宠物新闻
   * @param page
   * @param size
   * @param keyword
   */
  async loadPetNews(page: number, size: number, keyword: string) {
    const { data } = await firstValueFrom(this.httpService.get<NewsSchame>('https://apis.tianapi.com/petnews/index', { params: { page, num: size, word: keyword, key: this.commonApiKey } }))
    const { result } = data
    return result
  }

  /**
   * 获取电竞新闻
   * @param page
   * @param size
   * @param keyword
   */
  async loadESportsNews(page: number, size: number, keyword: string) {
    const { data } = await firstValueFrom(this.httpService.get<NewsSchame>('https://apis.tianapi.com/esports/index', { params: { page, num: size, word: keyword, key: this.commonApiKey } }))
    const { result } = data
    return result
  }

  /**
   * 获取影视新闻
   * @param page
   * @param size
   * @param keyword
   */
  async loadFilmNews(page: number, size: number, keyword: string) {
    const { data } = await firstValueFrom(this.httpService.get<NewsSchame>('https://apis.tianapi.com/film/index', { params: { page, num: size, word: keyword, key: this.commonApiKey } }))
    const { result } = data
    return result
  }

  /**
   * 获取科学探索新闻
   * @param page
   * @param size
   * @param keyword
   */
  async loadScienceNews(page: number, size: number, keyword: string) {
    const { data } = await firstValueFrom(this.httpService.get<NewsSchame>('https://apis.tianapi.com/sicprobe/index', { params: { page, num: size, word: keyword, key: this.commonApiKey } }))
    const { result } = data
    return result
  }
}
