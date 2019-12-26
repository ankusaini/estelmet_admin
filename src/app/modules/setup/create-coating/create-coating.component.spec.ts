import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCoatingComponent } from './create-coating.component';

describe('CreateCoatingComponent', () => {
  let component: CreateCoatingComponent;
  let fixture: ComponentFixture<CreateCoatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCoatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCoatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
