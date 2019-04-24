import { Pipe, PipeTransform } from '@angular/core';

export enum MethType {
  round,
  ceil,
  trunc,
  null

}
@Pipe({
  name: 'decimalPrecision'
})

export class DecimalPrecisionPipe implements PipeTransform {
  methType: MethType;

  transform(value: any, num, type): any {
    let rsltValue = value;
    const count = Math.pow(10, num - 1);

    switch (type) {
      case 'ceil':
        value = Math.ceil(value * count) / count;
        break;
      case 'trunc':
        value = Math.floor(value * count) / count;
        break;
      default:
        value = Math.round(value * count) / count;
    }

    rsltValue = value.toFixed(num);
    return rsltValue;
  }
}
