import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAuctionIdComponent } from './create-auction-id.component';

describe('CreateAuctionIdComponent', () => {
  let component: CreateAuctionIdComponent;
  let fixture: ComponentFixture<CreateAuctionIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAuctionIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAuctionIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
