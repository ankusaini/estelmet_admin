import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScApprovalComponent } from './sc-approval.component';

describe('ScApprovalComponent', () => {
  let component: ScApprovalComponent;
  let fixture: ComponentFixture<ScApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
