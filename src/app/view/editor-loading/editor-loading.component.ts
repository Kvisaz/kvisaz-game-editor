import { Component, OnInit } from '@angular/core';
import {MainLogicService} from '../../logic/main-logic.service';

@Component({
  selector: 'app-editor-loading',
  templateUrl: './editor-loading.component.html',
  styleUrls: ['./editor-loading.component.css']
})
export class EditorLoadingComponent implements OnInit {

  constructor(private mainLogic: MainLogicService) { }

  ngOnInit(): void {
  }

}
