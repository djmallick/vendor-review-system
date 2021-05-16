import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodieRegistrationComponent } from './foodie-registration.component';

describe('FoodieRegistrationComponent', () => {
  let component: FoodieRegistrationComponent;
  let fixture: ComponentFixture<FoodieRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodieRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodieRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
