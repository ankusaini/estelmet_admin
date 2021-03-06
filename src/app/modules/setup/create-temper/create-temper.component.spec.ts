import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTemperComponent } from './create-temper.component';

describe('CreateTemperComponent', () => {
  let component: CreateTemperComponent;
  let fixture: ComponentFixture<CreateTemperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTemperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTemperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
