import { NestFactory } from '@nestjs/core';
import { WordsModule } from './words/words.module';

async function bootstrap() {
  const app = await NestFactory.create(WordsModule);
  app.enableCors();
  await app.listen(3001);
}

bootstrap();
