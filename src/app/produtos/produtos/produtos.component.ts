import { Component, OnInit } from '@angular/core';
import { Produtos } from '../model/produtos';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})

export class ProdutosComponent implements OnInit {

  produtos: Produtos[] = [
    
  ] ;
  displayedColumns = ['_id','name','price_in_cents','ativo'];

//produtosService : ProdutosService;

  constructor(private produtosService : ProdutosService){
   // this.produtosService = new ProdutosService();
    this.produtos = this.produtosService.list();
  }

  ngOnInit(): void {
      
  }

}
