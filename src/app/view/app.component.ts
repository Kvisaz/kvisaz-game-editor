import {Component} from '@angular/core';
import {WordService} from '../logic/word.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kvisaz-game-editor';

  constructor(private wordService: WordService) {
  }

  isReady() {
    return this.wordService.isReady();
  }
}
