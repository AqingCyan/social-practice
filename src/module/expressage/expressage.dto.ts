import { ApiProperty } from '@nestjs/swagger'

export class ExpressageMapDto {
  @ApiProperty({ description: '快递单号' })
  readonly num: string

  @ApiProperty({ description: '快递公司' })
  readonly com: string

  @ApiProperty({ description: '起始地' })
  readonly from: string

  @ApiProperty({ description: '目的地' })
  readonly to: string
}
