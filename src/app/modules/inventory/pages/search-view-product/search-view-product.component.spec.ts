import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchViewProductComponent } from './search-view-product.component';

describe('SearchViewProductComponent', () => {
  let component: SearchViewProductComponent;
  let fixture: ComponentFixture<SearchViewProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchViewProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchViewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
