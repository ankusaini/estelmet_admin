import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHardnessComponent } from './create-hardness.component';

describe('CreateHardnessComponent', () => {
  let component: CreateHardnessComponent;
  let fixture: ComponentFixture<CreateHardnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHardnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHardnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
