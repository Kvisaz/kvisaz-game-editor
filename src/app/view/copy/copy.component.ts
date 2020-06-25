import {Component} from '@angular/core';
import {StringService} from '../../logic/string.service';
import {MainLogicService} from '../../logic/main-logic.service';
import {Clipboard} from '@angular/cdk/clipboard';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.css']
})
export class CopyComponent {

  constructor(
    public strings: StringService,
    private mainLogic: MainLogicService,
    private clipboard: Clipboard,
    private matSnackBar: MatSnackBar
  ) {
  }

  getUrl(): string {
    return this.mainLogic.getDataUrl();
  }

  onCopyClick() {
    this.clipboard.copy(this.mainLogic.getDataUrl());
    this.matSnackBar.open(this.strings.get().copyMessage, this.strings.get().close);
  }
}
