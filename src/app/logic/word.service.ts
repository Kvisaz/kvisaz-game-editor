import {Injectable} from '@angular/core';
import {IWord} from '../abstract/WordEditorInterfaces';

type IWordOperation = (words: Array<IWord>, index: number) => void;

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private words: Array<IWord>;

  constructor() {
  }

  isReady(): boolean {
    return this.words != null;
  }

  getWords(): Array<IWord> {
    return this.words;
  }

  setWords(words: Array<IWord>) {
    this.words = [...words];
  }

  addWord(one: string, two: string) {
    this.operateWords('add', null, (words, index) => {
      const id = -1;
      words.push({one, two, id});
      this.buildIds(words);
    });
  }


  saveItem(one: string, two: string, id: number) {
    this.operateWords('change', id, (words, index) => {
      words[index] = {one, two, id};
    });
  }

  remove(id: number) {
    this.operateWords('remove', id, (words, index) => {
      words.splice(index, 1);
    });
  }

  private operateWords(label: string, id: number, operation: IWordOperation) {
    let isIdSuccess = false;
    const l = this.words.length;

    if (id != null) {
      for (let i = 0; i < l; i++) {
        if (this.words[i].id === id) {
          operation(this.words, i);
          isIdSuccess = true;
          break;
        }
      }
    } else {
      operation(this.words, 0);
    }
  }

  private buildIds(words: Array<IWord>) {
    words.forEach((word, i) => word.id = i);
  }
}
