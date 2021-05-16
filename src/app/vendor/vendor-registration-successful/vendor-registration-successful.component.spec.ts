import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorRegistrationSuccessfulComponent } from './vendor-registration-successful.component';

describe('VendorRegistrationSuccessfulComponent', () => {
  let component: VendorRegistrationSuccessfulComponent;
  let fixture: ComponentFixture<VendorRegistrationSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorRegistrationSuccessfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorRegistrationSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
