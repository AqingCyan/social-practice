import { Body, Controller, Post } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { ChatGptService } from './chat-gpt.service'

@Controller('chat-gpt')
export class ChatGptController {
  constructor(private readonly chatGptService: ChatGptService) {}

  @Post()
  @ApiOperation({ summary: '使用Chat-GPT回答你的问题' })
  async handleAskQuestion(@Body() data: { question: string }) {
    return await this.chatGptService.handleAskQuestion(data.question)
  }
}
