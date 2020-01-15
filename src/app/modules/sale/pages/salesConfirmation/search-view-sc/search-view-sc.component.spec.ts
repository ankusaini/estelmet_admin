import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchViewScComponent } from './search-view-sc.component';

describe('SearchViewScComponent', () => {
  let component: SearchViewScComponent;
  let fixture: ComponentFixture<SearchViewScComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchViewScComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchViewScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
