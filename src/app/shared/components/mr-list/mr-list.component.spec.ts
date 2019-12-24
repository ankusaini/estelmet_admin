import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrListComponent } from './mr-list.component';

describe('MrListComponent', () => {
  let component: MrListComponent;
  let fixture: ComponentFixture<MrListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
