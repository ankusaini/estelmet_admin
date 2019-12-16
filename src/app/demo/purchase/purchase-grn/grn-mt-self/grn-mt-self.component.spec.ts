/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GrnMtSelfComponent } from './grn-mt-self.component';

describe('GrnMtSelfComponent', () => {
  let component: GrnMtSelfComponent;
  let fixture: ComponentFixture<GrnMtSelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnMtSelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnMtSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
