import { Component, OnInit } from '@angular/core';
import { IProducts } from '../models/products.model';
import { ApiService } from '../servicios/api.service';


@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrl: './destinos.component.css'
})
export class DestinosComponent implements OnInit{

  destinosList : IProducts[] =[];

  constructor(private _apiService: ApiService){}

  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe((data: IProducts[])=>{
      console.log(data)
      this.destinosList=data;
    })
  }


}
