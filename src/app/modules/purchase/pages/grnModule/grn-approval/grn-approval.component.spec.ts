import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnApprovalComponent } from './grn-approval.component';

describe('GrnApprovalComponent', () => {
  let component: GrnApprovalComponent;
  let fixture: ComponentFixture<GrnApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
