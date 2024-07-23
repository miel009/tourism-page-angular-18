import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DestinosComponent } from './destinos/destinos.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DestinosDetallesComponent } from './destinos-detalles/destinos-detalles.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'destinos', component: DestinosComponent},
  {path: 'destinos/:destinoId', component: DestinosDetallesComponent},
  {path: 'paquetes', component: PaquetesComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
