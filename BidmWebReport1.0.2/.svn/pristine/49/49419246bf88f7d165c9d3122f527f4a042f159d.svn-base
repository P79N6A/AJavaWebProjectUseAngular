import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroToKong'
})
export class ZeroToKongPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let res = '';
    // tslint:disable-next-line:triple-equals
    if (value == 0) {
      res = '';
    } else {
      res = value;
    }
    return res;
  }

}
