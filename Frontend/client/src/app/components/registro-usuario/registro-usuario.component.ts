import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario/usuario';
import { Cuenta } from 'src/app/models/cuenta';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  usuarioForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group(
      {
        nombre: ['',Validators.required],
        apellido: ['',Validators.required],
        dpi: ['', Validators.required],
        edad:['', Validators.required],
        username: ['', Validators.required],
        correo: ['', Validators.required],
        password: ['', Validators.required]

        
      }
    );
  }

  public getError(controlName:string):string{
    let error= '';
    const control = this.usuarioForm.controls[controlName];
    if(control.touched && control.errors != null){
      if(controlName == 'clave'){
        error = 'Se necesita '+controlName+' campo obligatorio, al menos 1 letra, 1 simbolo y 1 numero.';
      }else {
        error = 'Se necesita '+controlName+' campo obligatorio.';
      }
    }
    return error;

  }

  async addUsuario(){

    let usuario:Usuario = new Usuario();
    usuario.apellido = this.usuarioForm.controls['apellido'].value;
    usuario.nombre = this.usuarioForm.controls['nombre'].value;
    usuario.edad = this.usuarioForm.controls['edad'].value;
    usuario.dpi = this.usuarioForm.controls['dpi'].value;
    console.log(usuario);

    let cuenta:Cuenta = new Cuenta();
    cuenta.correo = this.usuarioForm.controls['correo'].value;
    cuenta.password = this.usuarioForm.controls['password'].value;
    cuenta.username = this.usuarioForm.controls['username'].value;
    console.log(cuenta);


    let respuesta:any = await this.usuarioService.addUsuario(usuario).toPromise();
    let verUsuario:any = await this.usuarioService.verificarUsuario(cuenta.username).toPromise();
    let verCorreo:any = await this.usuarioService.verificarCorreo(cuenta.correo).toPromise(); 

    console.log(respuesta);
    console.log("Usuario");

    console.log(verUsuario);
    console.log("Correo");
    console.log(verCorreo);

    if(respuesta.status == 'ok' && verUsuario.status  != 'error' && verCorreo.status != 'error'){
      let ultimoId:any = await this.usuarioService.obtenerUltimouser().toPromise();
      console.log(ultimoId);
      

      for(var id of ultimoId){
        console.log(id.id);
        cuenta.id = id.id;
      }

      console.log(cuenta);


      let cuenta2:any = await this.usuarioService.registrarCuenta(cuenta).toPromise();
      console.log(cuenta2);


    }else{
      alert('Error al ingresar y registrar un usuario');
    }

    

    

  }



}
