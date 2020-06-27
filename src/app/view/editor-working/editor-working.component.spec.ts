import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorWorkingComponent } from './editor-working.component';

describe('EditorWorkingComponent', () => {
  let component: EditorWorkingComponent;
  let fixture: ComponentFixture<EditorWorkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorWorkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
