import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOriginComponent } from './create-origin.component';

describe('CreateOriginComponent', () => {
  let component: CreateOriginComponent;
  let fixture: ComponentFixture<CreateOriginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOriginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
