/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DoEditComponent } from './do-edit.component';

describe('DoEditComponent', () => {
  let component: DoEditComponent;
  let fixture: ComponentFixture<DoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
