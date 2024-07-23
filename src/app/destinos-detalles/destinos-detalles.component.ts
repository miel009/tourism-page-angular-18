import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-destinos-detalles',
  templateUrl: './destinos-detalles.component.html',
  styleUrl: './destinos-detalles.component.css'
})
export class DestinosDetallesComponent implements OnInit {
 destinos: string ='';
 color: string = '';
  
 constructor(private _route: ActivatedRoute){ }

 ngOnInit(): void {
     this._route.params.subscribe(params => {
     this.destinos = params['destinoId'];
     this.color = params['category'];
     });
 }


}
