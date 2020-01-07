import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeypersonDetailsComponent } from './keyperson-details.component';

describe('KeypersonDetailsComponent', () => {
  let component: KeypersonDetailsComponent;
  let fixture: ComponentFixture<KeypersonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeypersonDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeypersonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
