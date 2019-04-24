import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kong2null'
})
export class Kong2nullPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let res = '';

    if(value != '空' && value != '-'){
      res = value;
    }else if(value == '空' || value == '-'){
        res = '';
    }
    return res;
    }
    
}
  
