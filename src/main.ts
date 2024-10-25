import { NestFactory } from '@nestjs/core';
import { Henhouse } from './modules/henhouse.module';

async function bootstrap() {
  const app = await NestFactory.create(Henhouse);
  app.enableCors();
  await app.listen(process.env.HENHOUSE_PORT || 3001);
}

bootstrap();
