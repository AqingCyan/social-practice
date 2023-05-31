import { Body, Controller, Post } from '@nestjs/common'
import { ApiOperation, ApiProperty } from '@nestjs/swagger'
import { ChatGptService } from './chat-gpt.service'

class GPTDto {
  @ApiProperty({ description: '你的问题' })
  question: string
}

@Controller('chat-gpt')
export class ChatGptController {
  constructor(private readonly chatGptService: ChatGptService) {}

  @Post()
  @ApiOperation({ summary: '使用Chat-GPT回答你的问题' })
  async handleAskQuestion(@Body() data: GPTDto) {
    return await this.chatGptService.handleAskQuestion(data.question)
  }
}
