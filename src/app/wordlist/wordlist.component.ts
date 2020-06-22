import {Component, OnInit} from '@angular/core';
import {WordServiceService} from '../logic/word-service.service';
import {IWord} from '../abstract/AbstractInterfaces';

@Component({
  selector: 'app-wordlist',
  templateUrl: './wordlist.component.html',
  styleUrls: ['./wordlist.component.css']
})
export class WordlistComponent implements OnInit {

  constructor(private wordService: WordServiceService) {
  }

  ngOnInit(): void {
  }

  getWords(): Array<IWord> {
    return this.wordService.getWords();
  }
}
