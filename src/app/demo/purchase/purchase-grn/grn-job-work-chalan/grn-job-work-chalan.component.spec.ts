/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GrnJobWorkChalanComponent } from './grn-job-work-chalan.component';

describe('GrnJobWorkChalanComponent', () => {
  let component: GrnJobWorkChalanComponent;
  let fixture: ComponentFixture<GrnJobWorkChalanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnJobWorkChalanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnJobWorkChalanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
