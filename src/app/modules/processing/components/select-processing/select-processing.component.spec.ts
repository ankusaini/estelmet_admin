import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProcessingComponent } from './select-processing.component';

describe('SelectProcessingComponent', () => {
  let component: SelectProcessingComponent;
  let fixture: ComponentFixture<SelectProcessingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectProcessingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
