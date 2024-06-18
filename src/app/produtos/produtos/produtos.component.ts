import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Produtos } from '../model/produtos';
import { ProdutosService } from '../services/produtos.service';
import { error } from 'console';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})

export class ProdutosComponent implements OnInit {

  produtos$: Observable <Produtos[]>;
  displayedColumns = ['_id','name','price_in_cents','ativo'];
  isTrue: boolean = true;

 

//produtosService : ProdutosService;

  constructor(
    private produtosService : ProdutosService,
    public dialog: MatDialog
  ){
   // this.produtosService = new ProdutosService();
    this.produtos$ = produtosService.list().pipe(
      catchError(error => {
      this.onError("Erro ao carregar os produtos em estoque");
        return of([])
    })
  );
    
  }

  onError(ErrorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: ErrorMessage
    });
  }

  ngOnInit(): void {
      
  }

}
