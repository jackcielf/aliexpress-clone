import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferFirstPurchaseComponent } from './offer-first-purchase.component';

describe('OfferFirstPurchaseComponent', () => {
  let component: OfferFirstPurchaseComponent;
  let fixture: ComponentFixture<OfferFirstPurchaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferFirstPurchaseComponent]
    });
    fixture = TestBed.createComponent(OfferFirstPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
