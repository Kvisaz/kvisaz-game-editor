import {Component, OnInit} from '@angular/core';
import {IWord} from '../../../abstract/WordEditorInterfaces';
import {MainLogicService} from '../../../logic/main-logic.service';

@Component({
  selector: 'app-wordlist',
  templateUrl: './wordlist.component.html',
  styleUrls: ['./wordlist.component.css']
})
export class WordlistComponent implements OnInit {

  constructor(private mainLogic: MainLogicService) {
  }

  ngOnInit(): void {
  }

  getWords(): Array<IWord> {
    return this.mainLogic.getWords();
  }
}
