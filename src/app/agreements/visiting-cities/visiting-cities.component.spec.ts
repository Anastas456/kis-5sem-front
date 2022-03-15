import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitingCitiesComponent } from './visiting-cities.component';

describe('VisitingCitiesComponent', () => {
  let component: VisitingCitiesComponent;
  let fixture: ComponentFixture<VisitingCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitingCitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitingCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
