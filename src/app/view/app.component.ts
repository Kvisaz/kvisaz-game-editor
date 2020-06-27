import {Component, OnInit} from '@angular/core';
import {MainLogicService} from '../logic/main-logic.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kvisaz-game-editor';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private mainLogic: MainLogicService,
    private breakpointObserver: BreakpointObserver
  ) {
  }

  ngOnInit(): void {
    this.mainLogic.onStart();
  }

  isDictionaryReady() {
    return this.mainLogic.isDictionaryLoaded();
  }

  isCopyReady() {
    return this.mainLogic.isUrlReady();
  }
}
