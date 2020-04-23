import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDetailsCreateLotComponent } from './select-details-create-lot.component';

describe('SelectDetailsCreateLotComponent', () => {
  let component: SelectDetailsCreateLotComponent;
  let fixture: ComponentFixture<SelectDetailsCreateLotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDetailsCreateLotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDetailsCreateLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
