import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup } from '@angular/forms';
import { ProdutosService } from '../services/produtos.service';
import { error } from 'console';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ifError } from 'assert';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrl: './produtos-form.component.scss'
})

export class ProdutosFormComponent implements OnInit {
     
  form: FormGroup;
  isActive: boolean = false;
  private _snackBar: any;
  
  constructor(private formBuilder: FormBuilder, private service: ProdutosService, private snackBar: MatSnackBar){
   
        this.form = this.formBuilder.group({
          name: [null],
          price_in_cents:[null],
          //quantity: [null]
          active:[null]
        });
        
      
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
    this.service.save(this.form.value).subscribe( result => console.log(result) //, ifError => {this.onError()}
    );
  }

  onError(){
    this._snackBar.open
  }
}



