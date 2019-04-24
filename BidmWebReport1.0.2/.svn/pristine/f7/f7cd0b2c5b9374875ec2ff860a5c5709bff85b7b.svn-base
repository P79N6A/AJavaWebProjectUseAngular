import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'handlezero2'
})
export class Handlezero2Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let res = null;
    if(value == 0){
      res = '-';
    }else {
      res = value;
    }
    return res;
  }

}
