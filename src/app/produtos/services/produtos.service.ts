import { Injectable } from '@angular/core';
import { Produtos } from '../model/produtos';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API = '/api/product' // por esse caminho encontrará o lugar onde estarão os dados para requisições http

  constructor(private httpClient : HttpClient) { }

  list() { 
    return this.httpClient.get<Produtos[]>(this.API).pipe( 
      first(),
      delay(2000),
      tap(produtos => console.log(produtos)));
  }

  save(record: Partial<Produtos>){// responsavel por enviar os dados ao back-end
      return this.httpClient.post<Produtos>(this.API, record).pipe(first());
  }
}


