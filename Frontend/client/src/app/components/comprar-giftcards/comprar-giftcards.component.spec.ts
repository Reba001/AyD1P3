import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarGiftcardsComponent } from './comprar-giftcards.component';

describe('ComprarGiftcardsComponent', () => {
  let component: ComprarGiftcardsComponent;
  let fixture: ComponentFixture<ComprarGiftcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprarGiftcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprarGiftcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
