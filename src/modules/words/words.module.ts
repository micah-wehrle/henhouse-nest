import { Module } from '@nestjs/common';
import { WordsController } from './words.controller';
import { WordsService } from './services/words.service';
import { HttpService } from './services/http.service';

@Module({
  controllers: [WordsController],
  providers: [WordsService, HttpService]
})
export class WordsModule {}
