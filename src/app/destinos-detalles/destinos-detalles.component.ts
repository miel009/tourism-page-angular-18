import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProducts } from '../models/products.model';
import { ApiService } from '../servicios/api.service';
import { error } from 'console';


@Component({
  selector: 'app-destinos-detalles',
  templateUrl: './destinos-detalles.component.html',
  styleUrl: './destinos-detalles.component.css'
})
export class DestinosDetallesComponent implements OnInit {

 destinos?: IProducts;
 destinosList: IProducts[]=[]
 loading: boolean= true; // cambia entre destinos
 color: string = '';
 
  
 constructor(
  private _route: ActivatedRoute,
  private _apiService: ApiService

){ }

 ngOnInit(): void {
    this._route.params.subscribe({
    next:(params: Params)=>{
     this._apiService.getProductsById(Number(params['destinoId'])).subscribe({
      next:(data: IProducts)=> {
      this.destinos=data
      this.color = this.destinos?.price as number > 100 ? 'red' : ''
      this.loading = false
    },
     error: (error:any) => {
      console.log(error);
      this.loading=false;
      }
    })
   },
   error: (error:any) => {
    console.log(error);
   }
  }) 
 }
}