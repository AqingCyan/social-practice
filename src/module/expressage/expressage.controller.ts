import { Controller, Get, Query, UseInterceptors } from '@nestjs/common'
import { TransformResponseInterceptor } from '../../core/interceptors/transform-response.interceptor'
import { ExpressageMapDto } from './expressage.dto'
import { ExpressageService } from './expressage.service'

@Controller('expressage')
@UseInterceptors(TransformResponseInterceptor)
export class ExpressageController {
  constructor(private readonly expressageService: ExpressageService) {}

  /**
   * 根据快递单号查询物流
   * @param num
   */
  @Get('/expressRoad')
  recognitionExpress(@Query('courierNumber') num: string) {
    return this.expressageService.expressRoad(num)
  }

  /**
   * 查询快递地图
   * @param param
   */
  @Get('/expressMap')
  findExpressMap(@Query() param: ExpressageMapDto) {
    return this.expressageService.expressMap(param)
  }
}
