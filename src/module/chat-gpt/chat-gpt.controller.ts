import { Body, Controller, Post, UseInterceptors } from '@nestjs/common'
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger'
import { TransformResponseInterceptor } from '../../core/interceptors/transform-response.interceptor'
import { ChatGptService } from './chat-gpt.service'

class GPTDto {
  @ApiProperty({ description: '你的问题' })
  question: string
}

@Controller('chat-gpt')
@ApiTags('Chat-GPT')
@UseInterceptors(TransformResponseInterceptor)
export class ChatGptController {
  constructor(private readonly chatGptService: ChatGptService) {}

  @Post()
  @ApiOperation({ summary: '使用Chat-GPT回答你的问题' })
  async handleAskQuestion(@Body() data: GPTDto) {
    return await this.chatGptService.handleAskQuestion(data.question)
  }
}
