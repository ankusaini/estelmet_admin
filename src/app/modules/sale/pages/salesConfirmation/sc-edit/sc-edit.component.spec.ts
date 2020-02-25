import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScEditComponent } from './sc-edit.component';

describe('ScEditComponent', () => {
  let component: ScEditComponent;
  let fixture: ComponentFixture<ScEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
