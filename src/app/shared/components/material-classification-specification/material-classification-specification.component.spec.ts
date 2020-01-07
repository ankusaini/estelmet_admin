import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialClassificationSpecificationComponent } from './material-classification-specification.component';

describe('MaterialClassificationSpecificationComponent', () => {
  let component: MaterialClassificationSpecificationComponent;
  let fixture: ComponentFixture<MaterialClassificationSpecificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialClassificationSpecificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialClassificationSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
