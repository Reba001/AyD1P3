import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { GiftcardService } from 'src/app/services/giftcard/giftcard.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Compra } from '../../models/compra';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-historial-compra',
  templateUrl: './historial-compra.component.html',
  styleUrls: ['./historial-compra.component.css']
})
export class HistorialCompraComponent implements OnInit {
  faStar = faStar;
  compras:Compra[] = [];
  private userLog;

  constructor(private giftcardService:GiftcardService,
    private authService:AuthService,
    private router:Router) {
      this.userLog = this.authService.getUserLoggedIn();

     }

  ngOnInit(): void {
    if(!this.userLog){
      this.router.navigateByUrl('login');
      return;
    }
    this.getCompras();
  }

  desencriptar(numtarjet:string):string{
    return CryptoJS.AES.decrypt(numtarjet.trim(), "123ABC").toString(CryptoJS.enc.Utf8);
  }

  getCompras(){
    const idusuario:number = this.userLog[0].id_usuario;
    this.giftcardService.historialCompra(idusuario).subscribe(
      compras => {
        console.log(compras);
        this.compras = compras;
        console.log(this.compras);
      }
    );

  }

}
