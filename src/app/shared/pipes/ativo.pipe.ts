import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ativo'
})
export class AtivoPipe implements PipeTransform {

  transform(value: boolean): String {
    switch(value){
      case true: return 'check_small';
      case false: return 'close';
    }
  
  }

}
