import {Injectable} from '@angular/core';
import {IStringSource} from './string.interfaces';
import {StringsRu} from '../config/StringsRu';

@Injectable({
  providedIn: 'root'
})
export class StringService {
  private stringSource: IStringSource;

  constructor() {
    this.stringSource = StringsRu;
  }

  get(): IStringSource {
    return this.stringSource;
  }
}
