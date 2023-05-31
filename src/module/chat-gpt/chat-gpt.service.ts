import { Injectable, OnModuleInit } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Configuration, OpenAIApi } from 'openai'

@Injectable()
export class ChatGptService implements OnModuleInit {
  openai: OpenAIApi

  constructor(private readonly configService: ConfigService) {}

  onModuleInit() {
    const configuration = new Configuration({
      apiKey: this.configService.get<string>('OPENAI_API_KEY'),
    })
    this.openai = new OpenAIApi(configuration)
  }

  async handleAskQuestion(question: string) {
    const completion = await this.openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: question }],
    })
    console.log(completion)
    return completion.data.choices[0]
  }
}
