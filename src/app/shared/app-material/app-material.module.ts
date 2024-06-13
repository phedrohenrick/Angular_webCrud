// servirá para deixar armazenado todos os imports que  precisamos para desenvolver. Caso no futura seja necessário crescer a aplicação h


import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
  ]
})
export class AppMaterialModule { }
