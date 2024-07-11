import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './containers/produtos/produtos.component';
import { ProdutosFormComponent } from './containers/produtos-form/produtos-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdutosListComponent } from './components/produtos-list/produtos-list.component';


@NgModule({
  declarations: [
    ProdutosComponent,
    ProdutosFormComponent,
    ProdutosListComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    AppMaterialModule,
    MatProgressSpinnerModule,
    SharedModule,
    ReactiveFormsModule, // fornecerá feramentas de construção de forms
   
  ]
})
export class ProdutosModule { }
