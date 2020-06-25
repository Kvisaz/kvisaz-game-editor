import {Component, OnInit} from '@angular/core';
import {MainLogicService} from '../logic/main-logic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kvisaz-game-editor';

  constructor(private mainLogic: MainLogicService) {
  }

  ngOnInit(): void {
    this.mainLogic.onStart();
  }

  isDictionaryReady() {
    return this.mainLogic.isDictionaryLoaded();
  }

  isCopyReady() {
    return this.mainLogic.isUrlReady();
  }
}
