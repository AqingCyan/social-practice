import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

const PORT = 3000

const baseOption = { credentials: true }

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const options = new DocumentBuilder()
    .setTitle('社会实践')
    .setDescription('四中社会实践信息工具接口')
    .setVersion('1.0')
    .addTag('工具')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  app.enableCors(baseOption)
  await app.listen(PORT)
}
bootstrap().then(() => console.log(`Application is running on port: ${PORT} 🚀`))
