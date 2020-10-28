import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule} from '@angular/common';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { MostrarGiftcardComponent } from './components/mostrar-giftcard/mostrar-giftcard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { ComprarGiftcardsComponent } from './components/comprar-giftcards/comprar-giftcards.component';
import { HomeComponent } from './components/home/home/home.component';
import { NavegadorComponent } from './components/navegador/navegador/navegador.component';
import { PagoGiftcardComponent } from './components/pago-giftcard/pago-giftcard.component';

library.add(fas,far);

@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuarioComponent,
    MostrarGiftcardComponent,
    ComprarGiftcardsComponent,
    LoginComponent,
    HomeComponent,
    NavegadorComponent,
    EncabezadoComponent,
    PagoGiftcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
