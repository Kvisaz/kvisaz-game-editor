import { Component, OnInit } from '@angular/core';
import {MainLogicService} from '../../logic/main-logic.service';

@Component({
  selector: 'app-editor-working',
  templateUrl: './editor-working.component.html',
  styleUrls: ['./editor-working.component.css']
})
export class EditorWorkingComponent implements OnInit {

  constructor(private mainLogic: MainLogicService) { }

  ngOnInit(): void {
  }

  isCopyReady() {
    return this.mainLogic.isUrlReady();
  }
}
