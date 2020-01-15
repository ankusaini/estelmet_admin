import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTradleadComponent } from './create-tradlead.component';

describe('CreateTradleadComponent', () => {
  let component: CreateTradleadComponent;
  let fixture: ComponentFixture<CreateTradleadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTradleadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTradleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
