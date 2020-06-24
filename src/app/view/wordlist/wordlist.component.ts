import {Component, OnInit} from '@angular/core';
import {WordService} from '../../logic/word.service';
import {IWord} from '../../abstract/AbstractInterfaces';

@Component({
  selector: 'app-wordlist',
  templateUrl: './wordlist.component.html',
  styleUrls: ['./wordlist.component.css']
})
export class WordlistComponent implements OnInit {

  constructor(private wordService: WordService) {
  }

  ngOnInit(): void {
  }

  getWords(): Array<IWord> {
    return this.wordService.getWords();
  }
}
