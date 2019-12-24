import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdListWithProdIdComponent } from './prod-list-with-prod-id.component';

describe('ProdListWithProdIdComponent', () => {
  let component: ProdListWithProdIdComponent;
  let fixture: ComponentFixture<ProdListWithProdIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdListWithProdIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdListWithProdIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
