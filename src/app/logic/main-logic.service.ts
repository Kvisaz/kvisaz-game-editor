import {Injectable} from '@angular/core';
import {WordService} from './word.service';
import {DataUrlService} from './data-url.service';
import {IWord} from '../abstract/WordEditorInterfaces';
import {Repository} from './Repository';
import {DictionaryUrlParamConverter} from './urlencoder/paramconverters/DictionaryUrlParamConverter';
import {UrlParams} from './urlencoder/UrlParams';
import {ConfigService} from '../config/ConfigService';
import {Config} from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class MainLogicService {

  constructor(
    private wordService: WordService,
    private dataUrlService: DataUrlService,
    private repository: Repository,
    private configService: ConfigService
  ) {
    this.dataUrlService.setBaseUrl(this.getConfig().defaultGameUrl);
  }

  onStart() {
    setTimeout(() => {
      this.loadDictionary();
    }, 550);
  }

  isDictionaryLoaded(): boolean {
    return this.wordService.isReady();
  }

  isUrlReady(): boolean {
    return this.dataUrlService.isReady();
  }

  getWords(): Array<IWord> {
    return this.wordService.getWords();
  }

  addWord(one: string, two: string) {
    this.wordService.addWord(one, two);
    this.save();
    this.updateUrl();
  }

  saveItem(one: string, two: string, id: number) {
    this.wordService.saveItem(one, two, id);
    this.save();
    this.updateUrl();
  }

  remove(id: number) {
    this.wordService.remove(id);
    this.save();
    this.updateUrl();
  }

  getConfig(): Config {
    return this.configService.get();
  }

  getDataUrl():string {
    return this.dataUrlService.getUrl();
  }

  /***********************
   *  PRIVATE
   **********************/
  private loadDictionary() {
    this.repository.load()
      .then(words => this.wordService.setWords(words || []))
      .catch(e => {
        console.warn('load error ', e);
        this.wordService.setWords([]);
      });
  }

  private save() {
    this.repository.save(this.wordService.getWords())
      .then(success => console.log('saved...'))
      .catch(e => console.warn(`save error: ${e}`));
  }

  private updateUrl(){
    this.dataUrlService.encodeDictionary(this.wordService.getWords());
  }

  // TODO delete after test
  private testUrlCoding() {
    const dictionaryUrlParamConverter = new DictionaryUrlParamConverter();
    const encodedUrl = UrlParams.getUrl(
      'http://kvisaz.com/game.html',
      {
        d: dictionaryUrlParamConverter.encode(this.wordService.getWords())
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


}
