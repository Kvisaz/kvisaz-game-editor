import {Injectable} from '@angular/core';
import {Config} from './config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config = new Config();

  get(): Config {
    return this.config;
  }
}
