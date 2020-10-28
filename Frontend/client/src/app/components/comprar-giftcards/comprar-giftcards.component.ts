import { Component, OnInit } from '@angular/core';
import { GiftcardService } from 'src/app/services/giftcard/giftcard.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, ControlContainer } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Giftcard } from '../../models/giftcard';

import { elementAt } from 'rxjs/operators';

@Component({
  selector: 'app-comprar-giftcards',
  templateUrl: './comprar-giftcards.component.html',
  styleUrls: ['./comprar-giftcards.component.css']
})
export class ComprarGiftcardsComponent implements OnInit {
  tarjetaForm:FormGroup;
  selectOrden:number;
  private userLogin;
  giftCards:Giftcard [] = [];
  total:number = 0;
  valorQ:number = 0;
  dateObj:number = Date.now();

  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private authService:AuthService,
    private giftcardService:GiftcardService) {
      this.selectOrden = 1;

      this.userLogin = this.authService.getUserLoggedIn();
      this.giftCards = JSON.parse(localStorage.getItem("carrito"));
      this.tarjetaForm = this.formBuilder.group(
        {
          notarjeta: ['',Validators.required],
          total: ['', Validators.required],
          seleccionador: ['', Validators.required]
        }
      );

  }

  ngOnInit(): void {
    if(!this.userLogin){
      this.router.navigateByUrl("login");
      return;
    }

   
  }

  public getSubtotal(valor, giftcard:Giftcard){
    let cadena = '';
    this.selectOrden = 1;
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
    this.selectOrden = 1;
    
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

  public getError(controlName:string):string{
    let error= '';
    const control = this.tarjetaForm.controls[controlName];
    if(control.touched && control.errors != null){
      error = 'Se necesita '+controlName+' campo obligatorio.';
      
    }
    return error;

  }



  getTotal(){
    let total:number = 0;
    this.giftCards.forEach(element =>{
      if(element.subtotal){
        console.log("calculando el total");
        console.log(element.subtotal);
        total = total + element.subtotal;
      }
      
    });
    this.valorQ = total;
    //this.tarjetaForm.controls['total'].setValue(total);
    return total;
  }

  convertir(){
    const control = this.tarjetaForm.controls['total'];
    if(this.selectOrden == 2){
      console.log("convirtiendo a quetzales");
      control.setValue(7.85 * this.valorQ);
    }else{
      console.log("convirtiendo a dolares");
      control.setValue(this.valorQ);
    }

  }

  async comprarTarjeta(fecha){
    alert("compra existosa");
    console.log("-----------------------------");
    console.log(fecha);
    console.log(this.tarjetaForm.controls['total'].value);

    // aqui va el servicio y la modificacion para ver lo que se manda a la BD
  }

}
