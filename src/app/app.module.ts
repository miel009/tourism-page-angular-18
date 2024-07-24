import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { DestinosComponent } from './destinos/destinos.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DestinosDetallesComponent } from './destinos-detalles/destinos-detalles.component';
import{FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DestinosComponent,
    PaquetesComponent,
    ContactoComponent,
    DestinosDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //TIPO PLANTILLA
    ReactiveFormsModule // FORM REACTIVO
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
