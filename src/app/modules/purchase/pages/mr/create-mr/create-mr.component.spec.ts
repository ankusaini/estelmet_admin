import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMRComponent } from './create-mr.component';

describe('CreateMRComponent', () => {
  let component: CreateMRComponent;
  let fixture: ComponentFixture<CreateMRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
