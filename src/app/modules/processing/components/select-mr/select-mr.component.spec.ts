import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMrComponent } from './select-mr.component';

describe('SelectMrComponent', () => {
  let component: SelectMrComponent;
  let fixture: ComponentFixture<SelectMrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
