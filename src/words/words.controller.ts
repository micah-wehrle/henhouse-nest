import { Controller, Get, Param } from '@nestjs/common';
import { WordsService } from './services/words/words.service';

@Controller('/words')
export class WordsController {

  constructor(private wordsService: WordsService) {}

  @Get('/daily')
  getDailyData() {
    return {
      success: true,
      dailyWord: this.wordsService.getDailyWord(),
      ransom: this.wordsService.getDailyRansom()
    }
  }
  
  @Get('/validate/:word')
  validateWord(@Param('word') word: string) {
    return {
      success: true,
      testWord: word,
      isTestWordValid: this.wordsService.isValidWord(word),
    }
  }

  @Get('/ransom/:seed')
  randomRansom(@Param('seed') seed: string) {
    let seedAsNum;
    if (seed && typeof seed === 'string' && seed.length > 0) {
      seedAsNum = +seed;
    }
    else {
      seedAsNum = (Math.random() * 1000000) + 1;
    }

    return {
      success: true,
      ransom: this.wordsService.generateRansom(seedAsNum),
    }
  }
}
