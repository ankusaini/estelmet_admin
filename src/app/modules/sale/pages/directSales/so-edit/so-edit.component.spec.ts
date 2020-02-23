import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoEditComponent } from './so-edit.component';

describe('SoEditComponent', () => {
  let component: SoEditComponent;
  let fixture: ComponentFixture<SoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
