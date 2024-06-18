// servirá para deixar armazenado todos os imports que  precisamos para desenvolver. Caso no futura seja necessário crescer a aplicação h


import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class AppMaterialModule { }
