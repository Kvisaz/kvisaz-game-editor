import {Component} from '@angular/core';
import {WordService} from '../logic/word.service';
import {MainLogicService} from '../logic/main-logic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kvisaz-game-editor';

  constructor(private mainLogic: MainLogicService) {
    mainLogic.onStart();
  }

  isDictionaryReady() {
    return this.mainLogic.isDictionaryLoaded();
  }
}
