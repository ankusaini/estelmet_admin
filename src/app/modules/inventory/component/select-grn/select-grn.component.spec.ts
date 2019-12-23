import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGrnComponent } from './select-grn.component';

describe('SelectGrnComponent', () => {
  let component: SelectGrnComponent;
  let fixture: ComponentFixture<SelectGrnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectGrnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectGrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
