import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule} from '@angular/common';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { CompraGiftcardComponent } from './components/compra-giftcard/compra-giftcard.component';
import { HomeComponent } from './components/home/home/home.component';
import { NavegadorComponent } from './components/navegador/navegador/navegador.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuarioComponent,
    CompraGiftcardComponent,
    HomeComponent,
    NavegadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
