import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMRComponent } from './view-mr.component';

describe('ViewMRComponent', () => {
  let component: ViewMRComponent;
  let fixture: ComponentFixture<ViewMRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
