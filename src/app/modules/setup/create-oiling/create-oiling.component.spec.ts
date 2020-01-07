import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOilingComponent } from './create-oiling.component';

describe('CreateOilingComponent', () => {
  let component: CreateOilingComponent;
  let fixture: ComponentFixture<CreateOilingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOilingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
