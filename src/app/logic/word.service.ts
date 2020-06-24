import {Injectable} from '@angular/core';
import {IWord} from '../abstract/WordEditorInterfaces';
import {Repository} from './Repository';

type IWordOperation = (words: Array<IWord>, index: number) => void;

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private words: Array<IWord>;
  private isWordsReady = false;

  constructor(private repository: Repository) {
    setTimeout(() => {
      this.repository.load()
        .then(words => this.onLoad(words))
        .catch(e => this.onLoadError(e));
    }, 550);
  }

  isReady(): boolean {
    return this.isWordsReady;
  }

  getWords(): Array<IWord> {
    return this.words;
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
      isIdSuccess = true;
    }

    if (isIdSuccess) {
      console.log('${label} succes. Words: ', this.words);
      this.repository.save(this.words)
        .then(success => console.log('saved...'))
        .catch(e => console.warn(`${label} error: ${e}`));
    } else {
      console.warn(`no word with id ${id}`);
    }
  }

  private onLoad(words: Array<IWord>) {
    this.words = words || [];
    this.isWordsReady = true;
    console.log(`onLoad: ${words}`);
  }

  private onLoadError(e: any) {
    this.words = [];
    this.isWordsReady = true;
    console.log(`onLoadError: ${e}`);
  }

  private createInitWords(): Array<IWord> {
    const words = [
      {one: 'word', two: 'слово', id: 1},
      {one: 'one', two: 'один', id: 2},
      {one: 'mom', two: 'мама', id: 3}
    ];
    this.buildIds(words);
    return words;
  }

  private buildIds(words: Array<IWord>) {
    words.forEach((word, i) => word.id = i);
  }
}
