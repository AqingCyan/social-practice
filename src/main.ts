import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const PORT = 3000

const baseOption = { credentials: true }

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors(baseOption)
  await app.listen(PORT)
}
bootstrap().then(() => console.log(`Application is running on port: ${PORT} 🚀`))
