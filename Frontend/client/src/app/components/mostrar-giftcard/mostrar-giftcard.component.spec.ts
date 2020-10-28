import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarGiftcardComponent } from './mostrar-giftcard.component';

describe('MostrarGiftcardComponent', () => {
  let component: MostrarGiftcardComponent;
  let fixture: ComponentFixture<MostrarGiftcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarGiftcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarGiftcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
