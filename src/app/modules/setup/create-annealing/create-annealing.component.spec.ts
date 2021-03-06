import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnnealingComponent } from './create-annealing.component';

describe('CreateAnnealingComponent', () => {
  let component: CreateAnnealingComponent;
  let fixture: ComponentFixture<CreateAnnealingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAnnealingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnnealingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
