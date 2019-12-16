/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MergeProductComponent } from './merge-product.component';

describe('MergeProductComponent', () => {
  let component: MergeProductComponent;
  let fixture: ComponentFixture<MergeProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
