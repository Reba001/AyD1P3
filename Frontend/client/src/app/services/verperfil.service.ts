import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Usuarioperfil } from '../models/usuarioperfil'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class VerperfilService {

  private usuariourl = 'http://localhost:3000/get_info_usuario';
  constructor(private http: HttpClient) { }

  GetPerfilUsuario(username:string)
  {
    return this.http.post<any>(this.usuariourl, {Usuarioperfil}, httpOptions);
  }


}
