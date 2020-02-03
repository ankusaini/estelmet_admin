import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoEmailSmsComponent } from './po-email-sms.component';

describe('PoEmailSmsComponent', () => {
  let component: PoEmailSmsComponent;
  let fixture: ComponentFixture<PoEmailSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoEmailSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoEmailSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
