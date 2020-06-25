import { Component, OnInit } from '@angular/core';
import {StringService} from '../../logic/string.service';

@Component({
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.css']
})
export class CopyComponent implements OnInit {

  constructor(public strings: StringService) { }

  ngOnInit(): void {
  }

}
