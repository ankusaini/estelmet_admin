import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTradeDetailsComponent } from './user-trade-details.component';

describe('UserTradeDetailsComponent', () => {
  let component: UserTradeDetailsComponent;
  let fixture: ComponentFixture<UserTradeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTradeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTradeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
