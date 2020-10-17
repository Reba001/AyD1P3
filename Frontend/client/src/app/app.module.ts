import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule} from '@angular/common';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { GiftcardsComponent } from './components/giftcards/giftcards.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuarioComponent,
    GiftcardsComponent
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
