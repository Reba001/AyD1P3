import { Injectable } from '@angular/core';
import { Giftcard } from '../../models/giftcard';
import { Tarjeta } from '../../models/tarjeta';
import { HttpClient } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiftcardService {

  
  constructor(private http:HttpClient) { }

  getGiftCards():Observable<Giftcard[]>{
    return this.http.get<Giftcard[]>('https://my-json-server.typicode.com/CoffeePaw/AyD1API/Card');
  }

  getValores(){
    return this.http.get<any>('https://my-json-server.typicode.com/CoffeePaw/AyD1API/Value');
  }

  getTasa(){
    return this.http.get<any>('https://my-json-server.typicode.com/CoffeePaw/AyD1API/TasaCambio');
  }

  addGiftcard(gift:Giftcard){
    return this.http.post('http://localhost:3000/registrar_giftcard', gift);
  }

  desactivarGift(gift:Giftcard){
    return this.http.put('http://localhost:3000/desactivar_giftcard', {id:gift.id});
  }

  registrarCompra(tarjeta:Tarjeta){
    return this.http.post('http://localhost:3000/registrar_compra', tarjeta);
  }
  obtenerUltimaFact(){
    return this.http.get('http://localhost:3000/ultima_factura');

  }

  registrarDetalle(detalle){
    return this.http.post('http://localhost:3000/registrar_detalle', detalle);

  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      alert(error.message);
      // TODO: better job of transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
