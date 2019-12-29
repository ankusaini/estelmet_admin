import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGroupIdComponent } from './create-group-id.component';

describe('CreateGroupIdComponent', () => {
  let component: CreateGroupIdComponent;
  let fixture: ComponentFixture<CreateGroupIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGroupIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGroupIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
