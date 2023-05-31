import { Controller, Get, Query, UseInterceptors } from '@nestjs/common'
import { ApiOperation, ApiParam } from '@nestjs/swagger'
import { TransformResponseInterceptor } from '../../core/interceptors/transform-response.interceptor'
import { WeatherService } from './weather.service'

@Controller('weather')
@UseInterceptors(TransformResponseInterceptor)
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  /**
   * 查询城市
   * @param keyword
   */
  @Get('/city')
  @ApiOperation({ summary: '根据关键词查询城市信息，获取到 city code 用以查询具体地区的天气' })
  @ApiParam({ name: 'keyword', description: '查询城市地区的关键词', example: '海淀' })
  async searchCity(@Query('keyword') keyword: string) {
    return await this.weatherService.findCity(keyword)
  }

  /**
   * 查询当前天气
   * @param cityCode
   */
  @Get('/currentWeather')
  @ApiOperation({ summary: '使用 city code 查询具体对应地区的当天天气信息' })
  @ApiParam({ name: 'cityCode', description: '城市地区的编号', example: 'WX4EQ2XJD7V2' })
  async searchCurrentWeather(@Query('cityCode') cityCode: string) {
    return await this.weatherService.currentCityWeather(cityCode)
  }

  /**
   * 查询未来五天天气
   * @param cityCode
   */
  @Get('/next5dayWeather')
  @ApiOperation({ summary: '使用 city code 查询具体对应地区的未来五天天气信息' })
  @ApiParam({ name: 'cityCode', description: '城市地区的编号', example: 'WX4EQ2XJD7V2' })
  async next5dayWeather(@Query('cityCode') cityCode: string) {
    return await this.weatherService.next5dayWeather(cityCode)
  }

  /**
   * 未来城市灾害预警
   * @param cityCode
   */
  @Get('/nextAlarm')
  @ApiOperation({ summary: '使用 city code 查询具体对应地区的未来灾害预警' })
  @ApiParam({ name: 'cityCode', description: '城市地区的编号', example: 'WX4EQ2XJD7V2' })
  async nextAlarm(@Query('cityCode') cityCode: string) {
    return await this.weatherService.nextAlarm(cityCode)
  }

  /**
   * 查询24小时天气
   * @param cityCode
   */
  @Get('/next24HoursWeather')
  @ApiOperation({ summary: '使用 city code 查询具体对应地区的未来24小时天气' })
  @ApiParam({ name: 'cityCode', description: '城市地区的编号', example: 'WX4EQ2XJD7V2' })
  async next24HoursWeather(@Query('cityCode') cityCode: string) {
    return await this.weatherService.next24HoursWeather(cityCode)
  }

  /**
   * 查询空气质量
   * @param cityCode
   */
  @Get('/airQuality')
  @ApiOperation({ summary: '使用 city code 查询具体对应地区的空气质量' })
  @ApiParam({ name: 'cityCode', description: '城市地区的编号', example: 'WX4EQ2XJD7V2' })
  async airQuality(@Query('cityCode') cityCode: string) {
    return await this.weatherService.airQuality(cityCode)
  }

  /**
   * 查询生活指数
   * @param cityCode
   */
  @Get('/liveQuality')
  @ApiOperation({ summary: '使用 city code 查询具体对应地区的生活指数' })
  @ApiParam({ name: 'cityCode', description: '城市地区的编号', example: 'WX4EQ2XJD7V2' })
  async liveQuality(@Query('cityCode') cityCode: string) {
    return await this.weatherService.liveQuality(cityCode)
  }
}
