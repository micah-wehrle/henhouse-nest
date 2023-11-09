import { NestFactory } from '@nestjs/core';
import { Henhouse } from './modules/henhouse.module';

async function bootstrap() {
  const app = await NestFactory.create(Henhouse);
  app.enableCors();
  await app.listen(3001);
}

bootstrap();

/*


function checkLetterPresence(word: string, str: string) {
  console.log(str.length, 'letters');
  for (let letter of word) {
    console.log(`${letter}: ${(str.toLowerCase().match(new RegExp(letter.toLowerCase(), 'g')) || []).length}`);
  }
}

checkLetterPresence('abcdefghijklmnopqrstuvwxyz',

`

My dearest victim,

I, the nefarious being who has so cunningly snatched away your precious feathered companion, hereby issue you this ominous ransom note. Pay heed to my demands, for failure to comply shall unleash upon you a wave of misery and despair unlike anything you have ever known.

I am the wicked puppeteer who holds your bird captive, entrapped within the confines of my dark abode. Its melodious chirps now serve as a haunting reminder of your powerlessness in the face of my malevolent deeds. Ah, the sweet taste of triumph as I watch you squirm!

You must gather a sum of 91 shining stars, glistening celestial treasures beyond your grasp. Oh, how they twinkle in the night sky, mocking your feeble attempts to reclaim what is rightfully yours. But worry not, for I shall provide you with instructions on how to deliver the ransom.

Under the pale moonlight, venture forth to the abandoned tower nestled deep within the forbidden forest. The path leading to this forsaken place is treacherous, teeming with perils both natural and supernatural. Only the fearless shall prevail, while the weak shall be devoured by the shadows that lurk.

Once you arrive at the tower's crumbling entrance, utter the incantation "Eclipse, arise" to reveal the hidden door. Step into the gloom and ascend the winding staircase, each step echoing your desperation. Finally, at the pinnacle, you shall find me, the orchestrator of your misery.

Present the stars to me in a vessel of blackest obsidian, a tribute befitting my insatiable appetite for darkness. As the gems of the night pass from your trembling hands to mine, I shall release your bird from its cage and return it to your trembling embrace. But remember, any hint of treachery shall seal its fate forever.

Time ticks away, my hapless prey, for the hour of reckoning draws near. Succumb to my demands, and perhaps you shall yet escape with a glimmer of hope. Disobey, and the world shall witness the wrath of a villain unrestrained.

Choose wisely, for the stakes are high, and the choice is yours alone.

With malevolence,
The Sinister Enigma
  
  `
  
  );

//*/