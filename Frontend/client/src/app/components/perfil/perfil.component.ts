import { Component, OnInit } from '@angular/core';
import {Usuarioperfil} from '../../models/usuarioperfil';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VerperfilService} from '../../services/verperfil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuarioperfiles:Usuarioperfil[] = [];
  username:string;
  usuarioperfil:Usuarioperfil;

  constructor(private router:Router,
    private perfilservice:VerperfilService) { }

  ngOnInit(): void {
    this.usuarioperfil = new Usuarioperfil();
    this.getDetallesUsuario();
  }

  getDetallesUsuario()
  {
    this.perfilservice.GetPerfilUsuario(this.username).
    subscribe(perfil =>{
      this.usuarioperfiles = this.usuarioperfiles as Usuarioperfil[];
    }, 
    error => console.error(error));

  }

}
