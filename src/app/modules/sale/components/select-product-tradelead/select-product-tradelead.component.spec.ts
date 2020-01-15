import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProductTradeleadComponent } from './select-product-tradelead.component';

describe('SelectProductTradeleadComponent', () => {
  let component: SelectProductTradeleadComponent;
  let fixture: ComponentFixture<SelectProductTradeleadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectProductTradeleadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProductTradeleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
