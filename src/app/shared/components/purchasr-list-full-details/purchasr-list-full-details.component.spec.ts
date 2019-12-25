import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasrListFullDetailsComponent } from './purchasr-list-full-details.component';

describe('PurchasrListFullDetailsComponent', () => {
  let component: PurchasrListFullDetailsComponent;
  let fixture: ComponentFixture<PurchasrListFullDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasrListFullDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasrListFullDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
