import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProducts } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL='https://fakestoreapi.com/products'

  constructor( private _httpClient: HttpClient) { }

  public getAllProducts(): Observable <IProducts[]> { // devuelve observable de productos
    return this._httpClient.get<IProducts[]> (`${this.baseURL}`);

  }

  public getProductsById(id: number): Observable <IProducts>{ // devuelve observable de 1 producto
    return this._httpClient.get<IProducts> (`${this.baseURL}/${id}`);

  }

  public getAllCategories(): Observable<Category[]>{
    return this._httpClient.get<Category[]> (`${this.baseURL}/categories`);
  }

  public newProduct( product : IProducts) : Observable <IProducts>{ //post
    return this._httpClient.post<IProducts> (`${this.baseURL}`, product);

  }

  public updateProduct(id: number, product: IProducts) : Observable<IProducts>{//put
    return this._httpClient.put<IProducts>(`${this.baseURL}/${id}`, product);
  }

  public deleteProduct(id:number):Observable<IProducts>{
    return this._httpClient.delete<IProducts> (`${this.baseURL}/${id}`);

  }

}
