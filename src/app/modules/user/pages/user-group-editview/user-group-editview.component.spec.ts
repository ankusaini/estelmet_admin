import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupEditviewComponent } from './user-group-editview.component';

describe('UserGroupEditviewComponent', () => {
  let component: UserGroupEditviewComponent;
  let fixture: ComponentFixture<UserGroupEditviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGroupEditviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupEditviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
