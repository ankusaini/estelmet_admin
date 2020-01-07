/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MrEditComponent } from './mr-edit.component';

describe('MrEditComponent', () => {
  let component: MrEditComponent;
  let fixture: ComponentFixture<MrEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
