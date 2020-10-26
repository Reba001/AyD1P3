import { Component, OnInit } from '@angular/core';
import { Giftcard } from  '../../models/giftcard';
import { GiftcardService } from '../../services/giftcard/giftcard.service';
import { Router } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mostrar-giftcard',
  templateUrl: './mostrar-giftcard.component.html',
  styleUrls: ['./mostrar-giftcard.component.css']
})
export class MostrarGiftcardComponent implements OnInit {
  giftCards: Giftcard[] = [];
  faStar = faStar;
  faEdit = faEdit;
  faTimesCircle = faTimesCircle;
  faCopy = faCopy;

  constructor(private giftcardService:GiftcardService,
    private router:Router) {

    }

  ngOnInit(): void {
    this.obtenerGiftCards();
  }

  obtenerGiftCards(){
    this.giftcardService.getGiftCards().
    subscribe(
      giftcards => {
        console.log(giftcards);
        this.giftCards = giftcards;
        console.log(this.giftCards);
      }
    );
  }


}
