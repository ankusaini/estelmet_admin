import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotApprovalComponent } from './lot-approval.component';

describe('LotApprovalComponent', () => {
  let component: LotApprovalComponent;
  let fixture: ComponentFixture<LotApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
