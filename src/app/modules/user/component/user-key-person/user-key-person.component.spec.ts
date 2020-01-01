import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserKeyPersonComponent } from './user-key-person.component';

describe('UserKeyPersonComponent', () => {
  let component: UserKeyPersonComponent;
  let fixture: ComponentFixture<UserKeyPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserKeyPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserKeyPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
