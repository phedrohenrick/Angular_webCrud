import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produtos } from '../../model/produtos';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrl: './produtos-list.component.scss'
})


export class ProdutosListComponent implements OnInit {
  
  @Input() produtos: Produtos[] = []
  @Output() add = new EventEmitter (false);

  readonly displayedColumns = [/*'_id',*/'name','price_in_cents','active', 'action'];
  isTrue: boolean = true;



  constructor(){}
 
 
  ngOnInit(): void {}


  onAdd(){
      this.add.emit(true); 
  }
  
 
}
