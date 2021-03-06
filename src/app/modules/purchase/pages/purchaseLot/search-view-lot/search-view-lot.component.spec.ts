import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchViewLotComponent } from './search-view-lot.component';

describe('SearchViewLotComponent', () => {
  let component: SearchViewLotComponent;
  let fixture: ComponentFixture<SearchViewLotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchViewLotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchViewLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
