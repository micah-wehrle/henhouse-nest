import { NestFactory } from '@nestjs/core';
import { Henhouse } from './modules/henhouse.module';

async function bootstrap() {
  const app = await NestFactory.create(Henhouse);
  app.enableCors();
  await app.listen(3001);
}

bootstrap();
