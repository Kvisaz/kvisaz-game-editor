import {Injectable} from '@angular/core';
import {IWord} from '../abstract/AbstractInterfaces';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private readonly words: Array<IWord>;

  constructor() {
    this.words = [
      {one: 'word', two: 'слово', id: 1},
      {one: 'one', two: 'один', id: 2},
      {one: 'mom', two: 'мама', id: 3}
    ];
    this.buildIds();
  }

  getWords(): Array<IWord> {
    return this.words;
  }

  addWord(one: string, two: string, id = -1) {
    this.words.push({one, two, id});
    this.buildIds();

    console.log('new words: ', this.words);
  }


  saveItem(one: string, two: string, id: number) {
    let isIdSuccess = false;
    const l = this.words.length;
    for (let i = 0; i < l; i++) {
      if (this.words[i].id === id) {
        this.words[i] = {one, two, id};
        isIdSuccess = true;
        break;
      }
    }

    if (isIdSuccess) {
      console.log('words: ', this.words);
    } else {
      console.warn(`no word with id ${id}`);
    }
  }

  remove(id: number) {
    let isIdSuccess = false;
    const l = this.words.length;
    for (let i = 0; i < l; i++) {
      if (this.words[i].id === id) {
        this.words.splice(i, 1);
        isIdSuccess = true;
        break;
      }
    }
    if (isIdSuccess) {
      console.log('words: ', this.words);
    } else {
      console.warn(`no word with id ${id}`);
    }
  }

  private buildIds() {
    this.words.forEach((word, i) => word.id = i);
  }

}
