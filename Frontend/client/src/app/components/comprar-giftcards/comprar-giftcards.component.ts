import { Component, OnInit } from '@angular/core';
import { GiftcardService } from 'src/app/services/giftcard/giftcard.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, ControlContainer } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Giftcard } from '../../models/giftcard';

import { elementAt } from 'rxjs/operators';
import { Tarjeta } from 'src/app/models/tarjeta';
import * as CryptoJS from 'crypto-js';
import { ASTWithSource } from '@angular/compiler';
import { async } from 'rxjs/internal/scheduler/async';
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
      this.giftcardService.getTasa().subscribe(
        res =>{
          console.log("Este calculo de quetzales");
          console.log(res);
          res.forEach(element => {
            console.log(element);
            control.setValue(element.total * this.valorQ);
            
          });
        }
      );
      
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
    // fecha, estado, notarjeta, id_usuario
    let tarjeta = new Tarjeta();
    tarjeta.estado = 'A';
    tarjeta.fecha = fecha;
    let not = this.tarjetaForm.controls['notarjeta'].value;
    console.log(not);
    const codigo = CryptoJS.AES.encrypt(not, "123ABC").toString();
    console.log(codigo);
    tarjeta.no_tarjeta = codigo;
    tarjeta.id_usuario = this.userLogin[0].id_usuario;
    
    
    const factura:any = await this.giftcardService.registrarCompra(tarjeta).toPromise();
    if(factura.status === 'ok'){
      const ultimoF:any = await this.giftcardService.obtenerUltimaFact().toPromise();
      this.giftCards.forEach(async dettalle =>{
        const precio = dettalle.subtotal / dettalle.cantidad;
        const obdetalle = { factura: ultimoF.id, 
          gift:dettalle.id,
          precio:precio,
          cantidad:dettalle.cantidad };
        // aqui empieza la insercion a detalle
        const response:any = await this.giftcardService.registrarDetalle(obdetalle).toPromise();
        if(response.status == 'ok'){
          console.log("Detalle registrado :))");

        }
      });

      alert("Compra exitosa :D");
      

    }else{
      alert("Error al insertar la compra xD");
    }


    // aqui va el servicio y la modificacion para ver lo que se manda a la BD
  }

}
