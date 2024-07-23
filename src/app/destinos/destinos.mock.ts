export const destinosList:Destinos []=[
{id: 1, pais: 'Argentina', destino:'Bariloche' ,price: 500600 , description: 'nuevas aventuras'},
{id: 2, pais: 'Colombia', destino:'Bogota', price: 10005000 , description: 'nuevas aventuras'},
{id: 3, pais: 'EEUU',destino:'New York', price: 3450000 , description: 'nuevas aventuras'},
{id: 4, pais: 'Brasil',destino:'Rio de janeiro', price: 800000 , description: 'nuevas aventuras'},    
{id: 5, pais: 'Argentina',destino:'Buenos Aires', price: 509380 , description: 'nuevas aventuras'},

]
export interface Destinos {
  id:number|string;
  pais:string;
  destino:string;
  price:number;
  description:string;

}