import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMrIdComponent } from './create-mr-id.component';

describe('CreateMrIdComponent', () => {
  let component: CreateMrIdComponent;
  let fixture: ComponentFixture<CreateMrIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMrIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMrIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
