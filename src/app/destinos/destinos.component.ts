import { Component } from '@angular/core';
import { destinosList } from './destinos.mock';

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrl: './destinos.component.css'
})
export class DestinosComponent {

  destinosList = destinosList;
}
