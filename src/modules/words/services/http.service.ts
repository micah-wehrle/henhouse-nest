import { Injectable } from '@nestjs/common';

@Injectable()
export class HttpService {
  
  public preparePrompt(word: string, object: string, demand: string): string {
    const letters = word.split('').join(', ');
    return ''+
    `
    Play the part of a fantasy villain.<br>
    As you write, keep track of how the variety letters you've used and attempt to use as many different letters as possible. When choosing a noun, adjective, or verb, select a word which contains a letter which you have used the least so far.<br>
    Pay special attention to use the letters j, k, p, q, v, x, z. Try to use each of them 5 times. Do not mention these letters in your note.<br>
    As an example, say you need to choose an adjective with the letter j. You might use jealous, jaded, majestic, or unjust, as they all contain the letter j.<br>
    Write a ransom note to the person from whom you stole their ${object}, and demand payment of ${demand}. The note should be at least 100 tokens, or 200 words.
    `;
  }

  // "write a similar message, but use the letter(s): xyz more"
}



/*
return `Let's play a writing game. In your response, try to use words with the letters: ${letters}. You can do this in the following way: as you write, when you come to the opportunity to use a noun, adjective, or verb, select a word that contains at least one of the letters. When you make this selection, use the letter that you have used the least so far. Try to do this at least 10 times per letter. However, do not use the word "${word}" anywhere in your response. Also, do not mention any of the letters you're trying to use in your response.<br>
    Now play the part of a fantasy villain who values brevity Do not give your name. Write me a ransom note stating that you've stollen my ${object} and to get it back you want ${demand} as payment. Do not include a greeting or closing signature. Use at least 100 tokens.`;



    Play the part of a fantasy villain with a secret identity who values brevity. Write me a ransom note stating that you've stollen my ${object} and to get it back you want ${demand} as payment.<br>
    In your response, try to use words with the letters: ${letters}. You can do this in the following way: as you write, when you come to the opportunity to use a noun, adjective, or verb, select a word that contains at least one of the letters. When you make this selection, use the letter that you have used the least so far. Try to do this at least 10 times per letter. However, do not use the word "${word}" or any word containing "${word}" anywhere in your response. Do not mention any of the letters you're trying to use in your response.<br>
      As an example, say you need to choose an adjective with the letter j. You might use jealous, jaded, majestic, or unjust, as they all contain the letter j.


    Play the part of a fantasy villain. Write a ransom note to the person from whom you stole their ${object}, and demand payment of ${demand}. The note should be around 100 tokens.



    Play the part of a fantasy villain. Write a ransom note to the person from whom you stole their ${object}, and demand payment of ${demand}. The note should be at least 100 tokens, or 200 words.<br>
    As you write, keep track of how the variety letters you've used and attempt to use as many different letters as possible. When choosing a noun, adjective, or verb, select a word which contains a letter which you have used the least so far.<br>
    Pay special attention to use the letters j, k, p, q, v, x, z. Try to use each of them 5 times. Do not mention these letters in your note.<br>
    As an example, say you need to choose an adjective with the letter j. You might use jealous, jaded, majestic, or unjust, as they all contain the letter j.
    


*/