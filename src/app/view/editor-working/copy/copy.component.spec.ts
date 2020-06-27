import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyComponent } from './copy.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

describe('CopyComponent', () => {
  let component: CopyComponent;
  let fixture: ComponentFixture<CopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyComponent ],
      imports: [ MatSnackBarModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
