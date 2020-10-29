import { Component, OnInit } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  faCartPlus = faCartPlus;
  usserLogged ;

  constructor(private authService:AuthService,
    private router:Router) {
    
    this.usserLogged = this.authService.getUserLoggedIn();
   }

  ngOnInit(): void {
  }

  logout(){
    this.authService.dropUsserLoggedIn();
    this.router.navigateByUrl("login");
  }

}
