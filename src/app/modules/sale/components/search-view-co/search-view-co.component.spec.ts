import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchViewCOComponent } from './search-view-co.component';

describe('SearchViewCOComponent', () => {
  let component: SearchViewCOComponent;
  let fixture: ComponentFixture<SearchViewCOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchViewCOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchViewCOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
