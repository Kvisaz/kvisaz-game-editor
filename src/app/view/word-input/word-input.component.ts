import {Component, OnInit} from '@angular/core';
import {StringService} from '../../logic/string.service';
import {FormGroup} from '@angular/forms';
import {WordService} from '../../logic/word.service';

@Component({
  selector: 'app-word-input',
  templateUrl: './word-input.component.html',
  styleUrls: ['./word-input.component.css']
})
export class WordInputComponent implements OnInit {
  wordOne: string;
  wordTwo: string;
  form: FormGroup;

  constructor(
    public strings: StringService,
    private wordService: WordService
    ) {
  }

  ngOnInit(): void {
  }

  onClick() {
    console.log(`${this.wordOne} : ${this.wordTwo}`);
    this.wordService.addWord(this.wordOne, this.wordTwo);
  }
}
