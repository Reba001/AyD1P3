import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GiftcardService {
  API_URI='';
  constructor(private http:HttpClient) { 
    
  }
  getGiftCards(){
    return this.http.get(this.API_URI);
  }
}
