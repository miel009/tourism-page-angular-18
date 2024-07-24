import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Destinos, destinosList } from '../destinos/destinos.mock';

@Component({
  selector: 'app-destinos-detalles',
  templateUrl: './destinos-detalles.component.html',
  styleUrl: './destinos-detalles.component.css'
})
export class DestinosDetallesComponent implements OnInit {
 destinos?: Destinos;
 destinosList: Destinos[] = destinosList
 loading: boolean= true; // cambia entre destinos
 color: string = '';
 
  
 constructor(private _route: ActivatedRoute){ }

 ngOnInit(): void {
    setTimeout(() =>{
    this._route.params.subscribe(params => {
      this.destinos = this.destinosList.find(destinos => destinos.id == params['destinoId']);
      this.color = this.destinos?.price as number > 8 ? 'red' : ''
      this.loading = false;
    });
    }, 1500);

 }

}