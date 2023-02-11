import { Module } from '@nestjs/common';
import { WordsController } from './words.controller';
import { WordsService } from './services/words/words.service';

@Module({
  controllers: [WordsController],
  providers: [WordsService]
})
export class WordsModule {}
