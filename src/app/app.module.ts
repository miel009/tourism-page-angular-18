import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { DestinosComponent } from './destinos/destinos.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DestinosDetallesComponent } from './destinos-detalles/destinos-detalles.component';

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
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
