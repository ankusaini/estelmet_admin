import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlEditComponent } from './tl-edit.component';

describe('TlEditComponent', () => {
  let component: TlEditComponent;
  let fixture: ComponentFixture<TlEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
