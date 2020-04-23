import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchViewOfferComponent } from './search-view-offer.component';

describe('SearchViewOfferComponent', () => {
  let component: SearchViewOfferComponent;
  let fixture: ComponentFixture<SearchViewOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchViewOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchViewOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
