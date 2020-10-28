import { Component, OnInit } from '@angular/core';
import { GiftcardService } from 'src/app/services/giftcard/giftcard.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Giftcard } from '../../models/giftcard';

import { elementAt } from 'rxjs/operators';
import { Tarjeta } from 'src/app/models/tarjeta';

import { ASTWithSource } from '@angular/compiler';
import { async } from 'rxjs/internal/scheduler/async';
@Component({
  selector: 'app-comprar-giftcards',
  templateUrl: './comprar-giftcards.component.html',
  styleUrls: ['./comprar-giftcards.component.css']
})
export class ComprarGiftcardsComponent implements OnInit {
  
  private userLogin;
  giftCards:Giftcard [] = [];
  numusuario:number = 0;
  

  constructor(
    private router:Router,
    private authService:AuthService,
    ) {
      

      this.userLogin = this.authService.getUserLoggedIn();
      this.giftCards = JSON.parse(localStorage.getItem("carrito"));
      this.numusuario = this.userLogin[0].id_usuario;
      

  }

  ngOnInit(): void {
    if(!this.userLogin){
      this.router.navigateByUrl("login");
      return;
    }

   
  }

  public getSubtotal(valor, giftcard:Giftcard){
    let cadena = '';
    if(giftcard.cantidad){
      let subtotal = giftcard.cantidad * valor;  
      console.log("Subtotal");
      console.log(subtotal);

      giftcard.subtotal = subtotal;
      console.log("Giftcard");
      console.log(giftcard);
      
      cadena = "Subtotal: " + subtotal;
    }else {

      giftcard.subtotal = 0;
      
      
    }
    return cadena;
    
  }

  public valorCap(valor, giftcard:Giftcard){
    console.log(valor);
    
    if(giftcard.cantidad){
      let subtotal = giftcard.cantidad * valor;  
      console.log("Subtotal");
      console.log(subtotal);

      giftcard.subtotal = subtotal;
      console.log("Giftcard");
      console.log(giftcard);
    }else {
      giftcard.subtotal = 0;
      
    }
    
  }

 

  
 

}
