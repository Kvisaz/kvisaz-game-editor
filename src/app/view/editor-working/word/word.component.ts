import {Component, Input, OnInit} from '@angular/core';
import {StringService} from '../../../logic/string.service';
import {MainLogicService} from '../../../logic/main-logic.service';

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
  isChanged = false;

  constructor(
    private mainLogic: MainLogicService,
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
    this.mainLogic.remove(this.id);
  }

  onInputChange() {
    this.isChanged = true;
  }

  saveItem() {
    this.mainLogic.saveItem(this.one, this.two, this.id);
    // this.isChanged = true; // не нужно, так как список обновится
  }

  swap() {
    const oneTmp = this.one;
    this.one = this.two;
    this.two = oneTmp;
    this.saveItem();
  }
}
