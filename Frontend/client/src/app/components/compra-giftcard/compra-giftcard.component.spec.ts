import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraGiftcardComponent } from './compra-giftcard.component';

describe('CompraGiftcardComponent', () => {
  let component: CompraGiftcardComponent;
  let fixture: ComponentFixture<CompraGiftcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraGiftcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraGiftcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
