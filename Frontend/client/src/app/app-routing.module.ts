import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { MostrarGiftcardComponent } from './components/mostrar-giftcard/mostrar-giftcard.component';
import { ComprarGiftcardsComponent } from './components/comprar-giftcards/comprar-giftcards.component';
import { HistorialCompraComponent } from './components/historial-compra/historial-compra.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path: 'registro-usuario', component:RegistroUsuarioComponent},
  {path: 'mostrar-giftcards', component:MostrarGiftcardComponent},
  {path: 'comprar' , component:ComprarGiftcardsComponent},
  {path: 'historial-compra', component:HistorialCompraComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
