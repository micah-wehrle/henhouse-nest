import { Body, Controller, Get, Post } from '@nestjs/common';
import { FileManagerService } from 'src/global-services/file-manager/file-manager.service';

@Controller('/frogger')
export class FroggerController {

  private filename: string = 'frogger-highscore.txt';
  private scores: Highscore[] = [];
  
  constructor(private fileManager: FileManagerService) {
    if (!this.fileManager.fileExists(this.filename)) {
      const names = 'AAA';
      for (let i = 0; i < 10; i++) {
        this.scores[i] = {
          name: String.fromCharCode(65 + i, 65 + i, 65 + i),
          distance: (10 - i) * 2,
          score: (10 - i) * 10
        } 
      }

      this.fileManager.writeFile(this.filename, JSON.stringify(this.scores));
    }
    else {
      this.scores = JSON.parse(this.fileManager.readFile(this.filename));
    }
  }

  @Get('/highscores')
  getHighscores() {
    return this.scoreResponse();
  }

  @Post('/submit')
  submitHighscore(@Body() body: Highscore) {
    for (let i = 0; i < this.scores.length; i++) {
      // in the event that a score is submitted that isn't a high score, it will not find a place and not be added
      if (body.score > this.scores[i].score) {
        this.scores.splice(i, 0, body);
        this.scores.splice(10, 1); // remove last element.
        
        this.fileManager.writeFile(this.filename, JSON.stringify(this.scores));
        break; 
      }
    }
    
    return this.scoreResponse();
  }

  private scoreResponse(): string {
    return JSON.stringify({
      scores: this.scores
    });
  }
}

type Highscore = {
  name: string,
  distance: number,
  score: number
}