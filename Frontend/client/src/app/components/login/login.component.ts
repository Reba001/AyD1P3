import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { first } from 'rxjs/operators';
import { LogearseService} from '../../services/logearse.service';
import { Cuenta } from 'src/app/models/cuenta';
import { AuthService } from 'src/app/services/auth.service';

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

    private userlogin;

  constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private logearse: LogearseService,
        private autService:AuthService
  ) {
    this.userlogin = this.autService.getUserLoggedIn();
   }

  ngOnInit(): void {
    if(this.userlogin){
      this.router.navigateByUrl("mostrar-giftcards");
      return;
    }
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
    let cuenta = new Cuenta();
    cuenta.username = this.loginForm.controls['username'].value;
    cuenta.password = this.loginForm.controls['password'].value;
    console.log(cuenta);
    this.logearse.login(cuenta).subscribe(usuario =>{
      console.log(usuario);
      if(usuario.status == 'error'){
        alert("Credenciales incorrectas vuelva a ingresarlas");
        return;
      }
      console.log("sii se pudo conectar");
      for(var u of usuario){
        if(u.password === cuenta.password && u.username === cuenta.username){
          console.log(u);
          this.autService.setUsserLoggedIn(usuario);
          this.router.navigateByUrl("mostrar-giftcards");
          console.log(usuario);
          break;
        }
      }


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


