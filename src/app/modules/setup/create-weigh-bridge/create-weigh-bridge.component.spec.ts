import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWeighBridgeComponent } from './create-weigh-bridge.component';

describe('CreateWeighBridgeComponent', () => {
  let component: CreateWeighBridgeComponent;
  let fixture: ComponentFixture<CreateWeighBridgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWeighBridgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWeighBridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
