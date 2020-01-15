import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTradleadComponent } from './search-tradlead.component';

describe('SearchTradleadComponent', () => {
  let component: SearchTradleadComponent;
  let fixture: ComponentFixture<SearchTradleadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTradleadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTradleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
