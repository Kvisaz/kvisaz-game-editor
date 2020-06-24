import {IWord} from '../abstract/WordEditorInterfaces';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Repository {
  private key = 'kvisaz-game-editor';

  constructor() {
  }

  save(words: Array<IWord>): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        const str = JSON.stringify(words);
        localStorage.setItem(this.key, str);
        resolve(true);
      } catch (e) {
        reject(e);
      }
    });
  }

  load(): Promise<Array<IWord>> {
    return new Promise<Array<IWord>>((resolve, reject) => {
      try {
        const str = localStorage.getItem(this.key);
        const dict: Array<IWord> = JSON.parse(str);
        resolve(dict);
      } catch (e) {
        reject(e);
      }
    });
  }
}
