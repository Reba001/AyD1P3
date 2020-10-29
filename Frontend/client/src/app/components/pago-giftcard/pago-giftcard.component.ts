import { Component, OnInit, Input } from '@angular/core';
import { GiftcardService } from 'src/app/services/giftcard/giftcard.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Tarjeta } from 'src/app/models/tarjeta';
import * as CryptoJS from 'crypto-js';
import { Giftcard } from 'src/app/models/giftcard';

@Component({
  selector: 'app-pago-giftcard',
  templateUrl: './pago-giftcard.component.html',
  styleUrls: ['./pago-giftcard.component.css']
})
export class PagoGiftcardComponent implements OnInit {
  

  tarjetaForm:FormGroup;
  selectOrden:number;
  valorQ:number = 0;
  @Input() numusuario:number = 0;

  @Input() giftCards:Giftcard [] = [];
  dateObj:number = Date.now();
  constructor(private giftcardService:GiftcardService,
    private formBuilder:FormBuilder) { 
    this.selectOrden = 1;
    this.tarjetaForm = this.formBuilder.group(
      {
        notarjeta: ['',Validators.required],
        total: ['', Validators.required],
        seleccionador: ['', Validators.required]
      }
    );
  }

  ngOnInit(): void {
    

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
    return  total ;
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
    tarjeta.tarjeta = codigo;
    tarjeta.id = this.numusuario;
    console.log("<-------------- Tarjeta ------------------->");
    console.log(tarjeta);
    
    if(fecha){
      const factura:any = await this.giftcardService.registrarCompra(tarjeta).toPromise();
      console.log(factura);
      if(factura.status === 'ok'){
        const ultimoF:any = await this.giftcardService.obtenerUltimaFact().toPromise();
        console.log("Ultimo factura");
      
        console.log(ultimoF);
        for(let card1 of this.giftCards){
          console.log("------Detalle--------");
          console.log(card1);
          const precio = card1.subtotal / card1.cantidad;
          const obdetalle = { 
            factura: ultimoF[0].id, 
            gift: parseInt(card1.id.toString()),
            precio:precio,
            cantidad:card1.cantidad };
          console.log(obdetalle);
          // aqui empieza la insercion a detalle
          const repuesta1:any = await this.giftcardService.registrarDetalle(obdetalle).toPromise();
          if(repuesta1.status == 'ok'){
            console.log("Detalle registrado :))");

          }
        }
        /*this.giftCards.forEach(async dettalle =>{
          console.log("------Detalle--------");
          console.log(dettalle);
          const precio = dettalle.subtotal / dettalle.cantidad;
          const obdetalle = { factura: ultimoF[0].id, 
            gift:dettalle.id,
            precio:precio,
            cantidad:dettalle.cantidad };
          console.log(obdetalle);
          // aqui empieza la insercion a detalle
          const response:any = await this.giftcardService.registrarDetalle(obdetalle).toPromise();
          if(response.status == 'ok'){
            console.log("Detalle registrado :))");

          }
        });*/

        alert("Compra exitosa :D");
        

      }else{
        alert("Error al insertar la compra xD");
      }

    }
    
    

    // aqui va el servicio y la modificacion para ver lo que se manda a la BD
  }




}
