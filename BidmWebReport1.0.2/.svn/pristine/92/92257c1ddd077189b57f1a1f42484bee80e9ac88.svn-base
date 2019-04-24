import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strFormat'
})
export class StrFormatPipe implements PipeTransform {

  transform(value: string, args?: string): string {
    if (value.length > 5) {
      if (!args) {
        args = 'k';
      }
      if (value === '-') {
        return value;
      } else {
        if (args === 'k') {
          return ((parseInt(value, 10) / 1000).toFixed(0) + 'k');
        } else if (args === 'w') {
          return ((parseInt(value, 10) / 10000).toFixed(0) + 'w');
        }
      }
    } else {
      return value;
    }
  }
}
