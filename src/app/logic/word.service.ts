import {Injectable} from '@angular/core';
import {IWord} from '../abstract/WordEditorInterfaces';
import {Repository} from './Repository';
import {UrlParams} from './urlencoder/UrlParams';
import {DictionaryUrlParamConverter} from './urlencoder/paramconverters/DictionaryUrlParamConverter';

type IWordOperation = (words: Array<IWord>, index: number) => void;

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private words: Array<IWord>;
  private isWordsReady = false;

  private urlParams = new UrlParams();

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
      console.log(`${label} success. Words: `, this.words);
      this.repository.save(this.words)
        .then(success => console.log('saved...'))
        .catch(e => console.warn(`${label} error: ${e}`));
    } else {
      console.warn(`no word with id ${id}`);
    }

    // delete after test
    const dictionaryUrlParamConverter = new DictionaryUrlParamConverter();
    const encodedUrl = UrlParams.getUrl(
      'http://kvisaz.com/game.html',
      {
        d: dictionaryUrlParamConverter.encode(this.words)
      });
    console.log('encodedUrl: ', encodedUrl);
    const encodedUrl2 = 'http://kvisaz.com/game.html?d=knight@%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8C@@mother@%D0%BC%D0%B0%D0%BC%D0%B0@@%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0@dog';
    console.log('encodedUrl2: ', encodedUrl2);

    const urlVars = UrlParams.getVars(encodedUrl2);
    console.log('urlVars: ', urlVars);

    let dictionary;
    const dictUrlParam = urlVars.d;
    if (dictUrlParam != null) {
      dictionary = dictionaryUrlParamConverter.decode(dictUrlParam);
    }

    console.log('dictionary: ', dictionary);
  }

  private onLoad(words: Array<IWord>) {
    this.words = words || [];
    this.isWordsReady = true;
    console.log(`onLoad: `, words);
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
