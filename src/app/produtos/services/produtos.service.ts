import { Injectable } from '@angular/core';
import { Produtos } from '../model/produtos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private httpClient : HttpClient) { }

  list(): Produtos[] { 
    return [{_id: 1 , name:'camiseta',price_in_cents:2000, ativo: true}];
  }
  
}


