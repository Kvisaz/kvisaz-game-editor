import {Injectable} from '@angular/core';
import {IWord} from '../abstract/WordEditorInterfaces';
import {DictionaryUrlParamConverter} from './urlencoder/paramconverters/DictionaryUrlParamConverter';
import {UrlParams} from './urlencoder/UrlParams';

type Params = {
  [name: string]: string
};

@Injectable({
  providedIn: 'root'
})
export class DataUrlService {
  private url: string;
  private dictionaryUrlParamConverter = new DictionaryUrlParamConverter();
  private params: Params = {};
  private baseUrl: string;

  constructor() {

  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  encodeDictionary(words: Array<IWord>) {
    this.addParam('d', this.dictionaryUrlParamConverter.encode(words));
  }

  isReady(): boolean {
    return this.url != null && this.url.length > 0;
  }

  hasParams(): boolean {
    return Object.keys(this.params).length > 0;
  }

  getUrl() {
    return this.url;
  }

  private addParam(name: string, value: string) {
    if (value == null || value.trim().length === 0) {
      delete this.params[name];
    } else {
      this.params[name] = value;
    }
    this.url = UrlParams.getUrl(this.baseUrl, this.params);
  }
}
