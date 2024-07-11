import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrl: './produtos-form.component.scss'
})

export class ProdutosFormComponent implements OnInit {
     
  form= this.formBuilder.group({
    name: [''],
    price_in_cents:[],
    //quantity: [null]
    active:[false]
  });
  isActive: boolean = false;
  private _snackBar: any;
  
  constructor(private formBuilder: NonNullableFormBuilder,
      private service: ProdutosService,
      private snackBar: MatSnackBar,
      private location:Location){
   
        this.form
        
      
      }
  ngOnInit(): void {
      
  }
  toggleActive(): void {
    this.isActive = !this.isActive;
  }
  clearForm(): void {
    //this.form.clearAsyncValidators;
  }
  onSubmit(){
    this.service.save(this.form.value)
    .subscribe( result => this.onSuccess()
    );
  }

  private onSuccess(){
    this.snackBar.open('item adicionado com sucesso', '', {duration: 3000})
  } 
  private  onError(){
    this.snackBar.open('error ao adicionar item', '', {duration: 5000})
  }
   onCancel(){
    this.location.back();
  }
}



