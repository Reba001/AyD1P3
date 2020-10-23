import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario/usuario';
import { Cuenta } from 'src/app/models/cuenta';

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
    cuenta.correo = this.usuarioForm.controls['correo'].value();
    cuenta.password = this.usuarioForm.controls['password'].value();
    cuenta.username = this.usuarioForm.controls['username'].value();


    let respuesta:any = await this.usuarioService.addUsuario(usuario).toPromise();

    console.log(respuesta);

    let ultimoId:any = await this.usuarioService.obtenerUltimouser().toPromise();
    console.log(ultimoId);

    cuenta.id_usuario = ultimoId.id_usuario;

    let cuenta2:any = await this.usuarioService.registrarCuenta(cuenta).toPromise();
    console.log(cuenta2);

    

  }



}
