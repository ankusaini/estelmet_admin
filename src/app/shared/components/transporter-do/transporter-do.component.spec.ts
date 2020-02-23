import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporterDoComponent } from './transporter-do.component';

describe('TransporterDoComponent', () => {
  let component: TransporterDoComponent;
  let fixture: ComponentFixture<TransporterDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransporterDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransporterDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
