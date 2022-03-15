import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCitiesComponent } from './add-cities.component';

describe('AddCitiesComponent', () => {
  let component: AddCitiesComponent;
  let fixture: ComponentFixture<AddCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
