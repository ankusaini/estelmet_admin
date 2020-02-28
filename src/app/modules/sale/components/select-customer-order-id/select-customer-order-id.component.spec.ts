import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCustomerOrderIdComponent } from './select-customer-order-id.component';

describe('SelectCustomerOrderIdComponent', () => {
  let component: SelectCustomerOrderIdComponent;
  let fixture: ComponentFixture<SelectCustomerOrderIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCustomerOrderIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCustomerOrderIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
