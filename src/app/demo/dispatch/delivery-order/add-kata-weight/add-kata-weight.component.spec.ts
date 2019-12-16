/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddKataWeightComponent } from './add-kata-weight.component';

describe('AddKataWeightComponent', () => {
  let component: AddKataWeightComponent;
  let fixture: ComponentFixture<AddKataWeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKataWeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKataWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
