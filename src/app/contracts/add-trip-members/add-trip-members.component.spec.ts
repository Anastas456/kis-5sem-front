import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTripMembersComponent } from './add-trip-members.component';

describe('AddTripMembersComponent', () => {
  let component: AddTripMembersComponent;
  let fixture: ComponentFixture<AddTripMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTripMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTripMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
