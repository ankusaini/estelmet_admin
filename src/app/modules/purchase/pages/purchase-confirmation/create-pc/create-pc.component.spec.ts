import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePcComponent } from './create-pc.component';

describe('CreatePcComponent', () => {
  let component: CreatePcComponent;
  let fixture: ComponentFixture<CreatePcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
