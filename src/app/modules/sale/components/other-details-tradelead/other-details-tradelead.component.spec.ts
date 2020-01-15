import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherDetailsTradeleadComponent } from './other-details-tradelead.component';

describe('OtherDetailsTradeleadComponent', () => {
  let component: OtherDetailsTradeleadComponent;
  let fixture: ComponentFixture<OtherDetailsTradeleadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherDetailsTradeleadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherDetailsTradeleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
