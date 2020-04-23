import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoDetailsComponent } from './co-details.component';

describe('CoDetailsComponent', () => {
  let component: CoDetailsComponent;
  let fixture: ComponentFixture<CoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
