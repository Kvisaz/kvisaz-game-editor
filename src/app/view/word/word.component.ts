import {Component, Input, OnInit} from '@angular/core';
import {WordService} from '../../logic/word.service';
import {StringService} from '../../logic/string.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  @Input() one: string;
  @Input() two: string;
  @Input() id: number;

  private blocked = false;

  constructor(
    private wordService: WordService,
    public strings: StringService
  ) {
  }

  ngOnInit(): void {
  }

  remove() {
    if (this.blocked) {
      return;
    }
    this.blocked = true;
    console.log(`remove ${this.id}`);
    this.wordService.remove(this.id);
  }
}
