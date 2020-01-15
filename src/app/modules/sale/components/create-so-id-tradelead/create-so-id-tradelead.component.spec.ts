import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSoIdTradeleadComponent } from './create-so-id-tradelead.component';

describe('CreateSoIdTradeleadComponent', () => {
  let component: CreateSoIdTradeleadComponent;
  let fixture: ComponentFixture<CreateSoIdTradeleadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSoIdTradeleadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSoIdTradeleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
