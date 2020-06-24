import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {StringService} from '../../logic/string.service';
import {FormGroup} from '@angular/forms';
import {WordService} from '../../logic/word.service';
import {MatSnackBar} from '@angular/material/snack-bar';

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
    private wordService: WordService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
  }

  onClick() {
    const w1 = this.wordOne ? this.wordOne.trim() : '';
    const w2 = this.wordTwo ? this.wordTwo.trim() : '';

    if (this.isError(w1, w2)) {
      return;
    }
    console.log(`${this.wordOne} : ${this.wordTwo}`);
    this.wordService.addWord(this.wordOne, this.wordTwo);
  }

  private isError(w1: string, w2: string): boolean {
    const isErrorEqual = w1 === w2;
    const isErrorVoidOne = w1.length === 0;
    const isErrorVoidTwo = w1.length === 0;
    const isError = isErrorEqual || isErrorVoidOne || isErrorVoidTwo;

    if (isError) {
      const message = `${this.strings.get().inputErrorCommon}
      1: (${w1}) 2: (${w2})`;
      this.message(message);
    }

    return isError;
  }

  private message(message: string, btLabel = this.strings.get().close) {
    this.snackBar.open(message, btLabel, {
      duration: 3000,
      verticalPosition: 'top'
    });
  }
}
