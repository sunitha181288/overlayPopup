import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantPopupComponent } from './merchant-popup.component';

describe('MerchantPopupComponent', () => {
  let component: MerchantPopupComponent;
  let fixture: ComponentFixture<MerchantPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
