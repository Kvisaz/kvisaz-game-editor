import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordInputComponent } from './word-input.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {NO_ERRORS_SCHEMA} from '@angular/core';


describe('WordInputComponent', () => {
  let component: WordInputComponent;
  let fixture: ComponentFixture<WordInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordInputComponent ],
      imports: [ MatSnackBarModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
