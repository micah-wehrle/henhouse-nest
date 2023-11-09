import { Controller, Get, Param } from '@nestjs/common';
import { WordsService } from './services/words.service';

@Controller('/words')
export class WordsController {

  constructor(private wordsService: WordsService) {}

  @Get('/daily/:dayIndex')
  getSpecificDailyData(@Param('dayIndex') dayIndex: string) {
    const dailyWord = this.wordsService.getDailyWord(+dayIndex);
    return {
      success: true,
      dailyWord,
      ransom: this.wordsService.getDailyRansom(+dayIndex, dailyWord)
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
    let seedAsNum: number;
    if (seed && typeof seed === 'string' && seed.length > 0) {
      seedAsNum = +seed;
    }
    else {
      seedAsNum = (Math.random() * 1000000) + 1;
    }

    return {
      success: true,
      ransom: this.wordsService.generateRansom(seedAsNum, this.wordsService.getDailyWord(seedAsNum)),
    }
  }
}
