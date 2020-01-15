import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSoIdComponent } from './create-so-id.component';

describe('CreateSoIdComponent', () => {
  let component: CreateSoIdComponent;
  let fixture: ComponentFixture<CreateSoIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSoIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSoIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
