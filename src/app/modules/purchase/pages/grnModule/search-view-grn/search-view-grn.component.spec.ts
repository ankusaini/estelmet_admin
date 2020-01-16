import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchViewGrnComponent } from './search-view-grn.component';

describe('SearchViewGrnComponent', () => {
  let component: SearchViewGrnComponent;
  let fixture: ComponentFixture<SearchViewGrnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchViewGrnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchViewGrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
