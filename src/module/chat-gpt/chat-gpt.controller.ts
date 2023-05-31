import { Body, Controller, Post } from '@nestjs/common'
import { ChatGptService } from './chat-gpt.service'

@Controller('chat-gpt')
export class ChatGptController {
  constructor(private readonly chatGptService: ChatGptService) {}

  @Post()
  async handleAskQuestion(@Body() data: { question: string }) {
    return await this.chatGptService.handleAskQuestion(data.question)
  }
}
