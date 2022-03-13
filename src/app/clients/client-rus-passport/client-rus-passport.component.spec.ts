import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRusPassportComponent } from './client-rus-passport.component';

describe('ClientRusPassportComponent', () => {
  let component: ClientRusPassportComponent;
  let fixture: ComponentFixture<ClientRusPassportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientRusPassportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientRusPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
