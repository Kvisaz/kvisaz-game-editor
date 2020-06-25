import {Component, OnInit} from '@angular/core';
import {StringService} from '../../logic/string.service';
import {MainLogicService} from '../../logic/main-logic.service';

@Component({
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.css']
})
export class CopyComponent {

  constructor(
    public strings: StringService,
    private mainLogic: MainLogicService
  ) {
  }

  getUrl(): string {
    return this.mainLogic.getDataUrl();
  }

}
