import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario/usuario';
import { Cuenta } from '../../models/cuenta';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) {

   }

  addUsuario(usuario:Usuario){
    return this.http.post('http://localhost:3000/registrar_usuario', usuario);
  }

  obtenerUltimouser(){
    return this.http.get('http://localhost:3000/ultimo_usuario');
  }

  registrarCuenta(cuenta:Cuenta){
    return this.http.post('http://localhost:3000/registrar_cuenta', cuenta);

  }

  verificarUsuario(usuario : string){
    return this.http.post('http://localhost:3000/verificar_user', {username:usuario});
  }

  verificarCorreo(correo: string){
    return this.http.post('http://localhost:3000/verificar_correo', {correo:correo});
  }




}
