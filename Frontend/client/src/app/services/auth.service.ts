import { Injectable } from '@angular/core';
import { Cuenta } from '../models/cuenta';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isUserLoggedIn:boolean;
  private usserLogged:Cuenta;
  public estado:boolean;



  constructor() {
    this.isUserLoggedIn = false;
    
    this.estado = false;

   }

   setEstado(estado:string):void{
     localStorage.setItem('estado', estado);
   }

   setUsserLoggedIn(usuario:Cuenta):void{
     this.isUserLoggedIn = true;
     this.usserLogged = usuario;
     localStorage.setItem('currentUser', JSON.stringify(usuario));

   }

   getUserLoggedIn(){
    return JSON.parse(localStorage.getItem('currentUser'));
   }

   getEstado(){
     return localStorage.getItem('estado');
   }

   dropUsserLoggedIn(){
    this.isUserLoggedIn = false;
    localStorage.removeItem('currentUser');
  }

  dropEstado(){
    localStorage.removeItem('estado');
  }

  
}
