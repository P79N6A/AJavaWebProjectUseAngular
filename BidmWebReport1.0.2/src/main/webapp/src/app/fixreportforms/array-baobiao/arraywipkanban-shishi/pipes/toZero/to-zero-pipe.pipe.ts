import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toZeroPipe'
})
export class ToZeroPipePipe implements PipeTransform {


  transform(value: any, args?: any): any {
    let res = '';

    if (value != 0) {
      res = value;
    } else {
      res = '';
    }

    return res;
  }

}
