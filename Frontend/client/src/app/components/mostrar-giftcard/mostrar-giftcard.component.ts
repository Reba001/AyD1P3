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
  compraGift:Giftcard[] = [];
   faStar = faStar;
  faEdit = faEdit;
  faTimesCircle = faTimesCircle;
  faCopy = faCopy;

  constructor(private giftcardService:GiftcardService,
    private router:Router) {
      //localStorage.removeItem("carrito");
      //localStorage.removeItem("currentUser");
      

    }

  ngOnInit(): void {
    //localStorage.removeItem("carrito");
    this.obtenerGiftCards();
  }

  async obtenerGiftCards(){
    this.giftCards = await this.giftcardService.getGiftCards().toPromise();
    
    let valores:any = await this.giftcardService.getValores().toPromise();
    console.log(valores);

    this.giftCards.forEach(card =>{
      card.precios = [];
      card.cantidad = 1;
      card.availability.forEach(e =>{
        valores.forEach(element => {
          if(e == element.id){
            card.precios.push(element.total);
          }
        
        });

      });

        

    });      
    console.log(this.giftCards);

  }

  comprar(gift:Giftcard){
    console.log(gift);

    var tempog = this.compraGift.find(g => g === gift);
    if(tempog){
      alert("Su tarjeta ya se encuentra en el carrito ");
      
    }else{
      alert("Tarjeta añadida");
      this.compraGift.push(gift);
      localStorage.setItem("carrito",JSON.stringify(this.compraGift));
    }
  }


}
