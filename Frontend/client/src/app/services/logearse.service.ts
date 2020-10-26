import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LogearseService {

  private usuariourl = 'http://3.227.118.254:3000/login';
  retorno: string;

  constructor(private http:HttpClient) { }

  login(user:User)
  {
    return this.http.post<any>(this.usuariourl, {user}, httpOptions);
    /*this.http.post<any>(this.usuariourl, {user}, httpOptions).subscribe(data => {
    this.retorno = data.id;
    console.log('respuesta: ' + data.id);})
    return this.retorno;*/
  }
}
