import {Injectable} from '@angular/core';
import {IWord} from '../abstract/AbstractInterfaces';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private readonly words: Array<IWord>;

  constructor() {
    this.words = [
      {one: 'word', two: 'слово'},
      {one: 'one', two: 'один'},
      {one: 'mom', two: 'мама'}
    ];
  }

  getWords(): Array<IWord> {
    return this.words;
  }

  addWord(one: string, two: string) {
    this.words.push({one, two});
  }
}
