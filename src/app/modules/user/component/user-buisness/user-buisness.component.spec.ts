import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBuisnessComponent } from './user-buisness.component';

describe('UserBuisnessComponent', () => {
  let component: UserBuisnessComponent;
  let fixture: ComponentFixture<UserBuisnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBuisnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBuisnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
