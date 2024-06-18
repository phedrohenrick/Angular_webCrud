import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { AtivoPipe } from './pipes/ativo.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    AtivoPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [ErrorDialogComponent, AtivoPipe]
})
export class SharedModule { }
