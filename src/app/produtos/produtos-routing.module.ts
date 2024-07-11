import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosFormComponent } from './containers/produtos-form/produtos-form.component';
import { ProdutosComponent } from './containers/produtos/produtos.component';

const routes: Routes = [
  {path: '', component: ProdutosComponent },
  {path: 'new', component: ProdutosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
