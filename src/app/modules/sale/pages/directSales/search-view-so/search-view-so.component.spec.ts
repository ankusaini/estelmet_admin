import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchViewSoComponent } from './search-view-so.component';

describe('SearchViewSoComponent', () => {
  let component: SearchViewSoComponent;
  let fixture: ComponentFixture<SearchViewSoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchViewSoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchViewSoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
