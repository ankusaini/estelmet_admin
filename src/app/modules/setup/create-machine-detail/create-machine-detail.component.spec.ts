import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMachineDetailComponent } from './create-machine-detail.component';

describe('CreateMachineDetailComponent', () => {
  let component: CreateMachineDetailComponent;
  let fixture: ComponentFixture<CreateMachineDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMachineDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMachineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
