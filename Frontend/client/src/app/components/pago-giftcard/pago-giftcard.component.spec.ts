import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoGiftcardComponent } from './pago-giftcard.component';

describe('PagoGiftcardComponent', () => {
  let component: PagoGiftcardComponent;
  let fixture: ComponentFixture<PagoGiftcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoGiftcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoGiftcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
