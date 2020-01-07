import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductCartComponent } from './add-product-cart.component';

describe('AddProductCartComponent', () => {
  let component: AddProductCartComponent;
  let fixture: ComponentFixture<AddProductCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
