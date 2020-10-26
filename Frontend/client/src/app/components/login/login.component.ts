import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { first } from 'rxjs/operators';
import { LogearseService} from '../../services/logearse.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    user:User;

    getuser: string;
    getpass: string;
    rolseleccionado: string = '';
    mensaje: string;
    retorno: string;

  constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private logearse: LogearseService
  ) { }

  ngOnInit(): void {
      this.user = new User();
      this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]});
  }

  selectChangeHandler (event: any) {
    this.rolseleccionado = event.target.value;
  }

  TryLogin()
  {
    this.logearse.login(this.user).subscribe(usuario =>{
      console.log(usuario);
      if(usuario.status == 'error'){
        alert("Credenciales incorrectas vuelva a ingresarlas");
        return;
      }
      console.log("sii se pudo conectar");

    });
      
      /*if(this.logearse.login(this.user) == 'ok')
      {
      
          //rutear a página siguiente
      }
      else
      {
          console.log("usuario no registrado");
      }*/
  }

} 


