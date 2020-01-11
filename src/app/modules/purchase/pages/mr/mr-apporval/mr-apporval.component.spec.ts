import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrApporvalComponent } from './mr-apporval.component';

describe('MrApporvalComponent', () => {
  let component: MrApporvalComponent;
  let fixture: ComponentFixture<MrApporvalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrApporvalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrApporvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
