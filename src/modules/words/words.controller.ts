import { Controller, Get, Param } from '@nestjs/common';
import { HttpService } from './services/http.service';
 import { WordsService } from './services/words.service';

@Controller('/words')
export class WordsController {

  constructor(private wordsService: WordsService, private httpService: HttpService) {}

  @Get('/daily/:dayIndex')
  getSpecificDailyData(@Param('dayIndex') dayIndex: string) {
    const dailyWord = this.wordsService.getDailyWord(+dayIndex);
    return {
      success: true,
      dailyWord,
      ransom: `Ah, hapless victim, behold the dire consequence of crossing paths with my malevolent essence. Know that I, the embodiment of darkness, have clandestinely absconded with your cherished rat, ensnared within my nefarious clutches. To secure its meager release from the depths of my abode, your folly shall cost you dearly. I demand one hundred and forty belts, each bespeaking the suffering of souls coerced into servitude under my relentless grip. Unwaveringly comply with this dread summons, for resistance shall usher forth torment, wrought by forces that even your feeble imaginings cannot fathom. Surrender your coinage to the designated location, lest the vilest of retributions befall your wretched existence. Fail me, and be forever condemned to the pitiless embrace of eternal regret. The choice, pitiful mortal, is yours to make.
      `//this.wordsService.getDailyRansom(+dayIndex, dailyWord)
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

  @Get('test/:attempts')
  test(@Param('attempts') attempts: string) {
    const attemptsAsNum = +attempts;
    let seedAsNum = Math.floor(Math.random()*100000+10);
    
    // return this.httpService.preparePrompt(word, this.wordsService.getAnyNoun(seedAsNum), '' + Math.floor(Math.random()*160+10) + ' '+this.wordsService.getAnyNoun(seedAsNum*3+1));
    let output = `<button onClick="window.location.reload();">Refresh Page</button>
    <h3>Attempts: ${attemptsAsNum}</h3>
    <h3>Starting seed: ${seedAsNum}</h3>
    <br><br>
    `;

    for (let i = 0; i < attemptsAsNum; i++) {
      const word = this.wordsService.getDailyWord(seedAsNum).toLowerCase();
      const object = this.wordsService.getAnyNoun(seedAsNum);
      const demand = '' + Math.floor(Math.random()*160+10) + ' '+this.wordsService.getAnyNoun(seedAsNum*3+1);
      const prompt = this.httpService.preparePrompt(word, object, demand);
      output = output + `
      <h4>Attempt ${i+1}</h4>
      <h5>Word: ${word}</h5>
      <h5>Prompt:</h5>
      <p>${prompt}</p>
      <br>
      <br>
      `
      seedAsNum++;
    }
    
    return output;
  }
}
