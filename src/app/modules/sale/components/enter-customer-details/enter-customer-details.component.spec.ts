import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterCustomerDetailsComponent } from './enter-customer-details.component';

describe('EnterCustomerDetailsComponent', () => {
  let component: EnterCustomerDetailsComponent;
  let fixture: ComponentFixture<EnterCustomerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterCustomerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
